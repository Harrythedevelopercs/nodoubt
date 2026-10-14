const path = require("path");

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    inlineCss: false,
    optimizePackageImports: [
      "react-bootstrap",
      "embla-carousel-react",
      "embla-carousel-autoplay",
      "embla-carousel-auto-scroll",
    ],
    turbo: {
      enabled: true,
    },
  },
  images: {
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [64, 128, 256],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async headers() {
    return [
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.(webm|mp4|webp|png|jpg|jpeg|svg|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.webm$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: `/_next/static/videos/`,
          outputPath: `${isServer ? "../" : ""}static/videos/`,
          name: "[name].[hash].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
