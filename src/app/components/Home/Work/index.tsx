'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { workdata } from '@/app/types/workdata'
import WorkSkeleton from '../../Skeleton/Work'

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
}

const Work = () => {
  // fetch work data
  const [work, setWork] = useState<workdata[]>([])
  const [loading, setLoding] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setWork(data.WorkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoding(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section
      id='Work'
      className="relative dark:bg-darkmode py-4 bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')] before:bg-no-repeat before:bg-center after:absolute after:w-1/3 after:h-1/3 after:bg-[url('/images/wework/vector.svg')] after:bg-no-repeat after:top-28 after:-right-12 after:-z-10">
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center overflow-hidden'>
          <h3 className='text-black my-5'>
            Our Recent Work
          </h3>
        </div>
      </div>

      <Slider {...settings}>
        {loading
          ? Array.from({ length: 5 }).map((_, i) => <WorkSkeleton key={i} />)
          : work.map((items, i) => (
              <div key={i} className='px-2'>
                {items.link ? (
                  <a href={items.link} target="_blank" rel="noopener noreferrer" className='block bg-white dark:bg-darkHeroBg m-3 my-10 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl overflow-hidden group cursor-pointer'>
                    <div className='relative w-full aspect-square overflow-hidden'>
                      <Image
                        src={items.imgSrc}
                        alt={items.name}
                        fill
                        className='object-cover object-top group-hover:scale-105 transition-transform duration-500'
                      />
                    </div>
                    <div className='py-6 px-4'>
                      <h6 className='text-xl text-black dark:text-white font-bold group-hover:text-primary transition-colors'>
                        {items.name}
                      </h6>
                      <p className='text-base dark:text-white font-normal pt-2 pb-1'>
                        {items.profession}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className='bg-white dark:bg-darkHeroBg m-3 my-10 text-center shadow-xl rounded-3xl overflow-hidden'>
                    <div className='relative w-full aspect-square'>
                      <Image
                        src={items.imgSrc}
                        alt={items.name}
                        fill
                        className='object-cover object-top'
                      />
                    </div>
                    <div className='py-6 px-4'>
                      <h6 className='text-xl text-black dark:text-white font-bold'>
                        {items.name}
                      </h6>
                      <p className='text-base dark:text-white font-normal pt-2 pb-1'>
                        {items.profession}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
      </Slider>
    </section>
  )
}
export default Work
