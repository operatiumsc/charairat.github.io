/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

console.log(process.env.NODE_ENV); // 'development'

console.log('isProd:', isProd);

const nextConfig = {
  //reactStrictMode: true,
  output: "export",
  assetPrefix: isProd ? 'https://operatiumsc.github.io/' : '',
  images: {
    // domains: ['images.unsplash.com'],
    // formats: ["image/webp"],
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
      "dd-trace": "commonjs dd-trace",
    })
    return config
  }
}

module.exports = nextConfig
