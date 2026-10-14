import { redirect } from "next/navigation";

/** The old tabbed CMS is superseded by the per-entity pages and the
 *  /admin/text/[page] editors — keep the path alive as a redirect. */
export default function AdminContentPage() {
  redirect("/admin/text/home");
}
