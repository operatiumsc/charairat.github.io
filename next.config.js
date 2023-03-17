/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ["image/webp"],
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
  }
}

module.exports = nextConfig
