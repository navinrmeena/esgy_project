'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { featureddata } from '@/app/types/featureddata'
import FeaturedSkeleton from '../../Skeleton/Featured'

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        padding: '28px',
        borderRadius: '20px',
      }}
      onClick={onClick}
    />
  )
}
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  speed: 500,
  nextArrow: (
    <SampleNextArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  prevArrow: (
    <SamplePrevArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const Featured = () => {
  const [featured, setFeatured] = useState<featureddata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFeatured(data.FeaturedData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="relative bg-deepSlate dark:bg-darkmode  after:absolute after:w-1/4 after:h-1/4 after:bg-[url('/images/wework/vector.svg')]  after:top-72 after:right-0 after:bg-no-repeat">
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <div className='text-center overflow-hidden'>
          <h3 className='my-5'>Featured works.</h3>
        </div>

        <Slider {...settings}>
          {loading
            ? Array.from({ length: 2 }).map((_, index) => (
                <FeaturedSkeleton key={index} />
              ))
            : featured.map((items, i) => (
                <div key={i}>
                  <div className='bg-transparent m-3 rounded-3xl transition-transform hover:scale-[1.02] duration-300'>
                    {items.link ? (
                      <a href={items.link} target="_blank" rel="noopener noreferrer" className="block relative group">
                        <Image
                          src={items.imgSrc}
                          alt={items.heading}
                          width={636}
                          height={620}
                          className='rounded-2xl w-full object-cover'
                        />
                        <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white font-semibold flex items-center gap-2">
                            View Project
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </span>
                        </div>
                        <div>
                          <h4 className='max-w-sm font-bold text-center sm:text-start my-6 text-black hover:text-primary transition-colors'>
                            {items.heading}
                          </h4>
                        </div>
                      </a>
                    ) : (
                      <>
                        <Image
                          src={items.imgSrc}
                          alt={items.heading}
                          width={636}
                          height={620}
                          className='rounded-2xl w-full object-cover'
                        />
                        <div>
                          <h4 className='max-w-sm font-bold text-center sm:text-start my-6 text-black'>
                            {items.heading}
                          </h4>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}
export default Featured
