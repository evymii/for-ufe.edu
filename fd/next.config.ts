import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // YouTube video posters (auto-derived thumbnails on /videos tiles).
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      // Admin-uploaded imagery (albums, news covers) served by Cloudinary.
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  async redirects() {
    return [
      // Public pages were renamed from Mongolian transliterations to
      // minimal English slugs; keep old links working.
      { source: "/toglogchid", destination: "/players", permanent: true },
      { source: "/player", destination: "/players", permanent: true },
      { source: "/tuuh", destination: "/history", permanent: true },
      { source: "/udirdlaga", destination: "/staff", permanent: true },
      { source: "/holboo-barih", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
