"use client";

import { useState } from "react";
import { Save, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { PageHeader } from "@/components/shared/page-header";
import {
  ResourcePanel,
  type ResourceConfig,
} from "@/components/admin/content/resource-panel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useDeleteSubscriber,
  usePageCopy,
  usePutPageCopy,
  useSubscribers,
} from "@/hooks/use-content-admin";
import { ApiClientError } from "@/lib/api-client";

/**
 * The CMS surface for the public team site: one tab per content
 * collection (schedule, front office, gallery, videos, shop), the
 * newsletter inbox, and a JSON editor for page copy (city edition, fan
 * club, newsletter + hero intros).
 */

const EXECUTIVE_GROUPS = [
  { value: "OWNERSHIP", label: "Эзэмшигчид" },
  { value: "OPERATIONS", label: "Спортын алба" },
  { value: "BUSINESS", label: "Бизнес" },
  { value: "COACHES", label: "Дасгалжуулагчид" },
];

const VIDEO_CATEGORIES = [
  { value: "HIGHLIGHTS", label: "Онцлох" },
  { value: "INTERVIEWS", label: "Ярилцлага" },
  { value: "BEHIND_THE_SCENES", label: "Ар тал" },
  { value: "PRESS", label: "Хэвлэл" },
];

const ALBUM_CATEGORIES = [
  { value: "GAMES", label: "Тоглолт" },
  { value: "COMMUNITY", label: "Нийгмийн" },
  { value: "EVENTS", label: "Арга хэмжээ" },
];

const SHOP_CATEGORIES = [
  { value: "JERSEYS", label: "Өмсгөл" },
  { value: "TEES", label: "Ti-шерт" },
  { value: "HOODIES", label: "Худи" },
  { value: "HATS", label: "Малгай" },
  { value: "KIDS", label: "Хүүхдэд" },
  { value: "GEAR", label: "Хэрэгсэл" },
];

const GAME_STATUSES = [
  { value: "SCHEDULED", label: "Товлосон" },
  { value: "FINAL", label: "Дууссан" },
  { value: "CANCELLED", label: "Цуцлагдсан" },
];

const RESOURCES: ResourceConfig[] = [
  {
    columns: [
      {
        key: "tipsAt",
        label: "Огноо",
        render: (row) =>
          new Date(String(row.tipsAt)).toLocaleString("en-GB", {
            timeZone: "Asia/Ulaanbaatar",
            dateStyle: "medium",
            timeStyle: "short",
          }),
      },
      { key: "opponent", label: "Эсрэг" },
      {
        key: "isHome",
        label: "Талбар",
        render: (row) => (row.isHome ? "Гэрээсээ" : "Гадаа"),
      },
      {
        key: "status",
        label: "Байдал",
        render: (row) => <Badge variant="outline">{String(row.status)}</Badge>,
      },
      {
        key: "teamScore",
        label: "Оноо",
        render: (row) =>
          row.teamScore === null || row.teamScore === undefined
            ? "—"
            : `${row.teamScore} : ${row.opponentScore ?? "—"}`,
      },
    ],
    description:
      "Хуваарийн тоглолтууд — огноо, байдал, оноо, тасалбар болон дамжуулалтын холбоос.",
    endpoint: "/api/v1/content/games",
    fields: [
      { name: "opponent", label: "Эсрэг баг", type: "text", required: true },
      {
        name: "opponentShort",
        label: "Товч нэр",
        type: "text",
        placeholder: "МУИС",
      },
      {
        name: "tipsAt",
        label: "Эхлэх цаг (УБ)",
        type: "datetime",
        required: true,
      },
      { name: "venue", label: "Заал", type: "text" },
      { name: "round", label: "Тойрог", type: "text" },
      {
        name: "status",
        label: "Байдал",
        type: "select",
        options: GAME_STATUSES,
      },
      { name: "teamScore", label: "СЭЗИС-ийн оноо", type: "number" },
      { name: "opponentScore", label: "Эсрэгийн оноо", type: "number" },
      { name: "isHome", label: "Гэрээсээ", type: "checkbox" },
      { name: "ticketUrl", label: "Тасалбарын холбоос", type: "url" },
      { name: "streamUrl", label: "Дамжуулалтын холбоос", type: "url" },
      { name: "note", label: "Тэмдэглэл", type: "textarea" },
    ],
    key: "games",
    singular: "Тоглолт",
    title: "Хуваарь",
  },
  {
    columns: [
      { key: "name", label: "Нэр" },
      { key: "title", label: "Албан тушаал" },
      {
        key: "group",
        label: "Бүлэг",
        render: (row) => (
          <Badge variant="secondary">
            {EXECUTIVE_GROUPS.find((g) => g.value === row.group)?.label ??
              String(row.group)}
          </Badge>
        ),
      },
      { key: "sortOrder", label: "Дараалал" },
    ],
    description:
      "Удирдлагын хуудас — эзэмшигчид, спортын алба, бизнес, дасгалжуулагчид.",
    endpoint: "/api/v1/content/executives",
    fields: [
      { name: "name", label: "Нэр", type: "text", required: true },
      {
        name: "slug",
        label: "Slug",
        type: "text",
        required: true,
        placeholder: "b-purevdorj",
      },
      { name: "title", label: "Албан тушаал", type: "text", required: true },
      {
        name: "group",
        label: "Бүлэг",
        type: "select",
        options: EXECUTIVE_GROUPS,
      },
      { name: "photo", label: "Зурагны URL", type: "url" },
      { name: "sortOrder", label: "Дараалал", type: "number" },
      { name: "bio", label: "Танилцуулга", type: "textarea", full: true },
      {
        name: "bullets",
        label: "Амжилтууд",
        type: "tags",
        full: true,
        help: "Таслалаар тусгаарлана",
      },
      { name: "isPublic", label: "Нийтлэх", type: "checkbox" },
    ],
    key: "executives",
    singular: "Удирдагч",
    title: "Удирдлага",
  },
  {
    columns: [
      { key: "title", label: "Галерей" },
      {
        key: "category",
        label: "Ангилал",
        render: (row) => (
          <Badge variant="secondary">
            {ALBUM_CATEGORIES.find((c) => c.value === row.category)?.label ??
              String(row.category)}
          </Badge>
        ),
      },
      {
        key: "eventDate",
        label: "Огноо",
        render: (row) =>
          row.eventDate
            ? new Date(String(row.eventDate)).toLocaleDateString()
            : "—",
      },
      {
        key: "images",
        label: "Зургийн тоо",
        render: (row) =>
          String(Array.isArray(row.images) ? row.images.length : 0),
      },
    ],
    description: "Фото хуудсын галерейнууд — нүүр зураг, ангилал, зургууд.",
    endpoint: "/api/v1/content/media",
    fields: [
      { name: "title", label: "Гарчиг", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true },
      {
        name: "category",
        label: "Ангилал",
        type: "select",
        options: ALBUM_CATEGORIES,
      },
      { name: "coverImage", label: "Нүүр зургийн URL", type: "url" },
      { name: "eventDate", label: "Арга хэмжээний огноо", type: "datetime" },
      { name: "sortOrder", label: "Дараалал", type: "number" },
      {
        name: "images",
        label: "Зургууд (JSON)",
        type: "json",
        full: true,
        help: '[{ "url": "https://…", "caption": "…" }]',
      },
      { name: "isPublished", label: "Нийтлэх", type: "checkbox" },
    ],
    key: "albums",
    singular: "Галерей",
    title: "Галерей",
  },
  {
    columns: [
      { key: "title", label: "Гарчиг" },
      {
        key: "category",
        label: "Ангилал",
        render: (row) => (
          <Badge variant="secondary">
            {VIDEO_CATEGORIES.find((c) => c.value === row.category)?.label ??
              String(row.category)}
          </Badge>
        ),
      },
      {
        key: "durationSec",
        label: "Хугацаа",
        render: (row) => {
          const s = Number(row.durationSec ?? 0);
          return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
        },
      },
      {
        key: "isFeatured",
        label: "Онцлох",
        render: (row) => (row.isFeatured ? "★" : "—"),
      },
    ],
    description: "Видео сан — онцлох видео, ангилал, дамжуулалтын эх.",
    endpoint: "/api/v1/content/videos",
    fields: [
      { name: "title", label: "Гарчиг", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true },
      {
        name: "category",
        label: "Ангилал",
        type: "select",
        options: VIDEO_CATEGORIES,
      },
      { name: "videoUrl", label: "Видео URL (mp4)", type: "url" },
      {
        name: "youtubeId",
        label: "YouTube ID",
        type: "text",
        placeholder: "dQw4w9WgXcQ",
      },
      { name: "thumbnail", label: "Нүүр зургийн URL", type: "url" },
      { name: "durationSec", label: "Хугацаа (секунд)", type: "number" },
      { name: "isFeatured", label: "Онцлох болгох", type: "checkbox" },
      { name: "sortOrder", label: "Дараалал", type: "number" },
    ],
    key: "videos",
    singular: "Видео",
    title: "Видео",
  },
  {
    columns: [
      { key: "name", label: "Бүтээгдэхүүн" },
      {
        key: "category",
        label: "Ангилал",
        render: (row) => (
          <Badge variant="secondary">
            {SHOP_CATEGORIES.find((c) => c.value === row.category)?.label ??
              String(row.category)}
          </Badge>
        ),
      },
      {
        key: "price",
        label: "Үнэ",
        render: (row) =>
          `${new Intl.NumberFormat("en-US").format(Number(row.price ?? 0))}₮`,
      },
      { key: "sizes", label: "Хэмжээ" },
    ],
    description: "Фэн клабын дэлгүүр — бүтээгдэхүүн, үнэ, хэмжээ.",
    endpoint: "/api/v1/content/shop",
    fields: [
      { name: "name", label: "Нэр", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true },
      {
        name: "category",
        label: "Ангилал",
        type: "select",
        options: SHOP_CATEGORIES,
      },
      { name: "price", label: "Үнэ (₮)", type: "number", required: true },
      { name: "compareAtPrice", label: "Хуучин үнэ (₮)", type: "number" },
      { name: "image", label: "Зургийн URL", type: "url" },
      { name: "url", label: "Гадаад холбоос", type: "url" },
      {
        name: "sizes",
        label: "Хэмжээ",
        type: "tags",
        help: "Таслалаар тусгаарлана: S, M, L",
      },
      { name: "badge", label: "Тэмдэг", type: "text", placeholder: "Хямдрал" },
      { name: "sortOrder", label: "Дараалал", type: "number" },
    ],
    key: "shop",
    singular: "Бүтээгдэхүүн",
    title: "Дэлгүүр",
  },
];

export function ContentManager() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Агуулга"
        description="Нийтийн хуудсуудын агуулга — хуваарь, удирдлага, галерей, видео, дэлгүүр ба хуудасны текст."
      />
      <Tabs defaultValue="games">
        <TabsList className="flex h-auto flex-wrap justify-start">
          {RESOURCES.map((resource) => (
            <TabsTrigger key={resource.key} value={resource.key}>
              {resource.title}
            </TabsTrigger>
          ))}
          <TabsTrigger value="subscribers">Захиалга</TabsTrigger>
          <TabsTrigger value="page-copy">Хуудасны текст</TabsTrigger>
        </TabsList>
        {RESOURCES.map((resource) => (
          <TabsContent key={resource.key} value={resource.key}>
            <ResourcePanel config={resource} />
          </TabsContent>
        ))}
        <TabsContent value="subscribers">
          <SubscribersPanel />
        </TabsContent>
        <TabsContent value="page-copy">
          <PageCopyPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function SubscribersPanel() {
  const { data, isPending, isError, error } = useSubscribers();
  const remove = useDeleteSubscriber();

  return (
    <div className="space-y-4">
      <PageHeader
        title="Мэдээний захиалга"
        description="Фэнэйд мэдээ хуудаснаас бүртгүүлсэн имэйл хаягууд."
      />
      {isPending ? (
        <p className="text-muted-foreground text-sm">Ачаалж байна…</p>
      ) : isError ? (
        <p className="text-destructive text-sm" role="alert">
          {error instanceof ApiClientError
            ? error.message
            : "Ачаалахад алдаа гарлаа."}
        </p>
      ) : (data?.items.length ?? 0) === 0 ? (
        <p className="text-muted-foreground py-10 text-center text-sm">
          Одоогоор бүртгэл байхгүй.
        </p>
      ) : (
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">
            Нийт {data?.pagination.total} бүртгэл
          </p>
          <div className="border-border/60 overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">Имэйл</th>
                  <th className="px-3 py-2 text-left font-medium">Нэр</th>
                  <th className="px-3 py-2 text-left font-medium">Сонирхол</th>
                  <th className="px-3 py-2 text-left font-medium">Огноо</th>
                  <th className="px-3 py-2" />
                </tr>
              </thead>
              <tbody>
                {data?.items.map((row) => (
                  <tr key={row.id} className="border-border/60 border-t">
                    <td className="px-3 py-2">{row.email}</td>
                    <td className="text-muted-foreground px-3 py-2">
                      {row.firstName ?? "—"}
                    </td>
                    <td className="text-muted-foreground px-3 py-2">
                      {row.interests.join(", ") || "—"}
                    </td>
                    <td className="text-muted-foreground px-3 py-2">
                      {new Date(row.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-3 py-2 text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`${row.email} устгах`}
                        onClick={() => remove.mutate(row.id)}
                      >
                        <Trash2
                          className="text-destructive size-4"
                          aria-hidden="true"
                        />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/** Page/section copy pages editable as JSON, matching the site's fallbacks. */
const COPY_PAGES: Array<{ value: string; label: string; sections: string[] }> =
  [
    { label: "Хотын загвар", sections: ["page"], value: "city-edition" },
    { label: "Фэн клаб", sections: ["page"], value: "fan-club" },
    { label: "Фэнэйд мэдээ", sections: ["page"], value: "newsletter" },
    {
      label: "Хуудасны танилцуулга",
      sections: ["hero"],
      value: "heroes",
    },
  ];

const HERO_PAGES = [
  "schedule",
  "photos",
  "videos",
  "front-office",
  "home",
  "contact",
  "footer",
];

function PageCopyPanel() {
  const [page, setPage] = useState(COPY_PAGES[0]?.value ?? "city-edition");
  const [heroPage, setHeroPage] = useState(HERO_PAGES[0] ?? "schedule");

  return (
    <div className="space-y-4">
      <PageHeader
        title="Хуудасны текст"
        description="Хотоос эхэлсэн бичвэрүүд — JSON хэлбэрээр засварлана. Хоосон үед сайтын статик нөөц хэрэглэгдэнэ."
      />
      <div className="flex flex-wrap gap-2">
        {COPY_PAGES.map((option) => (
          <Button
            key={option.value}
            variant={page === option.value ? "default" : "outline"}
            size="sm"
            onClick={() => setPage(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>

      {page === "heroes" ? (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {HERO_PAGES.map((option) => (
              <Button
                key={option}
                variant={heroPage === option ? "default" : "outline"}
                size="sm"
                onClick={() => setHeroPage(option)}
              >
                {option}
              </Button>
            ))}
          </div>
          <SectionEditor key={heroPage} page={heroPage} section="hero" />
        </div>
      ) : (
        COPY_PAGES.find((option) => option.value === page)?.sections.map(
          (section) => (
            <SectionEditor
              key={`${page}-${section}`}
              page={page}
              section={section}
            />
          ),
        )
      )}
    </div>
  );
}

function SectionEditor({ page, section }: { page: string; section: string }) {
  const { data, isPending, isError } = usePageCopy(page);
  const save = usePutPageCopy(page);

  const raw = data?.sections?.[section];
  const serialized = raw === undefined ? "" : JSON.stringify(raw, null, 2);

  // Adjust-during-render reset: when a fresh payload arrives (load or save),
  // the draft follows it without an effect.
  const [baseline, setBaseline] = useState(serialized);
  const [draft, setDraft] = useState(serialized);
  if (baseline !== serialized) {
    setBaseline(serialized);
    setDraft(serialized);
  }

  const saveSection = async () => {
    let parsed: Record<string, unknown>;
    try {
      parsed = draft.trim() === "" ? {} : JSON.parse(draft);
    } catch {
      toast.error("JSON буруу хэлбэртэй байна — шалгаад дахин оролдоно уу.");
      return;
    }
    try {
      await save.mutateAsync({ section, data: parsed });
      toast.success("Хадгалагдлаа");
    } catch (err) {
      toast.error(
        err instanceof ApiClientError ? err.message : "Хадгалахад алдаа гарлаа",
      );
    }
  };

  return (
    <div className="border-border/60 space-y-2 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">
          {page} · {section}
        </p>
        <Button
          size="sm"
          onClick={() => void saveSection()}
          disabled={save.isPending}
        >
          <Save aria-hidden="true" />
          {save.isPending ? "Хадгалж байна…" : "Хадгалах"}
        </Button>
      </div>
      {isPending ? (
        <p className="text-muted-foreground text-sm">Ачаалж байна…</p>
      ) : isError ? (
        <p className="text-destructive text-sm">Ачаалахад алдаа гарлаа.</p>
      ) : (
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          rows={10}
          spellCheck={false}
          placeholder='{ "intro": "…" }'
          className="border-input focus-visible:ring-ring bg-background w-full rounded-md border px-3 py-2 font-mono text-xs focus-visible:outline-none"
        />
      )}
    </div>
  );
}
