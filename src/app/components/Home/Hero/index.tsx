'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useBookCall } from '@/app/context/BookCallContext'

const Hero = () => {
  const { openModal } = useBookCall()

  const leftAnimation = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  const rightAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section className='relative overflow-hidden z-1'>
      <div className='container mx-auto pt-24 max-w-7xl px-4'>
        <div className='grid grid-cols-12 justify-center items-center'>
          <div className='col-span-12 xl:col-span-5 lg:col-span-6 md:col-span-12 sm:col-span-12'>
            <div className='py-2 px-5 bg-primary/15 rounded-full w-fit'>
              <p className='text-primary text-lg font-bold'>AI TECHNOLOGY PARTNER</p>
            </div>
            <h1 className='mt-5 leading-tight'>
              Build Your Next AI Product to Accelerate Fundraising
            </h1>
            <p className='text-black/55 text-lg font-medium mt-5'>
              From custom LLM integrations and agentic workflows to full-scale SaaS platforms, Arch Technologies helps startups and businesses design, build, and scale custom AI solutions with a dedicated engineering team.
            </p>
            <div className='flex flex-wrap gap-4 mt-8'>
              <button
                onClick={openModal}
                className='bg-primary text-white text-lg font-semibold py-4 px-8 rounded-full hover:bg-darkmode hover:cursor-pointer transition-colors duration-300'>
                Book a Free Consultation
              </button>
              <Link href='#About'>
                <button className='bg-transparent text-primary hover:text-white border-2 border-primary text-lg font-semibold py-4 px-8 rounded-full hover:bg-primary hover:cursor-pointer transition-colors duration-300'>
                  View Our Services
                </button>
              </Link>
            </div>
          </div>
          <div className='xl:col-span-7 lg:col-span-6 lg:block hidden'>
            <Image
              src='/images/hero/banner-image.png'
              alt='banner image'
              width={600}
              height={600}
              className='w-full'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
