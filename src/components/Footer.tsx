import Link from 'next/link'

const footerNavigation = {
    products: [
        { name: 'Toggle Clamps', href: '/products?search=toggle' },
        { name: 'Control Panel Accessories', href: '/products?search=control' },
        { name: 'Handwheels', href: '/products?search=handwheels' },
        { name: 'Vibration Mounts', href: '/products?search=mounts' },
        { name: 'Cotton Pins', href: '/products?search=pins' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Brands', href: '/brands' },
        { name: 'Contact', href: '/contact' },
    ],
    support: [
        { name: 'Get a Quote', href: '/contact' },
        { name: 'Product Support', href: '/contact' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center font-bold text-xl text-white">
                                B
                            </div>
                            <div>
                                <span className="font-bold text-xl tracking-tight">
                                    Burhani Associates
                                </span>
                                <span className="block text-sm text-gray-400 -mt-0.5">
                                    Industrial Products Specialist
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                            Dedicatedly engaged in dealing with a wide range of industrial products catering to different industries.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    4-4-208 Lala Temple Street,<br />
                                    Ranigunj, Secunderabad - 500003
                                </div>
                            </div>

                            <a
                                href="tel:040-2780-8786"
                                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                            >
                                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                040-2780-8786 / 040-2771-2194
                            </a>

                            <a
                                href="tel:+918096776021"
                                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                            >
                                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                +91 80967 76021
                            </a>

                            <a
                                href="mailto:burhaniassociates23@gmail.com"
                                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                            >
                                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                burhaniassociates23@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                            Products
                        </h3>
                        <ul className="space-y-3">
                            {footerNavigation.products.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerNavigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            {footerNavigation.support.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Burhani Associates. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
