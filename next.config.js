/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: { unoptimized: true },

  async exportPathMap(map) {
    const newMap = {};

    for (const key in map) {
      if (key.startsWith(`/${this.i18n.defaultLocale}`)) {
        let newKey = key.replace(`/${this.i18n.defaultLocale}`, "");
        if (newKey === "") newKey = "/";
        newMap[newKey] = map[key];
      } else {
        newMap[key] = map[key];
      }
    }

    return {
      ...newMap,
    };
  },
  productionBrowserSourceMaps: true,
  experimental: {
    legacyBrowsers: false,
    forceSwcTransforms: true,
  },

  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: 75,
    nextImageExportOptimizer_storePicturesInWEBP: true,
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",

    // If you do not want to use blurry placeholder images, then you can set
    // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
    // `placeholder="empty"` to all <ExportedImage> components.
    nextImageExportOptimizer_generateAndUseBlurImages: false,
  },

  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["sv"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "sv",
  },
};

module.exports = nextConfig;
