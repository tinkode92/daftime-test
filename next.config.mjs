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
    ];
  },
};

export default nextConfig;
