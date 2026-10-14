import { permanentRedirect } from "next/navigation";

/** Зурагнууд нь Медиа хуудсанд нэгдсэн тул хуучин холбоосууд шилжинэ. */
export default function PhotosPage() {
  permanentRedirect("/media");
}
