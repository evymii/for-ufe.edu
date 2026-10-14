import type { Metadata } from "next";

import { MediaBoard } from "@/components/team/media-board";
import { PageHero } from "@/components/team/page-hero";
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

  return (
    <>
      <PageHero breadcrumb="Медиа" subtitle={intro} title="Медиа" />
      <Reveal delay={60}>
        <MediaBoard albums={albums} videos={videos} />
      </Reveal>
    </>
  );
}
