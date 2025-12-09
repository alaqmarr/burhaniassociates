'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import EnquiryPopup from './EnquiryPopup'

interface ProductCardProps {
    id: string
    name: string
    slug: string
    description: string | null
    imageUrl?: string | null
    images?: { url: string }[]
    brandName?: string | null
    categoryName?: string | null
    featured?: boolean
}

export default function ProductCard({
    name,
    slug,
    imageUrl,
    images,
    brandName,
    categoryName,
    featured,
}: ProductCardProps) {
    const [showEnquiry, setShowEnquiry] = React.useState(false)

    // Resolve image URL
    const displayImage = images && images.length > 0 ? images[0].url : (imageUrl || null)

    const whatsappMessage = encodeURIComponent(
        `Hi, I'm interested in ${name}. Please provide more details and pricing.`
    )
    const whatsappLink = `https://wa.me/918096776021?text=${whatsappMessage}`

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="group bg-card border border-border hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
            >
                {/* Image Area - Sharp and Technical */}
                <Link href={`/products/${slug}`} className="block relative aspect-square overflow-hidden bg-white border-b border-border">
                    {displayImage ? (
                        <Image
                            src={displayImage}
                            alt={name}
                            fill
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
                            <svg className="w-12 h-12 text-muted-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    )}

                    {/* Brand Tag Overlay */}
                    {brandName && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 uppercase tracking-wider font-heading">
                            {brandName}
                        </div>
                    )}

                    {featured && (
                        <div className="absolute top-0 left-0 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 uppercase tracking-wider font-heading">
                            Featured
                        </div>
                    )}
                </Link>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                    {categoryName && (
                        <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1 font-sans">
                            {categoryName}
                        </div>
                    )}

                    <Link href={`/products/${slug}`} className="mb-4 block">
                        <h3 className="text-lg font-heading font-bold text-primary group-hover:text-accent transition-colors line-clamp-2 leading-tight uppercase">
                            {name}
                        </h3>
                    </Link>

                    <div className="mt-auto grid grid-cols-2 gap-2">
                        <button
                            onClick={() => setShowEnquiry(true)}
                            className="px-3 py-2 border border-primary text-primary hover:bg-primary hover:text-white text-xs font-bold uppercase tracking-wider transition-colors text-center"
                        >
                            Enquire
                        </button>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                        >
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </motion.div>

            <EnquiryPopup
                isOpen={showEnquiry}
                onClose={() => setShowEnquiry(false)}
                productName={name}
            />
        </>
    )
}
