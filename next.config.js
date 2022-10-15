/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

images: {
  domains: ...,
  path: `${basePath}/_next/image`,
}

module.exports = nextConfig
