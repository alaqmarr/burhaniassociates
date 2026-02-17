import Link from 'next/link'

export default function HeroCarousel() {
    return (
        <div className="relative bg-primary overflow-hidden border-b border-border">
            {/* Clean, Professional Background - Subtle Gradient only */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary/90" />

            <div className="container mx-auto px-4 lg:px-8 relative z-20 py-24 lg:py-32">
                <div className="max-w-4xl">
                    {/* Badge - Straight, Corporate */}
                    <div className="inline-block px-4 py-2 bg-accent/90 text-white font-bold text-sm tracking-widest mb-6 uppercase">
                        Authorized Dealer Since 2000
                    </div>

                    <h1 className="text-5xl lg:text-7xl text-white font-bold mb-6 leading-tight font-heading uppercase">
                        Industrial <br />
                        <span className="text-gray-200">Excellence</span> <br />
                        & Precision
                    </h1>

                    <p className="text-xl text-gray-100 mb-10 max-w-2xl font-light font-sans tracking-wide leading-relaxed">
                        Your comprehensive source for Clamptek Toggle Clamps, Swiftin Mounts, and Premium Control Panel Accessories in Hyderabad.
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
            </div>
        </div>
    )
}
