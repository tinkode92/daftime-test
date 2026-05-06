/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/resources/guide-2026",
        destination: "/guide",
        permanent: true,
      },
      {
        source: "/resources/podcast",
        destination: "/podcast",
        permanent: true,
      },
      {
        source: "/resources/podcast/:slug",
        destination: "/podcast/:slug",
        permanent: true,
      },
      // SEO typo from the original URL list: 'imppts' → 'impots'
      {
        source: "/new-article/expatrie-imppts-guide-imposition-dubai",
        destination: "/new-article/expatrie-impots-guide-imposition-dubai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
