/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // Add the images configuration
  images: {
    domains: ['img.youtube.com'],
    domains: ['i.ytimg.com'], // Whitelist the YouTube thumbnail domain
  },
};

export default nextConfig;
