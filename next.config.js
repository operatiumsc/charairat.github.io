/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/operatiumsc.github.io/' : '',
  images: {
    domains: ['images.unsplash.com'],
    formats: ["image/webp"],
    unoptimized: true,
  },
}

module.exports = nextConfig
