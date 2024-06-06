const BASE_URL = "https://tatpnu.com/";
const API_URL = "https://back-api.tatpnu.com/api/";

async function fetchesSlugs(urlPath, transformItem) {
  try {
    const response = await fetch(API_URL + urlPath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonResponse = await response.json();
    const items = jsonResponse.data;
    if (!Array.isArray(items)) {
      throw new Error(
        "Expected an array from API response, but got something else"
      );
    }
    return items.map(transformItem);
  } catch (error) {
    console.error("Error fetching post slugs:", error);
    return [];
  }
}
const configContentPaths = [
  { path: "products", transform: (item) => `product/${item.slug}` },
  {
    path: "blogs",
    transform: (item) => `blog/${item.slug}`,
  },
];
module.exports = {
  siteUrl: BASE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: "./public",
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const allPaths = [];
    for (const content of configContentPaths) {
      // console.log(content)

      const contentPaths = await fetchesSlugs(content.path, content.transform);
      allPaths.push(...contentPaths);
    }

    return allPaths.map((path) => {
      return {
        loc: path,
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    });
  },
};
