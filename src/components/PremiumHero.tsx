'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

interface PremiumHeroProps {
    heroImages?: { url: string; alt: string }[]
}

export default function PremiumHero({ heroImages }: PremiumHeroProps) {
    if (!heroImages || heroImages.length === 0) return null;

    return (
        <div className="relative w-full h-[calc(100vh-80px)] min-h-[600px] overflow-hidden bg-gray-50 flex items-center border-b border-border">
            {/* Background Texture - Clean Minimalist Grid */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
                 style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            
            {/* Architectural structural lines */}
            <div className="absolute top-0 left-12 w-px h-full bg-border z-0 hidden lg:block" />
            <div className="absolute top-0 right-12 w-px h-full bg-border z-0 hidden lg:block" />

            {/* Massive watermark text - Crisp and sharp */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-heading font-black text-gray-200/50 whitespace-nowrap pointer-events-none select-none z-0 tracking-tighter">
                PRECISION
            </div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10 w-full h-full flex items-center">
                <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    loop={true}
                    speed={1500}
                    pagination={{ clickable: true, dynamicBullets: true, el: '.custom-pagination' }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="w-full h-[85%]"
                >
                    {heroImages.map((img, idx) => (
                        <SwiperSlide key={idx} className="h-full">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 h-full">
                                {/* Left Content */}
                                <div className="lg:w-1/2 flex flex-col justify-center space-y-8 z-10">
                                    <div className="inline-flex">
                                        <span className="px-4 py-1.5 bg-accent text-white text-xs font-bold tracking-[0.2em] uppercase rounded-sm border border-transparent">
                                            New Arrival
                                        </span>
                                    </div>
                                    
                                    <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-black text-slate-900 uppercase leading-[0.95] tracking-tight">
                                        INDUSTRIAL<br/>
                                        <span className="text-primary font-light">EXCELLENCE</span>
                                    </h1>
                                    
                                    <p className="text-lg md:text-xl text-slate-600 font-sans max-w-lg leading-relaxed border-l-4 border-accent pl-6">
                                        Experience uncompromising quality with our premium selection of {img.alt} and critical mechanical components.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-5 pt-4">
                                        <Link href="/products" className="group relative px-10 py-4 bg-primary text-white font-bold uppercase tracking-wider text-sm transition-all hover:bg-slate-900 flex justify-center text-center">
                                            Explore Catalog
                                        </Link>
                                        <Link href="/contact" className="px-10 py-4 border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-wider text-sm hover:bg-slate-100 transition-colors flex justify-center text-center">
                                            Get a Quote
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Image Showcase */}
                                <div className="lg:w-1/2 flex justify-center lg:justify-end items-center relative h-[350px] sm:h-[450px] lg:h-full w-full">
                                    
                                    <div className="relative w-full h-[90%] max-w-[500px] lg:max-w-none bg-white rounded-none border-2 border-border shadow-[20px_20px_0px_0px_rgba(217,26,26,0.1)] flex items-center justify-center overflow-hidden group">
                                        {/* Crosshair accents inside the white box */}
                                        <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-300 pointer-events-none" />
                                        <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-300 pointer-events-none" />
                                        
                                        <Image
                                            src={img.url}
                                            alt={img.alt}
                                            fill
                                            className="object-contain p-12 lg:p-20 z-10 transition-transform duration-[15000ms] ease-out group-hover:scale-110"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            priority={idx === 0}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-pagination absolute bottom-0 left-0 z-20 flex gap-2"></div>
            </div>
            
            <style jsx global>{`
                .custom-pagination {
                    display: flex;
                    align-items: center;
                    height: 24px;
                }
                .custom-pagination .swiper-pagination-bullet { 
                    background: #cbd5e1; 
                    width: 12px; 
                    height: 4px; 
                    border-radius: 0;
                    transition: all 0.3s ease; 
                    cursor: pointer;
                    display: inline-block;
                    opacity: 1;
                }
                .custom-pagination .swiper-pagination-bullet-active { 
                    background: #d91a1a; 
                    width: 48px; 
                }
            `}</style>
        </div>
    )
}
