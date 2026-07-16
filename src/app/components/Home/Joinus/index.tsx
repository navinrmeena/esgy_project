'use client'
import React from 'react'
import Link from 'next/link'

import { useBookCall } from '@/app/context/BookCallContext'

const Join = () => {
  const { openModal } = useBookCall()

  return (
    <section id='Contact' className='overflow-hidden bg-joinus'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            contact us
          </p>
          <h2 className='my-6'>Let's Build Something Great Together</h2>
          <p className='text-black/50 text-base font-normal max-w-3xl mx-auto'>
            Whether you're launching your first startup or scaling an existing business, Arch Technologies is ready to become your technology partner.
          </p>
        </div>

        <div className='mx-auto max-w-4xl pt-8 flex justify-center'>
          <button
            onClick={openModal}
            className='text-xl text-white font-semibold text-center rounded-full bg-primary py-5 px-12 hover:bg-darkmode duration-300 border-0 cursor-pointer shadow-lg hover:shadow-xl transition-all'>
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
export default Join
