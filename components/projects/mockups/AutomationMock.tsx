import { CircleDot, Database, Mail, Terminal, Zap } from "lucide-react";
import { MockWindow } from "./parts";

type MockNode = {
  left: string;
  top: string;
  title: string;
  subtitle: string;
  icon: typeof Zap;
};

const nodes: MockNode[] = [
  { left: "4%", top: "8%", title: "Schedule", subtitle: "daily · 09:00", icon: Zap },
  { left: "36%", top: "8%", title: "Fetch data", subtitle: "GET /api/orders", icon: Terminal },
  { left: "68%", top: "8%", title: "Transform", subtitle: "python · map rows", icon: Terminal },
  { left: "68%", top: "40%", title: "If status = paid", subtitle: "condition", icon: CircleDot },
  { left: "16%", top: "72%", title: "Send email", subtitle: "smtp · receipt", icon: Mail },
  { left: "52%", top: "72%", title: "Save record", subtitle: "postgres · orders", icon: Database },
];

export function AutomationMock() {
  return (
    <MockWindow
      title="automation · workflow builder"
      right={
        <span className="font-mono text-[8px] text-emerald-300 sm:text-[9px]">
          active
        </span>
      }
    >
      <div className="relative h-full">
        <div className="dot-grid absolute inset-0" aria-hidden="true" />

        <svg
          viewBox="0 0 400 300"
          aria-hidden="true"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <g
            fill="none"
            stroke="rgba(255,128,183,0.55)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          >
            <path className="animate-dash" strokeDasharray="6 7" d="M120 44 H144" />
            <path className="animate-dash" strokeDasharray="6 7" d="M248 44 H272" />
            <path className="animate-dash" strokeDasharray="6 7" d="M324 64 V120" />
            <path
              className="animate-dash"
              strokeDasharray="6 7"
              d="M272 140 C 220 140, 160 172, 118 214"
            />
            <path
              className="animate-dash"
              strokeDasharray="6 7"
              d="M376 140 C 372 190, 320 204, 262 214"
            />
          </g>
          <g fill="rgba(255,128,183,0.9)">
            <circle cx="132" cy="44" r="3" />
            <circle cx="260" cy="44" r="3" />
            <circle cx="324" cy="92" r="3" />
            <circle cx="196" cy="176" r="3" />
            <circle cx="320" cy="182" r="3" />
          </g>
          <text x="176" y="166" fill="#7d7d90" fontFamily="var(--font-geist-mono), monospace" fontSize="10" letterSpacing="0.5">
            yes
          </text>
          <text x="330" y="172" fill="#7d7d90" fontFamily="var(--font-geist-mono), monospace" fontSize="10" letterSpacing="0.5">
            no
          </text>
        </svg>

        {nodes.map(({ left, top, title, subtitle, icon: Icon }) => (
          <div
            key={title}
            className="absolute w-[26%] rounded-lg border border-white/[0.1] bg-surface/95 px-2 py-1.5 shadow-[0_10px_24px_-14px_rgba(0,0,0,1)] backdrop-blur-sm"
            style={{ left, top }}
          >
            <div className="flex items-center gap-1.5">
              <span className="grid h-4 w-4 shrink-0 place-items-center rounded bg-accent/15 text-accent-soft">
                <Icon aria-hidden="true" className="h-2.5 w-2.5" strokeWidth={2} />
              </span>
              <span className="truncate text-[8.5px] font-semibold leading-tight text-white sm:text-[9.5px]">
                {title}
              </span>
            </div>
            <p className="mt-0.5 truncate font-mono text-[7px] text-faint sm:text-[7.5px]">
              {subtitle}
            </p>
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-0 flex h-8 items-center gap-2 border-t border-white/[0.07] bg-ink/95 px-3 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          <span className="truncate font-mono text-[8px] text-mist sm:text-[9px]">
            last run completed · 6 steps
          </span>
          <span className="ml-auto rounded-md border border-white/[0.1] bg-white/[0.04] px-2 py-0.5 font-mono text-[8px] text-white/80 sm:text-[9px]">
            Test workflow
          </span>
        </div>
      </div>
    </MockWindow>
  );
}
