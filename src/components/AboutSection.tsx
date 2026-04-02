import React from 'react'
import Link from 'next/link'
import prisma from '@/lib/prisma'

export default async function AboutSection() {
    let brandNamesStr = 'Various Top Brands';
    try {
        const brands = await prisma.brand.findMany({
            select: { name: true },
            orderBy: { name: 'asc' }
        });
        if (brands.length > 0) {
            brandNamesStr = brands.map(b => b.name).join(', ');
        }
    } catch {
        // Fallback
    }

    return (
        <section className="relative py-32 bg-white overflow-hidden border-b border-border">
            {/* Massive Background Typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-heading font-black text-gray-50/80 whitespace-nowrap pointer-events-none select-none z-0">
                SINCE 2000
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    {/* Visual / Editorial Side */}
                    <div className="lg:w-[45%] w-full relative">
                        {/* Abstract offset framing */}
                        <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform -rotate-3 z-0"></div>
                        <div className="absolute -inset-4 bg-accent/5 rounded-2xl transform rotate-2 z-0"></div>
                        
                        <div className="bg-primary p-10 md:p-14 rounded-xl shadow-2xl relative z-10 flex flex-col justify-center overflow-hidden h-full">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent to-transparent opacity-20 rounded-bl-full"></div>
                            
                            <h3 className="text-4xl md:text-5xl font-heading font-black text-white mb-2 tracking-tight">
                                BURHANI<br/><span className="text-accent">ASSOCIATES</span>
                            </h3>
                            <p className="text-sm font-sans text-gray-400 uppercase tracking-[0.3em] font-bold mb-12">
                                Trusted Industrial Partner
                            </p>

                            <div className="space-y-6">
                                <div className="border-l-2 border-accent/50 pl-4">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Location</span>
                                    <span className="text-white font-heading font-bold text-lg tracking-wide">Secunderabad, Telangana</span>
                                </div>
                                <div className="border-l-2 border-accent/50 pl-4">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Core Brands</span>
                                    <span className="text-white font-heading font-bold text-lg tracking-wide">{brandNamesStr}</span>
                                </div>
                                <div className="border-l-2 border-accent/50 pl-4">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Scale</span>
                                    <span className="text-white font-heading font-bold text-lg tracking-wide">1000+ Precision SKUs</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-[55%] space-y-8">
                        <div>
                            <span className="inline-flex py-1 px-3 bg-secondary text-primary font-bold tracking-widest uppercase text-xs mb-4 rounded-sm border border-border">Our Genesis</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary leading-[1.1] uppercase tracking-tight mb-6">
                                The Backbone of <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Modern Industry</span>
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg lg:text-xl font-light">
                                For over two decades, Burhani Associates has been the definitive source for industrial machine components in Hyderabad. We don't just supply parts—we deliver the precision and durability that engineering units rely on to build the future.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                            {[
                                'Authorized Master Dealer', 
                                'Genuine Clamptek & Swiftin', 
                                'Rapid Fulfillment Network', 
                                'Expert Technical Support'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-8 border-t border-border mt-8">
                            <Link href="/about" className="group relative px-8 py-3 bg-primary text-white font-bold uppercase tracking-wider text-sm overflow-hidden rounded-sm transition-all hover:shadow-lg">
                                <span className="relative z-10">Read Our Story</span>
                                <div className="absolute inset-0 h-full w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full z-0"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
