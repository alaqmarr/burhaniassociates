'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import ProductCard from '@/components/ProductCard'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

interface FeaturedCarouselProps {
    products: any[]
}

export default function FeaturedCarousel({ products }: FeaturedCarouselProps) {
    if (!products || products.length === 0) return null;

    return (
        <div className="featured-carousel-wrapper relative group">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                className="pb-12 px-4"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="h-auto">
                        <div className="h-full py-2">
                            <ProductCard
                                id={product.id}
                                name={product.name}
                                slug={product.id}
                                description={product.description}
                                images={product.images}
                                brandName={product.brand?.name}
                                categoryName={product.category?.name}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white border border-border shadow-md rounded-full text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white -ml-4 lg:-ml-12 disabled:opacity-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white border border-border shadow-md rounded-full text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white -mr-4 lg:-mr-12 disabled:opacity-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    )
}
