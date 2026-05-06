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
  async rewrites() {
    // Country/language URL matrix (per the SEO team's setup):
    //   AE+EN → /        AE+FR → /fr
    //   FR+EN → /fr-en   FR+FR → /fr-fr
    //   PT+EN → /pt-en   PT+PT → /pt
    //
    // FR and PT country sites currently mirror the AE content (the
    // client said "copie tout de ae pour l'instant"), so we serve them
    // through rewrites to the canonical AE pages. The visible URL keeps
    // the country/language prefix; the rendered content comes from the
    // matching language version under /fr or /. When divergent
    // country-specific content lands later, swap the rewrite for a
    // dedicated route file.
    return [
      // FR country, EN language — same content as AE-EN
      { source: "/fr-en", destination: "/" },
      { source: "/fr-en/:path*", destination: "/:path*" },
      // FR country, FR language — same content as AE-FR
      { source: "/fr-fr", destination: "/fr" },
      { source: "/fr-fr/:path*", destination: "/fr/:path*" },
      // PT country, EN language — same content as AE-EN
      { source: "/pt-en", destination: "/" },
      { source: "/pt-en/:path*", destination: "/:path*" },
    ];
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
