import Link from 'next/link'

export default function HeroCarousel() {
    return (
        <div className="relative min-h-[700px] flex items-center bg-primary overflow-hidden">
            {/* Geometric Background Pattern - Technical Blue */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32" />

            <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-20">
                <div className="max-w-4xl">
                    <div className="inline-block px-4 py-2 bg-accent text-white font-bold text-sm tracking-widest mb-6 uppercase skew-x-[-10deg]">
                        <span className="skew-x-[10deg] inline-block">Authorized Dealer Since 2000</span>
                    </div>

                    <h1 className="text-5xl lg:text-8xl text-white font-bold mb-6 leading-[0.9] font-heading uppercase">
                        Industrial <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Excellence</span> <br />
                        & Precision
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl font-light font-sans tracking-wide">
                        Your comprehensive source for Clamptek Toggle Clamps, Swiftin Mounts, and Premium Control Panel Accessories in Hyderabad.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                            href="/products"
                            className="btn bg-accent hover:bg-red-700 text-white border-none min-w-[200px]"
                        >
                            View Catalog
                        </Link>
                        <Link
                            href="/contact"
                            className="btn border-2 border-white text-white hover:bg-white hover:text-primary min-w-[200px]"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Gear Icon or similar graphic placed absolutely */}
            <div className="absolute -bottom-20 -right-20 opacity-10 animate-spin-slow" style={{ animationDuration: '60s' }}>
                <svg width="600" height="600" viewBox="0 0 24 24" fill="white">
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}
