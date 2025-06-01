/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: "export"' to enable API routes and server features
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    serverComponentsExternalPackages: ["convex"],
  },
  // Generate Convex files during build if they don't exist
  webpack: (config, { isServer }) => {
    if (isServer) {
      // This ensures Convex files are generated before build
      config.externals = config.externals || [];
      config.externals.push("convex/server");
    }
    return config;
  },
};

module.exports = nextConfig;
