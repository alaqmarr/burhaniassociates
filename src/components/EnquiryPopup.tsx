'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EnquiryPopupProps {
    isOpen: boolean
    onClose: () => void
    productName?: string
}

export default function EnquiryPopup({ isOpen, onClose, productName }: EnquiryPopupProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    subject: productName ? `Product Enquiry: ${productName}` : 'Product Enquiry',
                    message: productName
                        ? `Enquiry for: ${productName}\n\nCompany: ${formData.company || 'N/A'}\n\n${formData.message}`
                        : formData.message,
                }),
            })

            if (!res.ok) throw new Error('Failed')
            setStatus('success')
            setTimeout(() => {
                onClose()
                setStatus('idle')
                setFormData({ name: '', email: '', phone: '', company: '', message: '' })
            }, 2000)
        } catch {
            setStatus('error')
        }
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-white border border-border md:w-[500px] w-full max-w-lg shadow-xl"
                >
                    {/* Header */}
                    <div className="bg-primary p-6 flex items-start justify-between border-b border-primary-foreground/10">
                        <div>
                            <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wider">
                                Enquire Now
                            </h3>
                            {productName && (
                                <p className="text-sm text-white/80 mt-1 font-sans font-light border-l-2 border-accent pl-2">
                                    {productName}
                                </p>
                            )}
                        </div>
                        <button
                            onClick={onClose}
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {status === 'success' ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-4 border border-green-200">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-heading font-bold text-primary uppercase mb-2">Enquiry Sent Successfully</h4>
                                <p className="text-muted-foreground font-sans">We&apos;ll get back to you shortly regarding your requirements.</p>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 bg-secondary/10 border border-border focus:border-accent outline-none transition-colors"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 bg-secondary/10 border border-border focus:border-accent outline-none transition-colors"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 bg-secondary/10 border border-border focus:border-accent outline-none transition-colors"
                                        placeholder="Email Address"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-3 py-2 bg-secondary/10 border border-border focus:border-accent outline-none transition-colors resize-none"
                                        placeholder="Please detail your quantity and specification requirements..."
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className="p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
                                        Failed to submit. Please try contacting us directly: <span className="font-bold">040-2780-8786</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full btn btn-primary py-3 uppercase tracking-wider font-bold"
                                >
                                    {status === 'loading' ? 'Processing...' : 'Submit Enquiry'}
                                </button>
                            </>
                        )}
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
