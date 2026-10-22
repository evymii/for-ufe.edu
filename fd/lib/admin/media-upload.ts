import { ApiClientError, api } from "@/lib/api-client";

/**
 * Admin image upload that never routes the file bytes through bd: Vercel
 * caps function request bodies at 4.5 MB, so anything larger must travel
 * browser → Cloudinary directly. bd hands out short-lived signed params
 * (admin-only endpoint), then registers the finished asset so it lands in
 * the media library like any other upload.
 */

interface DirectUploadParams {
  apiKey: string;
  cloudName: string;
  folder: string;
  signature: string;
  timestamp: number;
}

interface CloudinaryUploadResponse {
  error?: { message?: string };
  public_id?: string;
}

/** Uploads an image and returns its persisted media URL. */
export async function uploadAdminImage(
  file: File,
  alt: string,
): Promise<string> {
  const { params } = await api.post<{ params: DirectUploadParams }>(
    "/api/v1/admin/media/direct-params",
    {},
  );

  // Only these five fields: every extra unsigned param would break the
  // signature Cloudinary checks against folder + timestamp.
  const form = new FormData();
  form.append("file", file);
  form.append("api_key", params.apiKey);
  form.append("timestamp", String(params.timestamp));
  form.append("folder", params.folder);
  form.append("signature", params.signature);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${params.cloudName}/image/upload`,
    { method: "POST", body: form },
  );
  const body = (await response
    .json()
    .catch(() => null)) as CloudinaryUploadResponse | null;
  if (!response.ok || !body?.public_id) {
    throw new ApiClientError(
      response.status,
      "UPLOAD_FAILED",
      body?.error?.message ??
        `Cloudinary upload failed (HTTP ${response.status})`,
    );
  }

  const { media } = await api.post<{ media: { url: string } }>(
    "/api/v1/admin/media/register",
    { alt, publicId: body.public_id },
  );
  return media.url;
}
