import { ArrowUp, Check, Mic, Monitor, Terminal, Volume2, Workflow } from "lucide-react";
import { MockWindow } from "./parts";

const tools = [
  { label: "Speech recognition", icon: Mic },
  { label: "Text-to-speech", icon: Volume2 },
  { label: "App control", icon: Monitor },
  { label: "Automation", icon: Workflow },
];

export function AssistantMock() {
  return (
    <MockWindow
      title="assistant · session"
      right={
        <span className="flex items-center gap-1.5 font-mono text-[8px] text-emerald-300 sm:text-[9px]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" aria-hidden="true" />
          listening
        </span>
      }
    >
      <div className="flex h-full">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-col gap-2 overflow-hidden p-2.5 sm:gap-2.5 sm:p-3.5">
            <div className="max-w-[88%] self-end rounded-xl rounded-br-sm border border-white/[0.07] bg-white/[0.06] px-2.5 py-1.5 text-[9.5px] leading-snug text-white/85 sm:text-[10.5px]">
              Summarize the new files in my Downloads folder
            </div>

            <div className="flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/[0.07] px-2 py-1.5">
              <Terminal aria-hidden="true" className="h-2.5 w-2.5 shrink-0 text-accent-soft" strokeWidth={1.75} />
              <span className="truncate font-mono text-[8px] text-accent-soft sm:text-[9px]">
                read_directory
              </span>
              <span className="ml-auto flex items-center gap-1 font-mono text-[7.5px] text-mist sm:text-[8.5px]">
                24 files
                <Check aria-hidden="true" className="h-2.5 w-2.5 text-emerald-400" strokeWidth={3} />
              </span>
            </div>

            <div className="max-w-[92%] self-start rounded-xl rounded-bl-sm border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-[9.5px] leading-snug text-mist sm:text-[10.5px]">
              24 files found — 6 PDFs, 11 images, 7 archives. 3 files were added
              today.
            </div>

            <div className="max-w-[88%] self-end rounded-xl rounded-br-sm border border-white/[0.07] bg-white/[0.06] px-2.5 py-1.5 text-[9.5px] leading-snug text-white/85 sm:text-[10.5px]">
              Start my dev server and open the editor
            </div>

            <div className="flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/[0.07] px-2 py-1.5">
              <Terminal aria-hidden="true" className="h-2.5 w-2.5 shrink-0 text-accent-soft" strokeWidth={1.75} />
              <span className="truncate font-mono text-[8px] text-accent-soft sm:text-[9px]">
                npm run dev
              </span>
              <span className="ml-auto flex items-center gap-1 font-mono text-[7.5px] text-mist sm:text-[8.5px]">
                localhost:3000
                <Check aria-hidden="true" className="h-2.5 w-2.5 text-emerald-400" strokeWidth={3} />
              </span>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-2 border-t border-white/[0.07] p-2.5 sm:p-3">
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.03] px-3 py-1.5">
              <span className="truncate text-[9px] text-white/30 sm:text-[10px]">
                Ask anything…
              </span>
              <span className="ml-auto flex h-3 items-end gap-[2px]" aria-hidden="true">
                {[0, 0.15, 0.3].map((delay) => (
                  <span
                    key={delay}
                    className="animate-wave h-3 w-[2px] origin-bottom rounded-full bg-accent-soft/70"
                    style={{ animationDelay: `${delay}s` }}
                  />
                ))}
              </span>
            </div>
            <span
              className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-white"
              aria-hidden="true"
            >
              <ArrowUp className="h-3 w-3" strokeWidth={2.5} />
            </span>
          </div>
        </div>

        <aside className="hidden w-[30%] shrink-0 flex-col gap-1.5 border-l border-white/[0.07] p-2.5 sm:flex">
          <p className="font-mono text-[7.5px] uppercase tracking-[0.16em] text-faint sm:text-[8px]">
            Tools
          </p>
          {tools.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1.5"
            >
              <Icon aria-hidden="true" className="h-2.5 w-2.5 shrink-0 text-accent-soft" strokeWidth={1.75} />
              <span className="truncate text-[8px] text-mist sm:text-[8.5px]">
                {label}
              </span>
              <span className="ml-auto h-1 w-1 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
            </span>
          ))}
        </aside>
      </div>
    </MockWindow>
  );
}
