'use client'
import React from 'react'
import Image from 'next/image'

const Dedicated = () => {
  return (
    <section id='Dedicated' className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
          <Image
            src='/images/dedicated/spiral.svg'
            height={272}
            width={686}
            alt='spiral-design'
            className='absolute left-0 top-0 hidden lg:block -z-10'
          />
          {/* Left Column */}
          <div className='col-span-12 lg:col-span-6 justify-self-center'>
            <div className='relative w-[320px] h-[400px] lg:w-[416px] lg:h-[530px] rounded-3xl overflow-hidden shadow-xl mx-auto md:mx-0'>
              <Image
                src='/images/team/priyanshu.jpg'
                alt='Priyanshu - CEO & DevOps'
                fill
                className='object-cover object-top'
              />
            </div>
          </div>

          {/* Right Column */}
          <div className='col-span-12 lg:col-span-6'>
            <div className='relative'>
              <Image
                src='/images/dedicated/comma.svg'
                alt='comma-image'
                width={200}
                height={106}
                className='absolute -top-16 -left-32 hidden lg:block'
              />
            </div>
            <h2 className='text-center -mr-1 lg:text-start lg:leading-20 leading-14'>
              Your AI-First Technology Partner
            </h2>
            <p className='text-lg font-medium text-black/55 mt-5 text-center lg:text-start leading-relaxed'>
              At Arch Technologies, we build AI-first platforms and digital products through collaboration, not transactions.
              Our engineering team works closely with founders to implement state-of-the-art LLM workflows, custom AI agents, and high-performance applications that accelerate fundraising and scale businesses.
              Whether you're validating an early-stage AI concept or upgrading an enterprise system, we act as your dedicated engineering arm.
            </p>
            <h5 className='mt-12 lg:pl-32 relative lg:before:block before:hidden before:absolute before:bg-black before:h-0.5 before:w-24 before:left-0 before:bottom-1/2 text-center lg:text-start'>
              Priyanshu, CEO & DevOps
            </h5>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Dedicated
