import { api } from "@/lib/api-client";

/**
 * Admin client for the bd/ content API. Resources follow the same
 * { items } / { <singular> } envelope as the rest of the content surface;
 * the CMS panels stay generic by addressing them by endpoint path.
 */
export const adminContentService = {
  list<T>(
    endpoint: string,
    query: Record<string, string> = {},
  ): Promise<{
    items: T[];
  }> {
    const params = new URLSearchParams(query);
    const suffix = params.toString() ? `?${params}` : "";
    return api.get<{ items: T[] }>(`${endpoint}${suffix}`);
  },

  create<T>(endpoint: string, payload: unknown): Promise<T> {
    return api.post<T>(endpoint, payload);
  },

  update<T>(endpoint: string, id: string, payload: unknown): Promise<T> {
    return api.patch<T>(`${endpoint}/${id}`, payload);
  },

  remove(endpoint: string, id: string): Promise<{ deleted: boolean }> {
    return api.delete<{ deleted: boolean }>(`${endpoint}/${id}`);
  },

  getPageCopy(
    page: string,
  ): Promise<{ page: string; sections: Record<string, unknown> }> {
    return api.get(`/api/v1/content/site-content/${page}`);
  },

  putPageCopy(
    page: string,
    section: string,
    data: Record<string, unknown>,
  ): Promise<unknown> {
    return api.put(`/api/v1/content/site-content/${page}/${section}`, { data });
  },
};
