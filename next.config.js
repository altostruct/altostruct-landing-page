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

  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en-US", "sv"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "sv",

    domains: [
      {
        domain: "example.com",
        defaultLocale: "en-US",
      },
      {
        domain: "example.nl",
        defaultLocale: "nl-NL",
      },
      {
        domain: "example.fr",
        defaultLocale: "fr",
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        http: true,
      },
    ],
  },
};

module.exports = nextConfig;
