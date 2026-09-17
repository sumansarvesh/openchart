import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_WATCHLIST } from "@/lib/nse/universe";
import type { Interval, SymbolHit } from "@/lib/nse/types";

export type IndicatorId = "bb" | "sma20" | "sma50" | "ema21" | "volume";

type DeskState = {
  active: SymbolHit;
  interval: Interval;
  watchlist: SymbolHit[];
  indicators: Record<IndicatorId, boolean>;
  setActive: (hit: SymbolHit) => void;
  setInterval: (interval: Interval) => void;
  toggleWatch: (hit: SymbolHit) => void;
  isWatched: (symbol: string) => boolean;
  toggleIndicator: (id: IndicatorId) => void;
};

export const useDesk = create<DeskState>()(
  persist(
    (set, get) => ({
      active: DEFAULT_WATCHLIST[0]!,
      interval: "1d",
      watchlist: DEFAULT_WATCHLIST,
      indicators: { bb: true, sma20: false, sma50: false, ema21: false, volume: true },
      setActive: (hit) => set({ active: hit }),
      setInterval: (interval) => set({ interval }),
      toggleWatch: (hit) => {
        const exists = get().watchlist.some((w) => w.symbol === hit.symbol);
        set({
          watchlist: exists
            ? get().watchlist.filter((w) => w.symbol !== hit.symbol)
            : [hit, ...get().watchlist].slice(0, 24),
        });
      },
      isWatched: (symbol) => get().watchlist.some((w) => w.symbol === symbol),
      toggleIndicator: (id) =>
        set({ indicators: { ...get().indicators, [id]: !get().indicators[id] } }),
    }),
    { name: "openchart-desk", skipHydration: true },
  ),
);
