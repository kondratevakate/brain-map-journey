import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['previsit.online'],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
