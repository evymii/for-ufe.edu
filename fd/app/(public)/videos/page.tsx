import { permanentRedirect } from "next/navigation";

/** Бичлэгүүд нь Медиа хуудсанд нэгдсэн тул хуучин холбоосууд шилжинэ. */
export default function VideosPage() {
  permanentRedirect("/media");
}
