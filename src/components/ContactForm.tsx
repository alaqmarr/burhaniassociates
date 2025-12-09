'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setErrorMessage('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (!res.ok) {
                throw new Error('Failed to send message')
            }

            setStatus('success')
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            })
        } catch {
            setStatus('error')
            setErrorMessage('Failed to send message. Please try again.')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary/10 border border-border focus:border-accent outline-none transition-colors"
                        placeholder="Ex: John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Address *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary/10 border border-border focus:border-accent outline-none transition-colors"
                        placeholder="Ex: john@company.com"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary/10 border border-border focus:border-accent outline-none transition-colors"
                        placeholder="Ex: +91 98765 43210"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Subject *</label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary/10 border border-border focus:border-accent outline-none transition-colors appearance-none"
                    >
                        <option value="">Select a topic</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Product Quote">Product Quote</option>
                        <option value="Bulk Order">Bulk Order</option>
                        <option value="After Sales Support">After Sales Support</option>
                        <option value="Partnership">Partnership</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message *</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/10 border border-border focus:border-accent outline-none transition-colors"
                    placeholder="Tell us about your requirements..."
                />
            </div>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed border border-transparent"
            >
                {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                )}
            </button>

            {status === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border-l-4 border-green-500 text-green-800"
                >
                    <h3 className="font-bold uppercase text-sm mb-1">Message Sent</h3>
                    <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
            )}

            {status === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border-l-4 border-red-500 text-red-800"
                >
                    <h3 className="font-bold uppercase text-sm mb-1">Error</h3>
                    <p className="text-sm">{errorMessage}</p>
                </motion.div>
            )}
        </form>
    )
}
