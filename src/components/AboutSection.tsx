import React from 'react'
import Link from 'next/link'

export default function AboutSection() {
    return (
        <section className="py-20 bg-white border-y border-border">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Content Side */}
                    <div className="lg:w-1/2 space-y-6">
                        <div>
                            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Since 2000</span>
                            <h2 className="section-title text-left mb-6">Engineering Excellence & Precision</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                For over two decades, Burhani Associates has been the cornerstone of Hyderabad's industrial supply chain. We don't just supply parts; we provide the engineering backbone that keeps your machinery running.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {['Authorized Clamptek Dealer', 'Premium Vibration Mounts', 'Rapid Logistics Network', 'Expert Technical Support'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700 uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                            <Link href="/about" className="btn btn-primary">
                                Company Profile
                            </Link>
                            <Link href="/contact" className="btn btn-outline">
                                Contact Sales
                            </Link>
                        </div>
                    </div>

                    {/* Visual Side - Formal Tech Specs Look */}
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-secondary p-8 border border-border h-full flex flex-col justify-center relative overflow-hidden group hover:border-accent transition-colors duration-300">

                            <h3 className="text-3xl font-heading font-bold text-primary mb-2 relative z-10">
                                BURHANI ASSOCIATES
                            </h3>
                            <p className="text-sm font-sans text-muted-foreground uppercase tracking-wider mb-8 relative z-10">
                                Trusted Industrial Partner
                            </p>

                            <div className="space-y-4 relative z-10">
                                <div className="flex justify-between items-center border-b border-border pb-2">
                                    <span className="text-sm font-bold text-gray-500 uppercase">Established</span>
                                    <span className="text-primary font-heading font-bold">2000</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-border pb-2">
                                    <span className="text-sm font-bold text-gray-500 uppercase">Location</span>
                                    <span className="text-primary font-heading font-bold">Secunderabad, Telangana</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-border pb-2">
                                    <span className="text-sm font-bold text-gray-500 uppercase">Core Brands</span>
                                    <span className="text-primary font-heading font-bold">Clamptek, Swiftin, JGanter</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-border pb-2">
                                    <span className="text-sm font-bold text-gray-500 uppercase">Inventory</span>
                                    <span className="text-primary font-heading font-bold">1000+ SKUs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
