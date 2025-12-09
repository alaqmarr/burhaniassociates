import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
    title: 'Contact Us | Burhani Associates',
    description: 'Visit our Ranigunj showroom or contact us for industrial toggle clamps, handwheels, and vibration mounts. Phone: +91 80967 76021.',
    openGraph: {
        title: 'Contact Burhani Associates | Hyderabad',
        description: 'Get a quote for industrial components. Authorized Clamptek & Swiftin Dealer.',
        url: 'https://burhaniassociates.com/contact',
    },
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header / Hero */}
            <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest mb-6">
                        Get In Touch
                    </span>
                    <h1 className="text-5xl font-heading font-bold uppercase tracking-wide leading-tight mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-secondary/80 font-sans max-w-2xl mx-auto font-light">
                        Visit our showroom in Ranigunj or reach out via phone/email for quotes and technical support.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Information - Industrial Cards */}
                        <div className="space-y-8">
                            <div className="bg-secondary/20 border-l-4 border-accent p-8">
                                <h3 className="text-2xl font-heading font-bold text-primary mb-6 uppercase">Head Office</h3>
                                <div className="space-y-4 font-sans text-muted-foreground">
                                    <p className="flex items-start gap-4">
                                        <svg className="w-6 h-6 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>
                                            <strong className="block text-primary uppercase text-sm tracking-wider mb-1">Visit Us</strong>
                                            4-4-208 Lala Temple Street,<br />
                                            Ranigunj, Secunderabad,<br />
                                            Telangana - 500003
                                        </span>
                                    </p>
                                    <p className="flex items-start gap-4">
                                        <svg className="w-6 h-6 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>
                                            <strong className="block text-primary uppercase text-sm tracking-wider mb-1">Call Us</strong>
                                            +91 80967 76021<br />
                                            040-2780-8786 / 040-2771-2194
                                        </span>
                                    </p>
                                    <p className="flex items-start gap-4">
                                        <svg className="w-6 h-6 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span>
                                            <strong className="block text-primary uppercase text-sm tracking-wider mb-1">Email Us</strong>
                                            burhaniassociates23@gmail.com
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-primary text-white p-8">
                                <h3 className="text-xl font-heading font-bold mb-4 uppercase">Business Hours</h3>
                                <div className="space-y-2 font-sans text-white/80">
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Monday - Saturday</span>
                                        <span>9:30 AM - 7:30 PM</span>
                                    </div>
                                    <div className="flex justify-between pt-2 text-white/50">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Container */}
                        <div className="bg-white border border-border p-8 lg:p-10 shadow-sm">
                            <div className="mb-8">
                                <h2 className="text-3xl font-heading font-bold text-primary uppercase mb-2">Send a Message</h2>
                                <p className="text-muted-foreground font-sans">
                                    Need a quote or have a technical question? Fill out the form below.
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Width Map */}
            <section className="h-[500px] w-full bg-secondary border-t border-b border-border relative grayscale">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.495034685328!2d78.4839!3d17.4363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a2442438ea3%3A0x6e78880c54178385!2sRanigunj%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Burhani Associates Location"
                />
            </section>
        </div>
    )
}
