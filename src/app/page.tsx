import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeroCarousel from '@/components/HeroCarousel'
import FeaturedCarousel from '@/components/FeaturedCarousel'
import AboutSection from '@/components/AboutSection'
import prisma from '@/lib/prisma'

// Helper to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray
}

async function getRandomFeaturedProducts() {
  try {
    // Fetch a larger batch of recent products to shuffle, keeping it performant
    const products = await prisma.product.findMany({
      where: { status: 'PUBLISHED', isArchived: false },
      take: 24, // Fetch pool
      orderBy: { createdAt: 'desc' },
      include: { brand: true, category: true, images: true }
    })

    // Randomize client-side (server-side generation time)
    return shuffleArray(products).slice(0, 10)
  } catch {
    return [] as any[]
  }
}

async function getCategoriesWithImages() {
  const targetCategories = [
    { name: 'Toggle Clamps', slug: 'toggle-clamps', desc: 'Vertical, Horizontal, Push-Pull' },
    { name: 'Handwheels', slug: 'handwheels', desc: 'Bakelite, Spoke, Revolving Handles' },
    { name: 'Vibration Mounts', slug: 'vibration-mounts', desc: 'Rubber Buffers, Anti-Vibration Pads' },
    { name: 'Control Panel', slug: 'control-panel', desc: 'Locks, Hinges, Keys' },
  ]

  const categoriesData = await Promise.all(targetCategories.map(async (cat) => {
    // Try to find a product in this category that has an image
    // Since we don't have slugs on Category model, we search by name loosely
    const productWithImage = await prisma.product.findFirst({
      where: {
        category: {
          name: { contains: cat.name, mode: 'insensitive' }
        },
        images: {
          some: {
            url: { contains: 'cloudinary', mode: 'insensitive' }
          }
        },
        status: 'PUBLISHED'
      },
      select: {
        images: {
          where: { url: { contains: 'cloudinary', mode: 'insensitive' } },
          take: 1
        }
      }
    })

    return {
      ...cat,
      image: productWithImage?.images[0]?.url || null // Fallback to null if no dynamic image found
    }
  }))

  return categoriesData
}

export default async function Home() {
  const [products, categories] = await Promise.all([
    getRandomFeaturedProducts(),
    getCategoriesWithImages()
  ])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroCarousel />

      {/* Brand Strip - Professional Industrial Look */}
      <div className="bg-secondary border-b border-border py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-sm font-bold text-muted-foreground mb-6 uppercase tracking-widest">
            Trusted by Engineering Units Across Telangana
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-80">
            {/* Text Logos using Oswald font */}
            <span className="text-3xl font-heading font-bold text-primary">CLAMPTEK</span>
            <span className="text-3xl font-heading font-bold text-primary">SWIFTIN</span>
            <span className="text-2xl font-heading font-bold text-gray-500">JGANTER</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Product Categories - Industrial Grid */}
      <section className="section py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-primary/10 pb-4">
            <div>
              <h2 className="section-title">Core Inventory</h2>
              <span className="section-subtitle">Precision Engineering Components</span>
            </div>
            <Link href="/products" className="btn btn-outline mt-4 md:mt-0">
              View All Categories
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={`/products?category=${cat.slug}`}
                className="group block bg-white border border-border hover:border-accent transition-all duration-300 relative"
              >
                {/* Image Area - Technical Layout */}
                <div className="h-56 bg-secondary relative overflow-hidden flex items-center justify-center border-b border-border">
                  <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10" />

                  {cat.image ? (
                    <div className="relative w-full h-full p-8 group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <svg className="w-16 h-16 text-primary/40 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}

                  {/* Overlay Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-2 uppercase">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground font-sans">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Carousel Style */}
      <section className="section py-20 bg-secondary/30 relative overflow-hidden border-t border-border">
        {/* Clean Background - Solid */}


        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="section-title text-center">Featured Inventory</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
              High-demand industrial supplies available for immediate delivery from our Ranigunj warehouse.
            </p>
          </div>

          <FeaturedCarousel products={products} />

          <div className="mt-12 text-center">
            <Link href="/products" className="btn btn-primary min-w-[240px]">
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Simple Geometric Accent */}
        <div className="absolute left-0 top-0 w-2 h-full bg-accent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-heading font-bold mb-6 text-white uppercase">Burhani Associates</h2>
              <div className="text-xl text-gray-300 font-light space-y-4 max-w-3xl">
                <p>
                  Specialized in industrial machinery components. Visit our store for a hands-on experience with our diverse range of products.
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div className="border-l-4 border-accent pl-4">
                  <span className="block text-3xl font-bold font-heading">20+</span>
                  <span className="text-sm text-gray-400 uppercase tracking-wider">Years Exp.</span>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <span className="block text-3xl font-bold font-heading">1000+</span>
                  <span className="text-sm text-gray-400 uppercase tracking-wider">SKUs</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 bg-white/5 p-8 border border-white/10">
              <h3 className="text-xl font-heading font-bold mb-4 uppercase text-white">Contact & Location</h3>
              <div className="space-y-4 font-sans text-gray-300">
                <p>
                  <strong className="text-white block uppercase text-xs tracking-wider mb-1">Address</strong>
                  4-4-208 Lala Temple Street, Ranigunj,<br />
                  Secunderabad - 500003
                </p>
                <p>
                  <strong className="text-white block uppercase text-xs tracking-wider mb-1">Phone</strong>
                  040-2780-8786 / +91 80967 76021
                </p>
                <p>
                  <strong className="text-white block uppercase text-xs tracking-wider mb-1">Email</strong>
                  burhaniassociates23@gmail.com
                </p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-accent w-full mt-4">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
