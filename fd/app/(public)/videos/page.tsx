import type { Metadata } from "next";

import { PageHero } from "@/components/team/page-hero";
import { Reveal } from "@/components/team/reveal";
import { VideoLibrary } from "@/components/team/video-library";
import { videosHeroFallback } from "@/content/pages";
import { getPageCopy, getVideos } from "@/lib/content";

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн сагсан бөмбөгийн шигшээ багийн видео сан — онцлох мийчлүүд, ярилцлага, ар талын амьдрал.",
  title: "Видео",
};

export const revalidate = 60;

export default async function VideosPage() {
  const [videos, heroCopy] = await Promise.all([
    getVideos(),
    getPageCopy("videos", "hero"),
  ]);
  const intro =
    (typeof heroCopy?.intro === "string" && heroCopy.intro) ||
    videosHeroFallback.intro;

  return (
    <>
      <PageHero breadcrumb="Видео" subtitle={intro} title="Видео" />
      <Reveal delay={60}>
        <VideoLibrary videos={videos} />
      </Reveal>
    </>
  );
}
