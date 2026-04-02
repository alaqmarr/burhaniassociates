import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PremiumHero from '@/components/PremiumHero'
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
    { name: 'Toggle Clamps', slug: 'toggle-clamps', desc: 'Vertical, Horizontal, Push-Pull', spanClass: 'lg:col-span-2 lg:row-span-2 min-h-[400px] lg:min-h-[600px]' },
    { name: 'Handwheels', slug: 'handwheels', desc: 'Bakelite, Spoke, Revolving Handles', spanClass: 'lg:col-span-2 lg:row-span-1 min-h-[300px]' },
    { name: 'Vibration Mounts', slug: 'vibration-mounts', desc: 'Rubber Buffers, Anti-Vibration Pads', spanClass: 'lg:col-span-1 lg:row-span-1 min-h-[300px]' },
    { name: 'Control Panel', slug: 'control-panel', desc: 'Locks, Hinges, Keys', spanClass: 'lg:col-span-1 lg:row-span-1 min-h-[300px]' },
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

async function getHeroImages() {
  try {
    const products = await prisma.product.findMany({
      where: {
        status: 'PUBLISHED',
        isArchived: false,
        images: {
          some: {} // Check if product has any images
        }
      },
      take: 30,
      orderBy: { createdAt: 'desc' },
      select: {
        name: true,
        images: {
          take: 1
        }
      }
    })

    // Get unique images, shuffle, and take 8
    const images = products
      .filter(p => p.images.length > 0)
      .map(p => ({ url: p.images[0].url, alt: p.name }))

    return shuffleArray(images).slice(0, 8)
  } catch {
    return []
  }
}

async function getBrands() {
  try {
    return await prisma.brand.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' }
    });
  } catch {
    return [];
  }
}

export default async function Home() {
  const [products, categories, heroImages, brands] = await Promise.all([
    getRandomFeaturedProducts(),
    getCategoriesWithImages(),
    getHeroImages(),
    getBrands()
  ])

  // Duplicate brands array to make infinite marquee seamless if needed
  const marqueeBrands = brands.length > 0 ? [...brands, ...brands, ...brands, ...brands] : []

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PremiumHero heroImages={heroImages} />

      {/* Brand Strip - Infinite Marquee */}
      {brands.length > 0 && (
        <div className="bg-primary border-b border-white/10 py-6 overflow-hidden relative">
          {/* Gradient overlays for smooth fading edges */}
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-[200%] animate-[marquee_40s_linear_infinite]">
            <div className="flex w-1/2 justify-around items-center">
              {marqueeBrands.slice(0, marqueeBrands.length / 2).map((b, i) => (
                <span key={`${b.id}-${i}`} className="text-xl md:text-2xl font-heading font-black text-white/40 uppercase tracking-widest whitespace-nowrap px-8">
                  {b.name}
                </span>
              ))}
            </div>
            <div className="flex w-1/2 justify-around items-center">
              {marqueeBrands.slice(marqueeBrands.length / 2).map((b, i) => (
                <span key={`${b.id}-${i}-copy`} className="text-xl md:text-2xl font-heading font-black text-white/40 uppercase tracking-widest whitespace-nowrap px-8">
                  {b.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={`/products?category=${cat.slug}`}
                className={`group block bg-gray-100 rounded-xl overflow-hidden relative shadow-md hover:shadow-2xl transition-all duration-500 ${cat.spanClass}`}
              >
                {/* Background Base */}
                <div className="absolute inset-0 bg-white z-0" />
                
                {cat.image ? (
                  <div className="absolute inset-0 flex items-center justify-center z-10 w-full h-full p-12">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply"
                        />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 z-10">
                    <svg className="w-32 h-32 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                
                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-20" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-30 transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-1 bg-accent mb-4 transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300" />
                  <h3 className="text-2xl lg:text-3xl font-heading font-black text-white mb-2 uppercase tracking-wide">{cat.name}</h3>
                  <p className="text-sm lg:text-base text-gray-300 font-sans font-light lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{cat.desc}</p>
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
