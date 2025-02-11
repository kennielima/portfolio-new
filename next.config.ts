import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.kennylima.vercel.app',
          },
        ],
        destination: 'https://kennylima.vercel.app/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
