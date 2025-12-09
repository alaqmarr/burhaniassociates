import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import prisma from '@/lib/prisma'
import ProductDetailClient from '@/components/ProductDetailClient'

interface Props {
    params: Promise<{ slug: string }>
}

async function getProduct(slug: string) {
    try {
        const product = await prisma.product.findUnique({
            where: { id: slug },
            include: {
                brand: true,
                category: true,
                images: true,
                variants: true,
                inventory: true
            },
        })
        return product
    } catch {
        return null
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const product = await getProduct(slug)

    if (!product) {
        return { title: 'Product Not Found | Burhani Associates' }
    }

    return {
        title: `${product.name} | Burhani Associates`,
        description: product.description?.substring(0, 160) || `Buy ${product.name} from Burhani Associates Hyderabad.`,
    }
}

export default async function ProductDetailPage({ params }: Props) {
    const { slug } = await params
    const product = await getProduct(slug)

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="text-4xl font-heading font-bold text-primary mb-4">Product Not Found</h1>
                    <Link href="/products" className="btn btn-primary">Return to Catalog</Link>
                </div>
            </div>
        )
    }

    // Map data for Client Component
    const displayProduct = {
        name: product.name,
        slug: product.id,
        description: product.description,
        imageUrl: product.images[0]?.url || null,
        featured: false,
        inStock: (product.inventory?.stock || 0) > 0,
        brand: product.brand ? { id: product.brand.id, name: product.brand.name, slug: product.brand.name.toLowerCase().replace(/\s+/g, '-') } : null,
        category: product.category ? { id: product.category.id, name: product.category.name, slug: product.category.name.toLowerCase().replace(/\s+/g, '-') } : null,
    }

    // Server Side Layout with Client Component for Interactivity
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Breadcrumb / Header */}
            <div className="bg-secondary border-b border-border py-8">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground uppercase tracking-wide">
                        <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                        <span>/</span>
                        {product.category && (
                            <>
                                <Link href={`/products?category=${product.category.name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors">
                                    {product.category.name}
                                </Link>
                                <span>/</span>
                            </>
                        )}
                        <span className="text-primary font-bold truncated">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Image Section - Sticky */}
                    <div className="relative h-[500px] lg:h-[600px] bg-white border border-border flex items-center justify-center p-12">
                        {displayProduct.imageUrl ? (
                            <Image
                                src={displayProduct.imageUrl}
                                alt={product.name}
                                fill
                                className="object-contain"
                            />
                        ) : (
                            <div className="text-muted-foreground/30">
                                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        )}
                        {/* Watermark or corner accents could go here */}
                    </div>

                    {/* Details Section */}
                    <div className="space-y-8">
                        <div>
                            {product.brand && (
                                <Link href={`/products?brand=${product.brand.name.toLowerCase().replace(/\s+/g, '-')}`} className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-bold uppercase tracking-widest mb-4">
                                    {product.brand.name}
                                </Link>
                            )}
                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary uppercase leading-none mb-6">
                                {product.name}
                            </h1>

                            {/* Stock Status */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className={`w-3 h-3 rounded-full ${displayProduct.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                                <span className="font-sans font-medium text-muted-foreground">
                                    {displayProduct.inStock ? 'In Stock - Ready to Dispatch' : 'Check Availability'}
                                </span>
                            </div>
                        </div>

                        {/* Specs / Description Block */}
                        <div className="bg-secondary/20 p-8 border-l-4 border-primary">
                            <h3 className="font-heading font-bold text-xl text-primary mb-4 uppercase">Description</h3>
                            <div
                                className="prose prose-slate max-w-none text-muted-foreground font-sans"
                                dangerouslySetInnerHTML={{ __html: product.description || '<p>No description provided.</p>' }}
                            />
                        </div>

                        {/* CTA Section - Handled by Client Component */}
                        <div className="pt-8 border-t border-border">
                            <ProductDetailClient product={displayProduct} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
