const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");
require("dotenv").config();

const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Start seeding...");

  // 1. Create Brands
  const clamptek = await prisma.brand.upsert({
    where: { name: "Clamptek" },
    update: {},
    create: {
      id: "brand-clamptek",
      name: "Clamptek",
      // No imageUrl field in schema? Check schema.
      // Schema has imageUrl String?
      imageUrl: "https://placehold.co/400x200/png?text=Clamptek",
    },
  });

  const swiftin = await prisma.brand.upsert({
    where: { name: "Swiftin" },
    update: {},
    create: {
      id: "brand-swiftin",
      name: "Swiftin",
      imageUrl: "https://placehold.co/400x200/png?text=Swiftin",
    },
  });

  const generic = await prisma.brand.upsert({
    where: { name: "Generic" },
    update: {},
    create: {
      id: "brand-generic",
      name: "Generic",
      imageUrl: "https://placehold.co/400x200/png?text=Generic",
    },
  });

  console.log("Brands created.");

  // 2. Create Categories
  const categoriesData = [
    { id: "cat-toggle", name: "Toggle Clamps" },
    { id: "cat-panel", name: "Control Panel Accessories" },
    { id: "cat-handwheel", name: "Handwheels" },
    { id: "cat-mount", name: "Vibration Mounts" },
    { id: "cat-pin", name: "Cotton Pins" },
  ];

  for (const cat of categoriesData) {
    await prisma.category.upsert({
      where: { name: cat.name },
      update: {},
      create: {
        id: cat.id,
        name: cat.name,
      },
    });
  }

  console.log("Categories created.");

  // 3. Create Products
  const productsData = [
    {
      id: "prod-clamp-01",
      name: "Vertical Toggle Clamp GH-101-A",
      description:
        "<p>Heavy duty vertical toggle clamp for industrial fixing.</p>",
      brandId: clamptek.id,
      categoryId: "cat-toggle",
      images: ["https://placehold.co/600x600/png?text=Toggle+Clamp"],
    },
    {
      id: "prod-clamp-02",
      name: "Horizontal Toggle Clamp GH-201",
      description: "<p>Standard horizontal toggle clamp.</p>",
      brandId: clamptek.id,
      categoryId: "cat-toggle",
      images: ["https://placehold.co/600x600/png?text=Horizontal+Clamp"],
    },
    {
      id: "prod-handle-01",
      name: "Bakelite Handwheel 100mm",
      description: "<p>Solid bakelite handwheel with revolving handle.</p>",
      brandId: generic.id,
      categoryId: "cat-handwheel",
      images: ["https://placehold.co/600x600/png?text=Handwheel"],
    },
    {
      id: "prod-mount-01",
      name: "Rubber Vibration Mount Type A",
      description: "<p>Cylindrical rubber mount for machinery isolation.</p>",
      brandId: swiftin.id,
      categoryId: "cat-mount",
      images: ["https://placehold.co/600x600/png?text=Mount+A"],
    },
    {
      id: "prod-mount-02",
      name: "Anti-Vibration Pad 50x50",
      description: "<p>Heavy duty anti-vibration pad.</p>",
      brandId: swiftin.id,
      categoryId: "cat-mount",
      images: ["https://placehold.co/600x600/png?text=Mount+Pad"],
    },
    {
      id: "prod-pin-01",
      name: "Cotton Pin 3mm",
      description: "<p>Industrial grade cotton split pin.</p>",
      brandId: generic.id,
      categoryId: "cat-pin",
      images: ["https://placehold.co/600x600/png?text=Pin"],
    },
    {
      id: "prod-panel-01",
      name: "Panel Lock 90 Degree",
      description: "<p>Quarter turn panel lock for electrical cabinets.</p>",
      brandId: generic.id,
      categoryId: "cat-panel",
      images: ["https://placehold.co/600x600/png?text=Panel+Lock"],
    },
  ];

  for (const prod of productsData) {
    const existing = await prisma.product.findUnique({
      where: { name: prod.name },
    });

    if (!existing) {
      await prisma.product.create({
        data: {
          id: prod.id,
          name: prod.name,
          description: prod.description,
          status: "PUBLISHED",
          brand: { connect: { id: prod.brandId } },
          category: { connect: { id: prod.categoryId } },
          // Schema Image: id, url, publicId, productId
          images: {
            create: prod.images.map((url) => ({
              url,
              publicId: "placeholder",
            })),
          },
          inventory: {
            create: {
              stock: 100,
            },
          },
        },
      });
    }
  }

  console.log("Products created.");
  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
