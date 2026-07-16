'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Digital = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className="rounded-3xl bg-primary bg-[url('/images/digital/bg.svg')] bg-no-repeat bg-right-top lg:pb-60 pb-32 relative">
          <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'>
            {/* COLUMN-1 */}
            <div className='pt-24 lg:pl-24'>
              <p className='text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5'>
                why choose us
              </p>
              <h2 className='text-white mb-8 leading-tight text-center lg:text-start lg:w-full'>
                Engineering Excellence Built for Startups & Growth
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-white text-lg font-semibold text-center lg:text-start'>
                {[
                  'AI-first engineering mindset',
                  'Transparent communication',
                  'Custom LLM & agent workflows',
                  'Fast MVP delivery',
                  'Scalable cloud architecture',
                  'Dedicated AI & full-stack devs',
                  'RAG & vector database setups',
                  'Long-term partnership focus',
                ].map((point, index) => (
                  <div key={index} className='flex items-center justify-center lg:justify-start gap-3'>
                    <span className='h-2.5 w-2.5 rounded-full bg-white block shrink-0'></span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* COLUMN-2 */}
          <div className='absolute -bottom-16 -right-20 xl:block hidden'>
            <Image
              src='/images/digital/girldoodle.svg'
              alt='doodle'
              width={815}
              height={691}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Digital
