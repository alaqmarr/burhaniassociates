
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'About Us | Burhani Associates',
    description: 'Since 2003, Burhani Associates has been a trusted supplier of industrial components in Hyderabad. Authorized dealers for Clamptek, Swiftin, and more.',
    openGraph: {
        title: 'About Burhani Associates | Industrial Legacy',
        description: 'Helping industries in Hyderabad since 2003 with quality engineering components.',
        url: 'https://burhaniassociates.com/about',
    }
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header / Hero - Industrial Style */}
            <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
                {/* Abstract Pattern overlay */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <span className="inline-block py-1 px-3 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest mb-6">
                        Established 2000
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-heading font-bold uppercase tracking-wide leading-tight mb-6">
                        Industrial <br />
                        <span className="text-gray-400">Excellence</span>
                    </h1>
                    <p className="text-xl text-secondary/80 font-sans max-w-3xl font-light">
                        Authorized Dealers for Clamptek & Swiftin. Providing precision engineering components to Telangana's manufacturing sector for over two decades.
                    </p>
                </div>
            </div>

            {/* Main Content - Company Profile */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-primary mb-6 uppercase">Our Company</h2>
                            <div className="space-y-6 text-muted-foreground font-sans text-lg leading-relaxed">
                                <p>
                                    <strong className="text-primary">Burhani Associates</strong> is a premier industrial supply firm located in the heart of Secunderabad's engineering hub, Ranigunj.
                                </p>
                                <p>
                                    Since our inception, we have focused on a single mission: to provide high-quality, durable, and precision-engineered components to the growing manufacturing industry in Hyderabad and surrounding regions.
                                </p>
                                <p>
                                    We understand that in manufacturing, every component matters. A single toggle clamp or vibration mount impacts the efficiency and safety of your production line. That is why we only stock genuine products from world-renowned manufacturers.
                                </p>
                            </div>

                            <div className="mt-10 pt-10 border-t border-border grid grid-cols-2 gap-8">
                                <div>
                                    <span className="block text-4xl font-heading font-bold text-accent mb-1">2000</span>
                                    <span className="text-sm uppercase tracking-wider text-muted-foreground">Year Established</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-heading font-bold text-accent mb-1">100%</span>
                                    <span className="text-sm uppercase tracking-wider text-muted-foreground">Genuine Parts</span>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / Info Box */}
                        <div className="bg-secondary/30 p-8 border border-border">
                            <h3 className="text-2xl font-heading font-bold text-primary mb-6 uppercase">Authorized Distributorship</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-border flex items-center justify-center shrink-0">
                                        <span className="text-2xl font-bold text-primary">C</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-primary uppercase">Clamptek</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Global leader in toggle clamping systems. We stock the full range of vertical, horizontal, and push-pull clamps.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-border flex items-center justify-center shrink-0">
                                        <span className="text-2xl font-bold text-primary">S</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-primary uppercase">Swiftin</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Premium vibration isolation mounts and leveling pads for heavy machinery.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white border border-border flex items-center justify-center shrink-0">
                                        <span className="text-2xl font-bold text-primary">J</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-primary uppercase">Standard Parts</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Handwheels, revolving handles, hinges, and locks for control panels and industrial fabrication.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Overview Strip */}
            <section className="py-20 bg-secondary border-t border-b border-border">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-primary uppercase mb-2">Our Product Range</h2>
                            <p className="text-muted-foreground">Comprehensive inventory for machine builders.</p>
                        </div>
                        <Link href="/products" className="btn btn-outline mt-6 lg:mt-0">View Full Catalog</Link>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {['Toggle Clamps', 'Vibration Mounts', 'Handwheels', 'Panel Accessories'].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 border border-border hover:border-accent transition-colors group">
                                <h3 className="text-lg font-bold text-primary group-hover:text-accent uppercase mb-2">{item}</h3>
                                <div className="w-8 h-1 bg-secondary group-hover:bg-accent transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
