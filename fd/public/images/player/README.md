# Тоглогчдын зурагнууд

Transparent-background player cutouts for `/player` (NBA-roster-style cards).
One PNG per player, named after the jersey number:

```
public/images/player/
├── 14.png  # Номчбаатар Наранбаатар
├── 3.png   # Мөнх-Очир Энхмэнд
├── 11.png  # Гүрсоронзон Өнөболд
└── 8.png   # Мөнх-Эрдэнэ Цэлмэг
```

Drop a file in with the right name and it appears on the roster page — no
code changes needed (the page auto-detects `<number>.png` on the server).
Recommendations:

- **Transparent background** (PNG-24/WebP-with-alpha) — cards render them
  `contain`-fitted, anchored bottom-right, so the full silhouette shows.
- Portrait framing, roughly **3:4** (e.g. 900×1200), player centered.
- Keep ~40–80 px of headroom above the head so the giant jersey number
  behind doesn't collide.

An explicit `photo: "/images/player/14.png"` field on the player profile in
`fd/content/site.ts` always wins over the auto-detection, if a non-numbered
filename is ever needed.
