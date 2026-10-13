"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Heart, Minus, Plus } from "lucide-react";

import type { ShopCategory, ShopProductRow } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * Fan club shop: 40px rotating promo bar (slides every 5s), split hero,
 * six category tiles (192×192), a 260px filter rail (collapsible sections
 * on 48px hairline rows) and a 3-column product grid with favourite
 * buttons, compare-at strikethroughs and size pills.
 */

const CATEGORIES: Array<{ value: ShopCategory | "ALL"; label: string }> = [
  { value: "ALL", label: "Бүгд" },
  { value: "JERSEYS", label: "Өмсгөл" },
  { value: "TEES", label: "Ti-шерт" },
  { value: "HOODIES", label: "Худи" },
  { value: "HATS", label: "Малгай" },
  { value: "KIDS", label: "Хүүхдэд" },
  { value: "GEAR", label: "Хэрэгсэл" },
];

/** Tile variants mirror the category order for the 6-up strip. */
const TILES: Array<{ value: ShopCategory; label: string }> = CATEGORIES.filter(
  (option): option is { value: ShopCategory; label: string } =>
    option.value !== "ALL",
).slice(0, 6);

const PRICE_BANDS = [
  { value: "all", label: "Бүгд", test: () => true },
  { value: "low", label: "50,000₮ хүртэл", test: (p: number) => p < 50_000 },
  {
    value: "mid",
    label: "50–100 мянган ₮",
    test: (p: number) => p >= 50_000 && p <= 100_000,
  },
  { value: "high", label: "100,000₮+", test: (p: number) => p > 100_000 },
] as const;

export interface FanClubContent {
  title: string;
  subtitle: string;
  cta: string;
  heroImage: string;
  promos: string[];
}

export function formatMnt(price: number): string {
  return `${new Intl.NumberFormat("en-US").format(price)}₮`;
}

export function FanClubShop({
  products,
  content,
}: {
  products: ShopProductRow[];
  content: FanClubContent;
}) {
  const [promoIndex, setPromoIndex] = useState(0);
  const [category, setCategory] = useState<ShopCategory | "ALL">("ALL");
  const [sizes, setSizes] = useState<string[]>([]);
  const [band, setBand] =
    useState<(typeof PRICE_BANDS)[number]["value"]>("all");
  const [favourites, setFavourites] = useState<Set<string>>(new Set());

  // Rotating promo bar — slide every 5s.
  useEffect(() => {
    if (content.promos.length <= 1) return;
    const timer = window.setInterval(
      () => setPromoIndex((index) => (index + 1) % content.promos.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, [content.promos.length]);

  const availableSizes = useMemo(
    () => [...new Set(products.flatMap((product) => product.sizes))],
    [products],
  );

  const filtered = products.filter((product) => {
    if (category !== "ALL" && product.category !== category) return false;
    if (sizes.length > 0 && !product.sizes.some((size) => sizes.includes(size)))
      return false;
    const bandDef = PRICE_BANDS.find((option) => option.value === band);
    return bandDef ? bandDef.test(product.price) : true;
  });

  const toggleFavourite = (id: string) => {
    setFavourites((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      {/* Rotating promo bar */}
      {content.promos.length > 0 ? (
        <div className="bg-brand-2 text-paper flex h-10 items-center justify-center overflow-hidden">
          <p
            key={promoIndex}
            className="view-swap px-4 text-center text-[12px] font-semibold tracking-[0.1em] uppercase"
            aria-live="polite"
          >
            {content.promos[promoIndex]}
          </p>
        </div>
      ) : null}

      {/* Split hero */}
      <section className="grid md:grid-cols-2">
        <div className="bg-paper-soft flex min-h-[360px] flex-col justify-center gap-6 p-8 md:min-h-[520px] md:p-16">
          <h1 className="font-display text-ink text-[clamp(40px,6vw,64px)] leading-[0.95] font-bold tracking-[0.02em] uppercase">
            {content.title}
          </h1>
          <p className="text-mute max-w-md text-[15px] leading-[1.6]">
            {content.subtitle}
          </p>
          <a
            href="#catalog"
            className="font-display team-focus bg-ink text-paper hover:bg-brand-2 inline-flex h-13 w-fit items-center rounded-full px-8 text-sm font-semibold tracking-[0.06em] uppercase transition-colors"
          >
            {content.cta}
          </a>
        </div>
        <div className="relative hidden min-h-[520px] items-center justify-center bg-[#BDBDB9] md:flex">
          {content.heroImage ? (
            <Image
              src={content.heroImage}
              alt=""
              fill
              sizes="50vw"
              className="object-cover"
              priority
            />
          ) : (
            <span className="font-display text-mute/50 text-[13px] tracking-[0.12em] uppercase">
              Багийн бүтээгдэхүүн
            </span>
          )}
        </div>
      </section>

      {/* Category tiles */}
      <div className="team-shell mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {TILES.map((tile) => (
          <button
            key={tile.value}
            type="button"
            onClick={() =>
              setCategory((current) =>
                current === tile.value ? "ALL" : tile.value,
              )
            }
            aria-pressed={category === tile.value}
            className="team-focus group text-left"
          >
            <div
              className={cn(
                "bg-paper-soft border-line relative aspect-square overflow-hidden border transition-colors",
                category === tile.value && "border-ink",
              )}
            >
              <span className="font-display text-mute/40 group-hover:text-mute/70 flex h-full items-center justify-center text-lg font-bold tracking-[0.1em] uppercase transition-colors">
                {tile.label}
              </span>
            </div>
            <p className="font-display text-ink mt-2 text-[17px] font-semibold tracking-[0.03em] uppercase">
              {tile.label}
            </p>
          </button>
        ))}
      </div>

      {/* Filter rail + product grid */}
      <div
        id="catalog"
        className="team-shell mt-12 grid scroll-mt-24 pb-16 md:scroll-mt-32 md:pb-20 lg:grid-cols-[260px_1fr]"
      >
        <aside aria-label="Шүүлтүүр">
          <h2 className="font-display text-ink text-[20px] font-bold tracking-[0.02em] uppercase">
            Шүүлтүүр
          </h2>

          <FilterSection title="Ангилал" defaultOpen>
            <div className="flex flex-col gap-2">
              {CATEGORIES.map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-2.5"
                >
                  <input
                    type="radio"
                    name="fan-category"
                    checked={category === option.value}
                    onChange={() => setCategory(option.value)}
                    className="accent-ink size-4"
                  />
                  <span className="text-[14px]">{option.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {availableSizes.length > 0 ? (
            <FilterSection title="Хэмжээ" defaultOpen={false}>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map((size) => {
                  const active = sizes.includes(size);
                  return (
                    <button
                      key={size}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        setSizes((current) =>
                          current.includes(size)
                            ? current.filter((item) => item !== size)
                            : [...current, size],
                        )
                      }
                      className={cn(
                        "font-display team-focus inline-flex h-9 min-w-10 items-center justify-center rounded-full border px-3 text-[13px] font-semibold transition-colors",
                        active
                          ? "border-ink bg-ink text-paper"
                          : "border-ink/25 text-mute hover:border-ink hover:text-ink",
                      )}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </FilterSection>
          ) : null}

          <FilterSection title="Үнэ" defaultOpen={false}>
            <div className="flex flex-col gap-2">
              {PRICE_BANDS.map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-2.5"
                >
                  <input
                    type="radio"
                    name="fan-price"
                    checked={band === option.value}
                    onChange={() => setBand(option.value)}
                    className="accent-ink size-4"
                  />
                  <span className="text-[14px]">{option.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>
        </aside>

        <div>
          <p className="text-mute mb-4 text-[12px] font-semibold tracking-[0.12em] uppercase">
            {filtered.length} бүтээгдэхүүн
          </p>
          <div
            key={`${category}-${band}-${sizes.join()}`}
            className="view-swap grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                favourite={favourites.has(product.id)}
                onToggleFavourite={() => toggleFavourite(product.id)}
              />
            ))}
          </div>
          {filtered.length === 0 ? (
            <p className="text-mute py-12 text-center text-sm">
              Шүүлтүүрт тохирох бүтээгдэхүүн олдсонгүй.
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
}

function FilterSection({
  title,
  defaultOpen,
  children,
}: {
  title: string;
  defaultOpen: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-line border-t">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="team-focus flex min-h-12 w-full items-center justify-between text-left"
      >
        <span className="text-ink text-[14px] font-semibold">{title}</span>
        {open ? (
          <Minus className="text-mute size-4" aria-hidden="true" />
        ) : (
          <Plus className="text-mute size-4" aria-hidden="true" />
        )}
      </button>
      {open ? <div className="view-swap pb-4">{children}</div> : null}
    </div>
  );
}

function ProductCard({
  product,
  favourite,
  onToggleFavourite,
}: {
  product: ShopProductRow;
  favourite: boolean;
  onToggleFavourite: () => void;
}) {
  const body = (
    <>
      <div className="bg-paper-soft relative aspect-square overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover"
          />
        ) : (
          <span className="font-display text-mute/35 flex h-full items-center justify-center px-6 text-center text-[13px] font-semibold tracking-[0.1em] uppercase">
            {product.name}
          </span>
        )}
        {product.badge ? (
          <span className="bg-ink text-paper absolute top-2 left-2 px-2 py-0.5 text-[11px] font-semibold tracking-[0.08em] uppercase">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="p-3.5">
        <p className="text-ink line-clamp-2 min-h-[42px] text-[16px] leading-[1.3]">
          {product.name}
        </p>
        <p className="mt-1.5 text-[18px] font-semibold">
          {formatMnt(product.price)}{" "}
          {product.compareAtPrice ? (
            <s className="text-mute text-[13px] font-normal">
              {formatMnt(product.compareAtPrice)}
            </s>
          ) : null}
        </p>
        {product.sizes.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="border-ink/25 text-mute inline-flex h-7 items-center rounded-full border px-2.5 text-[12px] font-semibold"
              >
                {size}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );

  return (
    <article className="border-line border transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.14)]">
      <div className="relative">
        {product.url ? (
          <a
            href={product.url}
            target="_blank"
            rel="noreferrer"
            className="team-focus block"
          >
            {body}
          </a>
        ) : (
          body
        )}
        <button
          type="button"
          onClick={onToggleFavourite}
          aria-pressed={favourite}
          aria-label={`${product.name} — дуртай`}
          className="bg-paper border-line team-focus absolute top-2 right-2 flex size-11 items-center justify-center rounded-full border"
        >
          <Heart
            className={cn(
              "size-5 transition-colors",
              favourite ? "fill-ink text-ink" : "text-mute",
            )}
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
}
