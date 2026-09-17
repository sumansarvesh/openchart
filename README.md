# OpenChart

NSE India charting desk by **Suman Kumar** — indices, equities, and F&O.

Search a symbol, open a candlestick chart, toggle Bollinger / SMA / EMA, and export OHLCV as CSV. Watchlist is stored locally in the browser.

**This project is not affiliated with, endorsed by, or vetted by NSE India.** Market data is fetched from publicly available charting endpoints and used for research and personal trading study only.

## What it does

- Symbol search across **Index**, **Equity**, and **F&O**
- Timeframes: 1m · 5m · 15m · 30m · 1H · 1D · 1W · 1M
- Indicators: Bollinger Bands (20, 2), SMA 20/50, EMA 21, volume
- IST clock and market-open badge (09:15–15:30, weekdays)
- CSV download of the loaded series
- Fallback EOD path when the NSE charting feed is unavailable

Default watchlist: NIFTY 50, BANK NIFTY, INDIA VIX, RELIANCE, TCS, HDFCBANK, INFY, SBIN.

## Layout

- `src/` — charting desk (React)
- `openchart/` — Python NSE historical client

## License

MIT © Suman Kumar
