import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const BASE_URL = "https://burhaniassociates.com"; // Replace with actual production URL

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Routes
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/categories",
    "/brands",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Fetch Dynamic Data
  // We handle potential failures gracefully to ensure sitemap always generates at least static pages
  let products: any[] = [];

  try {
    const productsData = await prisma.product.findMany({
      where: { status: "PUBLISHED", isArchived: false },
      select: { id: true, updatedAt: true },
    });
    products = productsData;
  } catch (error) {
    console.error("Sitemap data fetch error:", error);
  }

  // 3. Generate Dynamic Routes
  const productRoutes = products.map((product) => ({
    url: `${BASE_URL}/products/${product.id}`,
    lastModified: product.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Note: Brands and Categories are currently filtered views on /products page,
  // but if we had dedicated /brands/[slug] pages we would add them here.
  // Assuming current routing: /products?brand=slug or /products?category=slug
  // These are query parameters, not typically clean sitemap URLs unless we rewrite them.
  // However, if we do have distinct pages, we add them.
  // Based on file structure, we only have /products/[slug].
  // We'll stick to Product details pages for high-value indexing.

  return [...staticRoutes, ...productRoutes];
}
