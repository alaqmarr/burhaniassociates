'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import EnquiryPopup from '@/components/EnquiryPopup'

interface ProductDetailClientProps {
    product: {
        name: string
        slug: string
        description: string | null
        imageUrl: string | null
        featured?: boolean
        inStock?: boolean
        brand: { id: string; name: string; slug: string } | null
        category: { id: string; name: string; slug: string } | null
    } | null
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
    const [showEnquiry, setShowEnquiry] = React.useState(false) // Explicit React.useState

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
                    <Link href="/products" className="text-[#f97316] hover:underline">Return to Products</Link>
                </div>
            </div>
        )
    }

    const whatsappMessage = encodeURIComponent(
        `Hi, I'm interested in ${product.name}. Please provide more details and pricing.`
    )
    const whatsappLink = `https://wa.me/918096776021?text=${whatsappMessage}`

    return (
        <>
            <div className="min-h-screen bg-[#f8fafc]">
                {/* Breadcrumb */}
                <div className="bg-white border-b">
                    <div className="container mx-auto px-4 lg:px-8 py-4">
                        <nav className="flex items-center gap-2 text-sm text-gray-500">
                            <Link href="/" className="hover:text-[#102a43] transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/products" className="hover:text-[#102a43] transition-colors">Products</Link>
                            <span>/</span>
                            {product.category && (
                                <>
                                    <Link href={`/products?category=${product.category.slug}`} className="hover:text-[#102a43] transition-colors">
                                        {product.category.name}
                                    </Link>
                                    <span>/</span>
                                </>
                            )}
                            <span className="text-gray-900 font-medium">{product.name}</span>
                        </nav>
                    </div>
                </div>

                {/* Product Details */}
                <section className="py-8 lg:py-12">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                            <div className="grid lg:grid-cols-2">
                                {/* Product Image */}
                                <div className="relative h-96 lg:h-auto bg-gradient-to-br from-gray-50 to-gray-100">
                                    {product.imageUrl ? (
                                        <Image
                                            src={product.imageUrl}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#102a43] to-[#243b53] flex items-center justify-center opacity-20">
                                                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Product Info */}
                                <div className="p-8 lg:p-12">
                                    {/* Brand & Category */}
                                    <div className="flex items-center gap-3 mb-4">
                                        {product.brand && (
                                            <span className="text-sm font-semibold text-[#102a43] bg-[#102a43]/5 px-3 py-1.5 rounded-lg">
                                                {product.brand.name}
                                            </span>
                                        )}
                                        {product.category && (
                                            <span className="text-sm text-gray-500">
                                                {product.category.name}
                                            </span>
                                        )}
                                    </div>

                                    {/* Product Name */}
                                    <h1 className="text-display-md text-gray-900 mb-4">
                                        {product.name}
                                    </h1>

                                    {/* Description */}
                                    {product.description && (
                                        <div className="mb-8">
                                            <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
                                            <div
                                                className="text-body leading-relaxed prose prose-sm max-w-none text-gray-600"
                                                dangerouslySetInnerHTML={{ __html: product.description }}
                                            />
                                        </div>
                                    )}

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                        <button
                                            onClick={() => setShowEnquiry(true)}
                                            className="btn btn-accent flex-1 justify-center py-4"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                            Enquire Now
                                        </button>
                                        <a
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn flex-1 justify-center py-4 bg-[#25D366] text-white hover:bg-[#20ba5a]"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            Enquire on WhatsApp
                                        </a>
                                    </div>

                                    {/* Quick Info */}
                                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Genuine Products
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Best Price Guarantee
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Fast Delivery
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <EnquiryPopup
                isOpen={showEnquiry}
                onClose={() => setShowEnquiry(false)}
                productName={product.name}
            />
        </>
    )
}
