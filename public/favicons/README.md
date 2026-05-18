# Favicons — v2 palette

Drop this whole `favicons/` folder into your repo's `public/` directory:

```
public/favicons/...
```

Then replace the existing favicon link in `index.html` <head> with the block in `HEAD-SNIPPET.html` (next to this README).

## What's here

- `favicon.svg` — primary. Adaptive: deep-teal on light tabs, bone on dark tabs (via prefers-color-scheme).
- `favicon-light.svg` / `favicon-dark.svg` / `favicon-gradient.svg` — forced variants if you ever need them.
- `favicon-dark-{16,32,64,180,256,512}.png` — gradient mark for browsers that don't honour SVG + Apple touch icon.
- `favicon-light-{16,32,180}.png` — solid bone mark for dark-mode PNG fallbacks (optional; SVG covers this for most users).

## What to remove

Once you've verified the new icons load in a browser, you can delete:

- `public/favicon.ico` (legacy v1 ico — the new SVG + PNGs replace it)
