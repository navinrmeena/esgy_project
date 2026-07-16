'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const FAQ = () => {
  const faqData = [
    {
      question: 'How long does it take to build an MVP?',
      answer: 'Early-stage MVPs typically take 4 to 8 weeks to build, test, and launch, depending on the complexity of features and target integrations.',
    },
    {
      question: 'Do you work with early-stage startups?',
      answer: 'Yes, we specialize in helping early-stage founders validate their ideas, design prototypes, build scalable MVPs, and launch products quickly.',
    },
    {
      question: 'Can you improve an existing application?',
      answer: 'Absolutely. We can take over existing codebases, perform code quality audits, upgrade dependencies, refactor architecture for scale, and build new features.',
    },
    {
      question: 'Do you provide long-term maintenance?',
      answer: 'Yes, we provide monthly engineering retainer plans to continuously monitor, support, and extend your platforms after launch.',
    },
    {
      question: 'Can I hire a dedicated development team?',
      answer: 'Yes, we offer dedicated engineering squads consisting of developers, QA engineers, designers, and a solutions architect to act as your extended in-house team.',
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Yes, client privacy and intellectual property are our top priorities. We sign Non-Disclosure Agreements (NDAs) before discussing any project details.',
    },
    {
      question: 'Can you integrate AI into my product?',
      answer: 'Yes, we design custom AI assistants, workflow automations, document parsing pipelines, and integrate OpenAI, Claude, LangChain, and RAG systems into existing software.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We focus on modern, reliable stacks including React, Next.js, Node.js, NestJS, Python (FastAPI), Supabase, Firebase, AWS, Vercel, PostgreSQL, and MongoDB.',
    },
  ]

  return (
    <section
      id='FAQ'
      className='relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-2xl py-24 bg-faq-bg bg-no-repeat bg-cover bg-primary'>
          <p className='text-lg font-normal text-white text-center mb-6'>FAQ</p>
          <h2 className='text-white text-center max-w-3xl mx-auto'>
            Frequently asked questions.
          </h2>
          <div className='w-full px-4 pt-16'>
            {faqData.map((item, index) => (
              <div key={index} className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <DisclosureButton className='flex w-full justify-between items-center text-left text-xl font-medium focus:outline-hidden hover:cursor-pointer'>
                        <span className='text-black'>
                          {item.question}
                        </span>
                        <div
                          className={`h-5 w-5 transform transition-transform duration-300 ${
                            open ? 'rotate-180' : ''
                          }`}>
                          <Icon icon='lucide:chevron-up' width='20' height='20' />
                        </div>
                      </DisclosureButton>
                      <DisclosurePanel className='text-base text-black/50 font-normal text-left pt-4 mt-6 border-t border-border'>
                        <div className='lg:max-w-70%'>
                          {item.answer}
                        </div>
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
