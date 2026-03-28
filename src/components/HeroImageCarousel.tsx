'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'

interface HeroImageCarouselProps {
    images: { url: string; alt: string }[]
}

export default function HeroImageCarousel({ images }: HeroImageCarouselProps) {
    if (!images || images.length === 0) return null

    return (
        <div className="relative w-full h-full min-h-[320px] lg:min-h-[420px]">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                speed={800}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                className="w-full h-full absolute inset-0"
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={idx} className="relative bg-white">
                        <div className="relative w-full h-full min-h-[320px] lg:min-h-[420px] flex items-center justify-center">
                            <Image
                                src={img.url}
                                alt={img.alt}
                                fill
                                className="object-contain p-8 md:p-12 hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={idx === 0}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Subtle frame accent */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gray-100 z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/40 z-10 pointer-events-none" />
        </div>
    )
}
