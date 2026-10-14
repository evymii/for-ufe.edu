"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import {
  ResourcePanel,
  type ResourceConfig,
} from "@/components/admin/content/resource-panel";
import { SiteContentEditor } from "@/components/admin/content/site-content/site-content-editor";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useContactInbox,
  useDeleteContactMessage,
  useDeleteSubscriber,
  useMarkContactRead,
  useSubscribers,
} from "@/hooks/use-content-admin";
import { ApiClientError } from "@/lib/api-client";
import type { ContactMessageRow } from "@/services/admin/content.service";

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

const PLAYER_ROLES = [
  { value: "PLAYER", label: "Тоглогч" },
  { value: "COACH", label: "Дасгалжуулагч" },
  { value: "STAFF", label: "Ажилтан" },
];

const RESOURCES: ResourceConfig[] = [
  {
    columns: [
      { key: "title", label: "Мэдээ" },
      {
        key: "category",
        label: "Ангилал",
        render: (row) => (
          <Badge variant="secondary">{String(row.category)}</Badge>
        ),
      },
      {
        key: "publishedAt",
        label: "Огноо",
        render: (row) =>
          row.publishedAt
            ? new Date(String(row.publishedAt)).toLocaleDateString()
            : "—",
      },
      {
        key: "isFeatured",
        label: "Онцлох",
        render: (row) => (row.isFeatured ? "★" : "—"),
      },
      {
        key: "isPublished",
        label: "Нийтлэгдсэн",
        render: (row) => (row.isPublished ? "Тийм" : "Үгүй"),
      },
    ],
    description:
      "Мэдээний постууд — нүүр хуудасны «Онцлох мэдээ» хэсэгт онцлох тэмдэгтэй нь харагдана.",
    endpoint: "/api/v1/content/news",
    fields: [
      { name: "title", label: "Гарчиг", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true },
      {
        name: "category",
        label: "Ангилал (картын шошго)",
        type: "text",
        placeholder: "Аварга",
      },
      {
        name: "excerpt",
        label: "Товч агуулга",
        type: "textarea",
        required: true,
      },
      {
        name: "content",
        label: "Агуулга",
        type: "textarea",
        required: true,
        full: true,
      },
      { name: "coverImage", label: "Нүүр зургийн URL", type: "url" },
      {
        name: "tags",
        label: "Шошгууд",
        type: "tags",
        help: "Таслалаар тусгаарлана",
      },
      { name: "isFeatured", label: "Онцлох мэдээ", type: "checkbox" },
      { name: "isPublished", label: "Нийтлэх", type: "checkbox" },
      { name: "sortOrder", label: "Дараалал", type: "number" },
    ],
    key: "news",
    singular: "Мэдээ",
    title: "Мэдээ",
  },
  {
    columns: [
      { key: "number", label: "№" },
      { key: "name", label: "Тоглогч" },
      { key: "position", label: "Байрлал" },
      {
        key: "isCaptain",
        label: "Ахлагч",
        render: (row) => (row.isCaptain ? "★" : "—"),
      },
      {
        key: "isPublic",
        label: "Нийтлэх",
        render: (row) => (row.isPublic ? "Тийм" : "Үгүй"),
      },
    ],
    description:
      "Багийн бүрэлдэхүүн — /players хуудас ба нүүр хуудасны танилцуулга. Профайлын нэмэлт мэдээлэл (амжилт, девиз…) profile JSON-д.",
    endpoint: "/api/v1/content/players",
    fields: [
      { name: "name", label: "Нэр", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true },
      { name: "number", label: "Дугаар", type: "number" },
      {
        name: "role",
        label: "Үүрэг",
        type: "select",
        options: PLAYER_ROLES,
      },
      {
        name: "position",
        label: "Байрлал",
        type: "text",
        placeholder: "Point Guard",
      },
      { name: "heightCm", label: "Өндөр (см)", type: "number" },
      { name: "hometown", label: "Төрсөн газар", type: "text" },
      { name: "photo", label: "Зурагны URL", type: "url" },
      { name: "actionPhoto", label: "Тоглолтын зураг", type: "url" },
      { name: "bio", label: "Танилцуулга", type: "textarea", full: true },
      { name: "academicYear", label: "Курс", type: "text" },
      { name: "isCaptain", label: "Багийн ахлагч", type: "checkbox" },
      { name: "ppg", label: "PPG", type: "number" },
      { name: "rpg", label: "RPG", type: "number" },
      { name: "apg", label: "APG", type: "number" },
      {
        name: "profile",
        label: "Профайл нэмэлт (JSON)",
        type: "json",
        full: true,
        help: '{ "yearsOnTeam": "4 дэх жил", "major": "…", "achievements": ["…"], "motto": "…", "pregame": "…", "reason": "…", "roleLabel": "…" }',
      },
      { name: "sortOrder", label: "Дараалал", type: "number" },
      { name: "isPublic", label: "Нийтлэх", type: "checkbox" },
    ],
    key: "players",
    singular: "Тоглогч",
    title: "Тоглогчид",
  },
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
      { key: "name", label: "Нэр" },
      { key: "title", label: "Албан тушаал" },
      { key: "sortOrder", label: "Дараалал" },
    ],
    description:
      "/staff хуудас — дасгалжуулагчид, багийн ахлагч зэрэг карт (+ задаргааны хэсгүүд sections JSON-д).",
    defaults: { group: "STAFF" },
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
      { name: "photo", label: "Зурагны URL", type: "url" },
      { name: "sortOrder", label: "Дараалал", type: "number" },
      { name: "bio", label: "Товч танилцуулга", type: "textarea", full: true },
      {
        name: "bullets",
        label: "Онцлох мөрүүд",
        type: "tags",
        full: true,
        help: "Таслалаар тусгаарлана",
      },
      {
        name: "sections",
        label: "Задаргааны хэсгүүд (JSON)",
        type: "json",
        full: true,
        help: '[{ "heading": "Боловсрол", "text": "…" }, { "heading": "Ажлын замнал", "list": ["…"] }]',
      },
      { name: "isPublic", label: "Нийтлэх", type: "checkbox" },
    ],
    key: "staff",
    listQuery: { group: "STAFF" },
    revalidateTag: "executives",
    singular: "Ажилтан",
    title: "Багийн ажилтан",
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
    description:
      "Зурагнууд хуудасны галерейнууд — нүүр зураг, ангилал, зургууд.",
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
    description:
      "Бичлэгүүдийн сан — онцлох бичлэгүүд, ангилал, дамжуулалтын эх.",
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
    singular: "Бичлэг",
    title: "Бичлэгүүд",
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
    description: "Мерч дэлгүүр — бүтээгдэхүүн, үнэ, хэмжээ.",
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
  // Controlled so the page-copy editor's pointer links can hop straight
  // to the panel that owns a section's live rows (news, shop, inbox…).
  const [cmsTab, setCmsTab] = useState("games");

  return (
    <div className="space-y-6">
      <PageHeader
        title="Агуулга"
        description="Нийтийн хуудсуудын агуулга — мэдээ, тоглогчид, хуваарь, удирдлага, ажилтан, галерей, видео, дэлгүүр, холбоо ба хуудасны текст. Хадгалсны дараа нийтийн хуудас шууд шинэчлэгдэнэ."
      />
      <Tabs value={cmsTab} onValueChange={setCmsTab}>
        <TabsList className="flex h-auto flex-wrap justify-start">
          {RESOURCES.map((resource) => (
            <TabsTrigger key={resource.key} value={resource.key}>
              {resource.title}
            </TabsTrigger>
          ))}
          <TabsTrigger value="inbox">Холбоо</TabsTrigger>
          <TabsTrigger value="subscribers">Захиалга</TabsTrigger>
          <TabsTrigger value="page-copy">Хуудасны текст</TabsTrigger>
        </TabsList>
        {RESOURCES.map((resource) => (
          <TabsContent key={resource.key} value={resource.key}>
            <ResourcePanel config={resource} />
          </TabsContent>
        ))}
        <TabsContent value="inbox">
          <InboxPanel />
        </TabsContent>
        <TabsContent value="subscribers">
          <SubscribersPanel />
        </TabsContent>
        <TabsContent value="page-copy">
          <div className="space-y-4">
            <PageHeader
              title="Хуудасны текст"
              description="Хуудас бүрийн бичвэр — талбаруудыг бөглөж, баруун талд бодит харагдацыг ажиглана. Хадгалсны дараа нийтийн хуудас шууд шинэчлэгдэнэ."
            />
            <SiteContentEditor onOpenTab={setCmsTab} />
          </div>
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

/** Contact-form inbox: unread count, read/unread toggle, delete. */
function InboxPanel() {
  const { data, isPending, isError, error } = useContactInbox();
  const markRead = useMarkContactRead();
  const remove = useDeleteContactMessage();
  const [open, setOpen] = useState<ContactMessageRow | null>(null);

  return (
    <div className="space-y-4">
      <PageHeader
        title="Холбоо барих — зурвас"
        description="/public contact хуудасны формын ирсэн зурвасууд."
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
          Одоогоор зурвас байхгүй.
        </p>
      ) : (
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">
            Уншаагүй {data?.unread ?? 0} · нийт {data?.items.length ?? 0}
          </p>
          <div className="border-border/60 overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">Нэр</th>
                  <th className="px-3 py-2 text-left font-medium">Имэйл</th>
                  <th className="px-3 py-2 text-left font-medium">Сэдэв</th>
                  <th className="px-3 py-2 text-left font-medium">Огноо</th>
                  <th className="px-3 py-2 text-left font-medium">Төлөв</th>
                  <th className="px-3 py-2" />
                </tr>
              </thead>
              <tbody>
                {data?.items.map((row) => (
                  <tr key={row.id} className="border-border/60 border-t">
                    <td className="px-3 py-2">{row.name}</td>
                    <td className="text-muted-foreground px-3 py-2">
                      {row.email}
                    </td>
                    <td className="max-w-[200px] truncate px-3 py-2">
                      {row.subject ?? "—"}
                    </td>
                    <td className="text-muted-foreground px-3 py-2">
                      {new Date(row.createdAt).toLocaleString()}
                    </td>
                    <td className="px-3 py-2">
                      <Badge variant={row.isRead ? "outline" : "secondary"}>
                        {row.isRead ? "Уншсан" : "Шинэ"}
                      </Badge>
                    </td>
                    <td className="px-3 py-2 text-right">
                      <div className="flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setOpen(row);
                            if (!row.isRead)
                              markRead.mutate({ id: row.id, isRead: true });
                          }}
                        >
                          Харах
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label={`${row.name} устгах`}
                          onClick={() => remove.mutate(row.id)}
                        >
                          <Trash2
                            className="text-destructive size-4"
                            aria-hidden="true"
                          />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Dialog
        open={open !== null}
        onOpenChange={(isOpen) => !isOpen && setOpen(null)}
      >
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{open?.subject ?? "Зурвас"}</DialogTitle>
            <DialogDescription>
              {open?.name} · {open?.email}
              {open?.phone ? ` · ${open.phone}` : ""}
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm whitespace-pre-wrap">{open?.message}</p>
          <DialogFooter>
            <Button variant="outline" asChild>
              <a href={`mailto:${open?.email ?? ""}`}>Хариулах</a>
            </Button>
            <Button onClick={() => setOpen(null)}>Хаах</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
