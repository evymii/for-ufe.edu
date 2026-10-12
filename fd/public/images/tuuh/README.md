# Түүх хуудасны зурагнууд

Photos for the horizontal history experience on `/tuuh`, grouped per year.
Each file is named `<year>.png` inside its year folder and is shown **only
on that year's own panel** — no cross-year mixing:

| Folder / file | Shown on panel |
| --- | --- |
| `1996/1996.png` | «1996 — Үндсэн суурь» |
| `1997-2000/` | (empty — reserved for future photos) |
| `2006/2006.png` | «1997–2006 — Медалийн жилүүд» |
| `2018/2018.png` | «2017–2018 — Мөнгөн медаль» |
| `2019/2019.png` | «2018–2019 — Elite 8» |
| `2020/2020.png` | «2019–2020 — Elite 8» |
| `2021/2021.png` | «2021–2022 — Шөвгийн дөрөв» |
| `2022/2022.png` | «2022–2023 — Шөвгийн дөрөв» |
| `2023/2023.png` | «2023–2024 — Sweet 16» |
| `2024/2024.png` | «2024–2025 — Хүрэл медаль» |
| `2025/2025.png` | «2025–2026 — Аварга» |
| `2026/` | (empty — reserved for the AUBL season) |

Landscape photos (~3:2) work best — they render with `object-cover`.
Panels without photos (1992, 2026–2027) show text only until photos exist.

To change which panel a photo belongs to, edit the `eras` array in
`fd/components/team/history-experience.tsx` — each era has a
`photos: [...]` list.
