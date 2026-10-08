import { Bot, Search } from "lucide-react";
import { MockPill, MockWindow } from "./parts";

const sidebarItems = ["Discover", "Analyze", "Websites", "Settings"];

const rows = [
  { name: "Dental clinic", area: "Downtown", signal: "No website", score: 92 },
  { name: "Restaurant", area: "Riverside", signal: "Weak presence", score: 84 },
  { name: "Law office", area: "Midtown", signal: "No mobile site", score: 76 },
  { name: "Auto repair", area: "North end", signal: "Outdated site", score: 68 },
];

export function BusinessAgentMock() {
  return (
    <MockWindow title="business-agent · discovery">
      <div className="flex h-full">
        <aside className="hidden w-[24%] shrink-0 flex-col gap-1 border-r border-white/[0.07] p-2 sm:flex">
          <div className="mb-1.5 flex items-center gap-1.5 px-1">
            <span
              aria-hidden="true"
              className="h-3.5 w-3.5 rounded bg-gradient-to-br from-[#ff5c9d] to-[#ff2d78]"
            />
            <span className="font-mono text-[9px] text-white">agent</span>
          </div>
          {sidebarItems.map((item, index) => (
            <span
              key={item}
              className={
                index === 0
                  ? "rounded-md bg-accent/15 px-2 py-1.5 font-mono text-[9px] text-accent-soft"
                  : "rounded-md px-2 py-1.5 font-mono text-[9px] text-faint"
              }
            >
              {item}
            </span>
          ))}
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-2 p-2.5 sm:gap-3 sm:p-3.5">
          <div className="flex items-center gap-2">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-white sm:text-[12.5px]">
                Lead discovery
              </p>
              <p className="font-mono text-[8px] text-faint sm:text-[9px]">
                scan · analyze · prioritize
              </p>
            </div>
            <span className="ml-auto flex items-center gap-1 rounded-md bg-accent px-2 py-1 font-mono text-[8.5px] text-white sm:text-[9.5px]">
              <Search aria-hidden="true" className="h-2.5 w-2.5" strokeWidth={2.2} />
              Run scan
            </span>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.02]">
            <div className="grid grid-cols-[1.7fr_1.2fr_0.9fr] border-b border-white/[0.07] px-2.5 py-1.5 font-mono text-[7.5px] uppercase tracking-[0.14em] text-faint sm:text-[8px]">
              <span>Business</span>
              <span>Signal</span>
              <span className="text-right">Score</span>
            </div>
            {rows.map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-[1.7fr_1.2fr_0.9fr] items-center border-b border-white/[0.05] px-2.5 py-[7px] last:border-b-0 sm:py-2"
              >
                <span className="min-w-0">
                  <span className="block truncate text-[9.5px] text-white/85 sm:text-[10.5px]">
                    {row.name}
                  </span>
                  <span className="block truncate font-mono text-[7.5px] text-faint sm:text-[8px]">
                    {row.area}
                  </span>
                </span>
                <span className="flex min-w-0 items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/80"
                  />
                  <span className="truncate text-[8.5px] text-mist sm:text-[9.5px]">
                    {row.signal}
                  </span>
                </span>
                <span className="flex items-center justify-end gap-1.5">
                  <span className="hidden h-1 w-6 overflow-hidden rounded-full bg-white/10 sm:block">
                    <span
                      className="block h-full rounded-full bg-accent"
                      style={{ width: `${row.score}%` }}
                    />
                  </span>
                  <span className="font-mono text-[8.5px] text-white/80 sm:text-[9.5px]">
                    {row.score}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-accent/30 bg-accent/[0.07] p-2.5 sm:p-3">
            <div className="flex items-center gap-2">
              <Bot aria-hidden="true" className="h-3 w-3 text-accent-soft" strokeWidth={1.75} />
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-accent-soft sm:text-[9px]">
                AI analysis
              </span>
              <span className="ml-auto">
                <MockPill tone="accent">confidence 92%</MockPill>
              </span>
            </div>
            <p className="mt-1.5 text-[9px] leading-relaxed text-mist sm:text-[10px]">
              Weak online presence — no mobile-friendly website found.
            </p>
            <p className="mt-1 text-[9px] leading-relaxed text-white/70 sm:text-[10px]">
              Suggested: modern 5-page site with contact actions.
            </p>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
              <div className="animate-shimmer h-full w-[72%] rounded-full bg-gradient-to-r from-accent to-accent-2" />
            </div>
          </div>
        </div>
      </div>
    </MockWindow>
  );
}
