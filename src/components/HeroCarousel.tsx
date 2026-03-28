import Link from 'next/link'
import HeroImageCarousel from '@/components/HeroImageCarousel'

interface HeroCarouselProps {
    heroImages?: { url: string; alt: string }[]
}

export default function HeroCarousel({ heroImages }: HeroCarouselProps) {
    return (
        <div className="relative bg-primary overflow-hidden border-b border-border">
            {/* Clean, Professional Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary to-primary/85" />

            <div className="container mx-auto px-4 lg:px-8 relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-16 lg:py-24">
                    {/* Text Content — Left Side */}
                    <div className="lg:w-1/2 w-full">
                        {/* Badge */}
                        <div className="inline-block px-4 py-2 bg-accent/90 text-white font-bold text-sm tracking-widest mb-6 uppercase">
                            Authorized Industrial Dealer
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white font-bold mb-6 leading-tight font-heading uppercase">
                            Industrial <br />
                            <span className="text-gray-300">Excellence</span> <br />
                            & Precision
                        </h1>

                        <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-xl font-light font-sans tracking-wide leading-relaxed">
                            Your comprehensive source for Clamptek Toggle Clamps, Anti-Vibration Mounts, and Premium Control Panel Accessories in Hyderabad.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/products"
                                className="btn bg-white text-primary hover:bg-gray-100 min-w-[200px] font-bold"
                            >
                                View Catalog
                            </Link>
                            <Link
                                href="/contact"
                                className="btn border-2 border-white/30 text-white hover:bg-white/10 min-w-[200px] font-bold"
                            >
                                Request Quote
                            </Link>
                        </div>
                    </div>

                    {/* Image Carousel — Right Side */}
                    {heroImages && heroImages.length > 0 && (
                        <div className="lg:w-1/2 w-full relative">
                            {/* White container for images to blend product backgrounds */}
                            <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl border border-gray-100 aspect-square md:aspect-auto">
                                <HeroImageCarousel images={heroImages} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
