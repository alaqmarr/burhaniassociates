import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const categories = await prisma.category.findMany({ select: { name: true } })
    return categories.map((cat) => ({
        slug: cat.name.toLowerCase().replace(/\s+/g, '-'),
    }))
}

export default async function CategoryDetailPage({ params }: Props) {
    const { slug } = await params
    redirect(`/products?category=${slug}`)
}
