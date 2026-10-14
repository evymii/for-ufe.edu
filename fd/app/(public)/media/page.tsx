import type { Metadata } from "next";

import { MediaBoard } from "@/components/team/media-board";
import { MediaHero } from "@/components/team/media-hero";
import { Reveal } from "@/components/team/reveal";
import { mediaHeroFallback } from "@/content/pages";
import { getAlbums, getPageCopy, getVideos } from "@/lib/content";

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн сагсан бөмбөгийн шигшээ багийн медиа — зургийн цомогууд, онцлох бичлэгүүд, ярилцлагууд.",
  title: "Медиа",
};

export const revalidate = 60;

export default async function MediaPage() {
  const [albums, videos, heroCopy] = await Promise.all([
    getAlbums(),
    getVideos(),
    getPageCopy("media", "hero"),
  ]);
  const intro =
    (typeof heroCopy?.intro === "string" && heroCopy.intro) ||
    mediaHeroFallback.intro;
  const featured = videos.find((video) => video.isFeatured) ?? null;

  return (
    <>
      <MediaHero
        breadcrumb="Медиа"
        subtitle={intro}
        title="Медиа"
        videoUrl={featured?.videoUrl ?? null}
        poster={featured?.thumbnail ?? mediaHeroFallback.poster}
      />
      <Reveal delay={60}>
        <MediaBoard albums={albums} videos={videos} />
      </Reveal>
    </>
  );
}
