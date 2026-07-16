import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import Dedicated from '@/app/components/Home/Dedicated'
import Digital from '@/app/components/Home/Digital'
import Beliefs from '@/app/components/Home/Beliefs'
import Work from '@/app/components/Home/Work'
import Team from '@/app/components/Home/Team'
import Featured from '@/app/components/Home/Featured'
import FAQ from '@/app/components/Home/FAQ'
import Testimonial from '@/app/components/Home/Testimonials'
import Articles from '@/app/components/Home/Articles'
import Join from '@/app/components/Home/Joinus'
import Insta from '@/app/components/Home/Insta'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arch Technologies | AI & Digital Product Development Company',
  description: 'Arch Technologies helps startups build scalable AI solutions, LLM integrations, web applications, and custom software with a dedicated engineering team.',
  keywords: 'AI development company, custom AI solutions, web development company, mobile app development, startup technology partner, MVP development, software development company, dedicated development team',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Work />
      <Team />
      <Featured />
      <FAQ />
      {/* <Testimonial /> */}
      <Articles />
      <Join />
      {/* <Insta /> */}
    </main>
  )
}
