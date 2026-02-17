import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'

// We don't have a specific brand detail page design in the plan, 
// usually clicking a brand goes to /products?brand=slug.
// If the user tries to visit /brands/slug directly, lets redirect them to the filtered products page.

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const brands = await prisma.brand.findMany({ select: { name: true } })
    return brands.map((brand) => ({
        slug: brand.name.toLowerCase().replace(/\s+/g, '-'),
    }))
}

export default async function BrandDetailPage({ params }: Props) {
    const { slug } = await params
    redirect(`/products?brand=${slug}`)
}
