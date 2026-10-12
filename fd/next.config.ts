import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
