import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
    title: 'Contact Us | Burhani Associates Hyderabad',
    description: 'Get in touch with Burhani Associates in Secunderabad for industrial products like toggle clamps, control panel accessories, and more.',
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#f8fafc]">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#102a43] via-[#1e3a5f] to-[#243b53] pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="container text-center text-white">
                    <span className="section-label !bg-white/10 !text-white mb-4">
                        Get In Touch
                    </span>
                    <h1 className="text-display-lg !text-white mb-4">Contact Burhani Associates</h1>
                    <p className="text-body-lg !text-white/70 max-w-2xl mx-auto">
                        Your partner for quality industrial products in Hyderabad/Secunderabad.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section -mt-10">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Contact Info Cards */}
                        <div className="space-y-6">
                            {/* Address Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <div className="w-12 h-12 rounded-xl bg-[#102a43]/5 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-[#102a43]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Office Address</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    4-4-208 Lala Temple Street,<br />
                                    Ranigunj, Secunderabad,<br />
                                    Telangana - 500003
                                </p>
                            </div>

                            {/* Phone Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                                <div className="space-y-1">
                                    <a href="tel:040-2780-8786" className="block text-sm text-gray-600 hover:text-[#102a43] transition-colors">
                                        040-2780-8786 (Landline)
                                    </a>
                                    <a href="tel:040-2771-2194" className="block text-sm text-gray-600 hover:text-[#102a43] transition-colors">
                                        040-2771-2194 (Landline)
                                    </a>
                                    <a href="tel:+918096776021" className="block text-sm text-gray-600 hover:text-[#102a43] transition-colors font-medium">
                                        +91 80967 76021 (Mobile)
                                    </a>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                                <div className="space-y-1">
                                    <a href="mailto:burhaniassociates23@gmail.com" className="block text-sm text-gray-600 hover:text-[#102a43] transition-colors break-words">
                                        burhaniassociates23@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Hours Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                                <p className="text-sm text-gray-600">
                                    Monday - Saturday<br />
                                    9:30 AM - 7:30 PM
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
                                <div className="mb-8">
                                    <h2 className="text-display-md mb-2">Send us a Message</h2>
                                    <p className="text-body">
                                        Fill out the form below and we&apos;ll get back to you shortly.
                                    </p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="section bg-white pt-0">
                <div className="container">
                    <div className="rounded-2xl overflow-hidden shadow-lg h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.495034685328!2d78.4839!3d17.4363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a2442438ea3%3A0x6e78880c54178385!2sRanigunj%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
