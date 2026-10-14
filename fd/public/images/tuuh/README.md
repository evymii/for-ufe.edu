# Түүх хуудасны зурагнууд

Photos for the horizontal history experience on `/tuuh`, grouped per year
folder. **Just drop an image into the right folder and it appears — no code
changes needed** (the server auto-detects the files, same as player/staff
cutouts). Any `png` / `jpg` / `jpeg` / `webp` / `avif` filename works; files
sort by name within a folder.

Each folder feeds one era panel (an era shows at most two photos; every photo
also lands in the «Дурсамжийн зургууд» gallery below the timeline):

| Folder       | Shown on panel                                      |
| ------------ | --------------------------------------------------- |
| `1996/`      | «1996 — Үндсэн суурь»                               |
| `1997-2000/` | «1997–2006 — Медалийн жилүүд» (stacks with `2006/`) |
| `2006/`      | «1997–2006 — Медалийн жилүүд»                       |
| `2018/`      | «2017–2018 — Мөнгөн медаль»                         |
| `2019/`      | «2018–2019 — Elite 8»                               |
| `2020/`      | «2019–2020 — Elite 8»                               |
| `2021/`      | «2021–2022 — Шөвгийн дөрөв»                         |
| `2022/`      | «2022–2023 — Шөвгийн дөрөв»                         |
| `2023/`      | «2023–2024 — Sweet 16»                              |
| `2024/`      | «2024–2025 — Хүрэл медаль»                          |
| `2025/`      | «2025–2026 — Аварга»                                |
| `2026/`      | «2026–2027 — AUBL» (text-only until a photo lands)  |

`1997-2000/` and `2026/` are currently empty and reserved for upcoming
photos. Panels without photos on disk (1992, 2026–2027) show text only.

Landscape photos (~3:2) work best — they render with `object-cover`. The
gallery label under a photo is the folder name, so prefer a plain year
(`2026/2026.png`) or a year range (`1997-2000/…`) as the folder.

To move a folder's photos to a different panel, edit the `ERA_FOLDERS` map in
`fd/components/team/history-experience.tsx`.
