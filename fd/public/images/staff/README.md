# Удирдлагын зурагнууд

Transparent-background cutouts for `/udirdlaga` (NBA-roster-style cards, same
as the players). One PNG per staff member, named after the person — the name
in lower case with dots and spaces stripped:

```
public/images/staff/
├── бпүрэвдорж.png  # Б.Пүрэвдорж — Ерөнхий дасгалжуулагч
├── дамьбох.png     # Д.Амьбох — Дасгалжуулагч, шүүгч
└── ннаранбаатар.png # Н.Наранбаатар — Багийн ахлагч (#14)
```

Drop a file in with the right name and it appears on the management page —
no code changes needed (the page auto-detects the file on the server). Three
more members are joining the section (6 total) — add one PNG per new person,
named the same way (lower-case name, dots/spaces removed).

Recommendations (same as player cutouts):

- **Transparent background** (PNG-24/WebP-with-alpha) — cards render them
  `contain`-fitted, anchored bottom-right, so the full silhouette shows.
- Portrait framing, roughly **3:4** (e.g. 900×1200), person centered.
- Keep ~40–80 px of headroom above the head so the giant faded initials
  behind don't collide.

An explicit `photo: "/images/staff/бпүрэвдорж.png"` field on the staff
profile in `fd/content/site.ts` always wins over the auto-detection, if a
different filename is ever needed.
