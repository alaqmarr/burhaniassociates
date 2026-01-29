import React from 'react'
import Link from 'next/link'

export default function AboutSection() {
    return (
        <section className="py-20 bg-white border-y border-border relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual Side */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 bg-secondary p-8 border-l-4 border-primary shadow-xl">
                            <h3 className="text-6xl font-heading font-bold text-primary/10 absolute top-4 right-4 leading-none select-none">
                                SINCE<br />2000
                            </h3>
                            <div className="space-y-6 relative z-10">
                                <h2 className="text-3xl font-heading font-bold text-primary uppercase leading-tight">
                                    Engineering Excellence <br />
                                    <span className="text-accent">Delivered Precision</span>
                                </h2>
                                <p className="text-muted-foreground font-sans leading-relaxed">
                                    For over two decades, Burhani Associates has been the cornerstone of Hyderabad's industrial supply chain. We don't just supply parts; we provide the engineering backbone that keeps your machinery running.
                                </p>
                                <ul className="space-y-3 mt-4">
                                    {['Authorized Clamptek Dealer', 'Premium Vibration Mounts', 'Rapid Logistics Network'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700 uppercase tracking-wide">
                                            <span className="w-2 h-2 bg-accent rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-dashed border-gray-200 -z-10" />
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Who We Are</span>
                            <h2 className="section-title text-left mb-6">Your Trusted Industrial Partner</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Located in the heart of Ranigunj, Secunderabad, we specialize in high-quality industrial components. From heavy-duty toggle clamps to precision vibration mounts, our inventory is curated to meet the rigorous demands of modern manufacturing.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We pride ourselves on being the authorized dealers for global brands like <strong className="text-primary">Clamptek</strong> and <strong className="text-primary">Swiftin</strong>, ensuring you get only 100% genuine products with full manufacturer support.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-6 pt-4 border-t border-border/50">
                            <Link href="/about" className="btn btn-primary">
                                More About Us
                            </Link>
                            <Link href="/contact" className="btn btn-outline hover:bg-secondary hover:text-primary hover:border-primary">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
