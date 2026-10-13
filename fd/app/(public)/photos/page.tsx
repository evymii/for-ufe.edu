import type { Metadata } from "next";

import { PageHero } from "@/components/team/page-hero";
import { Reveal } from "@/components/team/reveal";
import { PhotosGallery } from "@/components/team/photos-gallery";
import { photosHeroFallback } from "@/content/pages";
import { getAlbums, getPageCopy } from "@/lib/content";

export const metadata: Metadata = {
  description:
    "СЭЗИС-ийн сагсан бөмбөгийн шигшээ багийн галерей — тоглолт, нийгмийн ажил, арга хэмжээний фото зургууд.",
  title: "Фото",
};

export const revalidate = 60;

export default async function PhotosPage() {
  const [albums, heroCopy] = await Promise.all([
    getAlbums(),
    getPageCopy("photos", "hero"),
  ]);
  const intro =
    (typeof heroCopy?.intro === "string" && heroCopy.intro) ||
    photosHeroFallback.intro;

  return (
    <>
      <PageHero breadcrumb="Фото" subtitle={intro} title="Фото" />
      <Reveal delay={60}>
        <PhotosGallery albums={albums} />
      </Reveal>
    </>
  );
}
