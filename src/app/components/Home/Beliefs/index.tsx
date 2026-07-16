'use client'
import React from 'react'
import Link from 'next/link'

const Beliefs = () => {
  return (
    <section id='Process' className='bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {/* COLUMN-1 */}

          <div className="bg-purple pt-12 px-10 sm:px-20 pb-20 rounded-3xl bg-[url('/images/beliefs/swirls.svg')] bg-no-repeat bg-right-bottom">
            <p className='text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase'>
              process — phase 1
            </p>
            <h3 className='text-white mb-8 text-center sm:text-start'>
              Discovery{' '}
              <span className='text-white/60'>
                to Architecture
              </span>
            </h3>
            <div className='text-white/75 space-y-4 mb-16 text-lg'>
              <p><strong>Step 1. Discovery & Consultation:</strong> We deep-dive into your vision, requirements, and business goals.</p>
              <p><strong>Step 2. Planning & Architecture:</strong> We design the database schema, system architecture, and tech stack.</p>
              <p><strong>Step 3. UI/UX Design:</strong> We map user journeys and create interactive prototypes for validation.</p>
              <p><strong>Step 4. Development:</strong> Our engineering team writes clean, modular, and optimized code.</p>
            </div>
            <div className='text-center sm:text-start'>
              <Link
                href='#Contact'
                className='text-lg py-4 px-10 mt-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-white hover:text-black hover:border-white'>
                Start Your Build
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className=''>
            <div className="bg-[#D6FFEB] pt-12 px-10 sm:px-20 pb-20 rounded-3xl bg-[url('/images/beliefs/bg.svg')] bg-no-repeat bg-bottom">
              <p className='text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase'>
                process — phase 2
              </p>
              <h3 className='text-black mb-8 text-center sm:text-start'>
                <span className='text-primary'>Testing</span> to Support
              </h3>
              <div className='text-black/75 space-y-4 mb-16 text-lg'>
                <p><strong>Step 5. Testing & QA:</strong> We conduct thorough automated testing, performance audits, and security checks.</p>
                <p><strong>Step 6. Launch:</strong> We manage production server setups and deployment on Vercel/AWS/Play Store.</p>
                <p><strong>Step 7. Continuous Support:</strong> We provide long-term engineering support, monitoring, and new features.</p>
              </div>
              <div className='text-center sm:text-start'>
                <Link
                  href='#Contact'
                  className='text-lg py-4 px-10 mt-5 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                  Work With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Beliefs
