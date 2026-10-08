import { Check, Phone, Sparkles } from "lucide-react";
import { MockField, MockWindow } from "./parts";

const siteSections = ["Hero", "Services", "About", "Contact"];

const cards = ["Cakes", "Coffee", "Delivery"];

export function GeneratorMock() {
  return (
    <MockWindow
      title="website-generator"
      right={
        <span className="font-mono text-[8px] text-emerald-300 sm:text-[9px]">
          ready
        </span>
      }
    >
      <div className="flex h-full flex-col sm:flex-row">
        <div className="flex shrink-0 flex-col gap-1.5 border-b border-white/[0.07] p-2.5 sm:w-[36%] sm:border-b-0 sm:border-r sm:p-3">
          <p className="font-mono text-[7.5px] uppercase tracking-[0.16em] text-faint sm:text-[8px]">
            Business information
          </p>

          <div className="hidden flex-col gap-1.5 sm:flex">
            <MockField label="Name" value="Corner Bakery" />
            <MockField label="Category" value="Bakery" />
            <MockField label="Services" value="Cakes · Coffee · Delivery" />
            <MockField label="Hours" value="Mon–Sat · 7:00–18:00" />
          </div>

          <p className="truncate rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-1 text-[9px] text-white/85 sm:hidden">
            Corner Bakery · Bakery · Cakes
          </p>

          <span className="mt-auto flex items-center justify-center gap-1.5 rounded-md bg-accent py-1.5 text-center font-mono text-[8.5px] text-white sm:mt-2 sm:text-[9.5px]">
            <Sparkles aria-hidden="true" className="h-2.5 w-2.5" strokeWidth={2} />
            Generate website
          </span>
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <div className="flex h-6 shrink-0 items-center gap-1.5 border-b border-white/[0.07] bg-white/[0.02] px-2 sm:h-7">
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" aria-hidden="true" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/12" aria-hidden="true" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/10" aria-hidden="true" />
            <span className="ml-1.5 truncate rounded bg-white/[0.05] px-2 py-0.5 font-mono text-[7.5px] text-faint sm:text-[8.5px]">
              preview · corner-bakery
            </span>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-2 p-2.5 sm:p-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[9.5px] font-semibold text-white sm:text-[10.5px]">
                Corner Bakery
              </span>
              <span className="flex items-center gap-2 font-mono text-[7.5px] text-faint sm:text-[8.5px]">
                <span>Menu</span>
                <span className="hidden sm:inline">About</span>
                <span className="rounded bg-accent px-1.5 py-0.5 text-white">
                  Call
                </span>
              </span>
            </div>

            <div className="rounded-lg border border-white/[0.06] bg-gradient-to-br from-accent/20 via-accent/[0.06] to-transparent p-3">
              <p className="text-[12px] font-semibold leading-tight text-white sm:text-[13.5px]">
                Fresh from the oven
              </p>
              <p className="mt-1 text-[8.5px] leading-snug text-mist sm:text-[9.5px]">
                Artisan bread &amp; cakes, baked daily.
              </p>
              <div className="mt-2 flex gap-1.5">
                <span className="rounded-md bg-accent px-2 py-1 text-[8px] text-white sm:text-[9px]">
                  Order now
                </span>
                <span className="rounded-md border border-white/[0.12] px-2 py-1 text-[8px] text-white/80 sm:text-[9px]">
                  <Phone aria-hidden="true" className="mr-1 inline h-2 w-2" />
                  Call
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {cards.map((card) => (
                <span
                  key={card}
                  className="truncate rounded-md border border-white/[0.06] bg-white/[0.02] px-1.5 py-2 text-center text-[8px] text-mist sm:text-[9px]"
                >
                  {card}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-1.5">
              {siteSections.map((section) => (
                <span
                  key={section}
                  className="flex items-center gap-1 rounded-md border border-emerald-400/20 bg-emerald-400/[0.07] px-1.5 py-0.5 font-mono text-[7.5px] text-emerald-300 sm:text-[8.5px]"
                >
                  {section}
                  <Check aria-hidden="true" className="h-2 w-2" strokeWidth={3} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MockWindow>
  );
}
