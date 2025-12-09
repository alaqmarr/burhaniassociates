'use client'

import React from 'react'
import Link from 'next/link'

interface CategoryCardProps {
    name: string
    count: number
    slug?: string
}

export default function CategoryCard({ name, count, slug }: CategoryCardProps) {
    const linkSlug = slug || name.toLowerCase().replace(/\s+/g, '-')

    return (
        <Link
            href={`/products?category=${encodeURIComponent(linkSlug)}`}
            className="group flex flex-col items-center justify-center p-8 bg-card border border-border hover:border-accent transition-all duration-300 relative overflow-hidden"
        >
            {/* Decorative Corner Accent */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-secondary -translate-y-4 translate-x-4 rotate-45 group-hover:bg-accent group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />

            <div className="w-16 h-16 mb-6 rounded-none bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="text-3xl font-heading font-bold">{name.charAt(0)}</span>
            </div>

            <h3 className="text-xl font-heading font-bold text-primary group-hover:text-accent transition-colors text-center uppercase tracking-wide">
                {name}
            </h3>

            <span className="text-sm font-sans text-muted-foreground mt-2 border-t border-border pt-2 w-12 text-center group-hover:border-accent transition-colors">
                {count} Items
            </span>
        </Link>
    )
}
