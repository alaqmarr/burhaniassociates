'use client'

import React from 'react'
import Link from 'next/link'

interface BrandCardProps {
    name: string
    count: number
}

export default function BrandCard({ name, count }: BrandCardProps) {
    const slug = name.toLowerCase().replace(/\s+/g, '-')

    return (
        <Link
            href={`/products?brand=${encodeURIComponent(slug)}`}
            className="group flex items-center gap-6 p-6 bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
        >
            <div className="w-16 h-16 bg-secondary flex items-center justify-center font-heading font-bold text-xl text-muted-foreground group-hover:bg-primary group-hover:text-white transition-colors border border-border">
                {name.substring(0, 2).toUpperCase()}
            </div>
            <div>
                <h3 className="text-lg font-heading font-bold text-primary group-hover:text-accent transition-colors uppercase tracking-wide">
                    {name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="h-0.5 w-4 bg-accent/50 group-hover:bg-accent transition-colors" />
                    <span className="text-xs font-sans text-muted-foreground font-medium">
                        {count} Products
                    </span>
                </div>
            </div>
        </Link>
    )
}
