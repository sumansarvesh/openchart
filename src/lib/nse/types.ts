export type Segment = "IDX" | "EQ" | "FO";

export type Interval = "1m" | "5m" | "15m" | "30m" | "1h" | "1d" | "1w" | "1M";

export type InstrumentType = "Index" | "Equity" | "Futures" | "Options";

export type SymbolHit = {
  symbol: string;
  scripcode: string;
  description: string;
  type: InstrumentType | string;
  exchange: string;
  segment: Segment;
  yahoo?: string;
};

export type OhlcBar = {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type ChartPayload = {
  symbol: SymbolHit;
  interval: Interval;
  source: "nse" | "yahoo";
  bars: OhlcBar[];
};

export const INTERVALS: { id: Interval; label: string }[] = [
  { id: "1m", label: "1m" },
  { id: "5m", label: "5m" },
  { id: "15m", label: "15m" },
  { id: "30m", label: "30m" },
  { id: "1h", label: "1H" },
  { id: "1d", label: "1D" },
  { id: "1w", label: "1W" },
  { id: "1M", label: "1M" },
];

export const SEGMENTS: { id: Segment; label: string }[] = [
  { id: "IDX", label: "Index" },
  { id: "EQ", label: "Equity" },
  { id: "FO", label: "F&O" },
];
