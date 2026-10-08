"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { chatSuggestions, getChatReply } from "@/data/chatbot";

type Message = {
  id: number;
  role: "user" | "bot";
  text: string;
};

let messageId = 0;

function renderLinks(text: string) {
  const parts = text.split(/\s+/);
  return parts.map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-accent-soft underline underline-offset-2"
        >
          {part}
        </a>
      );
    }
    return <span key={index}>{index > 0 ? " " : ""}{part}</span>;
  });
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    const userMessage: Message = { id: ++messageId, role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    const delay = 600 + Math.min(900, getChatReply(trimmed).length);
    window.setTimeout(() => {
      const botMessage: Message = {
        id: ++messageId,
        role: "bot",
        text: getChatReply(trimmed),
      };
      setMessages((prev) => [...prev, botMessage]);
      setTyping(false);
    }, delay);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") send(input);
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-[0_16px_40px_-12px_rgba(255,45,120,0.7)] transition-transform duration-300 hover:scale-105 active:scale-95"
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid place-items-center"
            >
              <MessageCircle aria-hidden="true" className="h-6 w-6 animate-pulse-soft" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Chat with Anwar's assistant"
            initial={{ opacity: 0, y: 24, scale: reduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: reduceMotion ? 1 : 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-5 z-50 flex h-[520px] max-h-[70vh] w-[min(92vw,390px)] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-surface/95 shadow-[0_30px_80px_-20px_rgba(255,45,120,0.35)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 border-b border-white/[0.08] bg-ink/40 px-4 py-3">
              <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#ff5c9d] to-[#ff2d78] text-[13px] font-bold text-white">
                A
                <span
                  aria-hidden="true"
                  className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface bg-emerald-400"
                />
              </span>
              <div className="min-w-0">
                <p className="text-[14px] font-semibold text-white">Anwar&rsquo;s assistant</p>
                <p className="truncate text-[11.5px] text-faint">
                  Answers about me, my work, and how to reach me
                </p>
              </div>
            </div>

            <div
              ref={listRef}
              className="chat-scroll flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.length === 0 && !typing && (
                <div className="space-y-2.5">
                  <p className="max-w-[85%] rounded-2xl rounded-bl-md border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-[13.5px] leading-relaxed text-mist">
                    Hey — ask me anything about Anwar, what he builds, how he works, or how to reach him.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {chatSuggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => send(suggestion)}
                        className="rounded-full border border-accent/40 bg-accent/[0.08] px-3 py-1.5 text-[12.5px] font-medium text-accent-soft transition-colors hover:bg-accent/20"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={
                    message.role === "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >
                  <div
                    className={
                      message.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-br-md bg-accent px-3.5 py-2.5 text-[13.5px] leading-relaxed text-white"
                        : "max-w-[85%] rounded-2xl rounded-bl-md border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-[13.5px] leading-relaxed text-white"
                    }
                  >
                    {renderLinks(message.text)}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/[0.08] bg-white/[0.04] px-3.5 py-3">
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-accent-soft"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: dot * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 border-t border-white/[0.08] bg-ink/40 px-3 py-3">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything…"
                aria-label="Type your question"
                className="h-10 flex-1 rounded-full border border-white/[0.1] bg-ink/70 px-4 text-[13.5px] text-white placeholder:text-white/25 focus:border-accent/60 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent-soft"
              />
              <button
                type="button"
                onClick={() => send(input)}
                disabled={typing || !input.trim()}
                aria-label="Send message"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-white shadow-[0_10px_24px_-10px_rgba(255,45,120,0.9)] transition-transform duration-200 hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                <Send aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}