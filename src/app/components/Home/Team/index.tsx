import React from 'react'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Dhruve',
    role: 'AI / ML Engineer',
    image: '/images/team/dhruve.jpg',
    badge: null,
    bio: 'Specializes in building intelligent AI systems, LLM integrations, and machine learning pipelines that power next-generation products.',
    skills: ['Python', 'LLMs', 'RAG', 'LangChain', 'OpenAI'],
  },
  {
    name: 'Priyanshu',
    role: 'CEO & DevOps',
    image: '/images/team/priyanshu.jpg',
    badge: null,
    bio: 'Leads product vision and engineering operations. Expert in cloud infrastructure, CI/CD pipelines, and scaling distributed systems.',
    skills: ['AWS', 'Docker', 'GCP', 'CI/CD', 'Strategy'],
  },
  {
    name: 'Navin',
    role: 'Fullstack SDE',
    image: '/images/team/navin.png',
    badge: 'Freelance @ Sigfyn',
    bio: 'Fullstack engineer with production experience at Sigfyn — a fintech platform managing ₹58Cr+ in assets — and Clinikally (YC S22). Built scalable apps with React Native, Node.js, PostgreSQL & WebSockets.',
    skills: ['React Native', 'Node.js', 'TypeScript', 'PostgreSQL', 'WebSockets'],
  },
]

const Team = () => {
  return (
    <section className='overflow-x-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <h2 className='text-center max-w-5xl mx-auto'>
          Modern Technology Stack
        </h2>
        <h5 className='font-medium text-center pt-5 text-black/50 max-w-3xl mx-auto'>
          We build with proven, modern technologies, custom RAG integrations, and LLM frameworks like LangChain to ensure scalability, security, and rapid execution.
        </h5>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-16'>
          {[
            { category: 'Frontend', tech: 'React, Next.js, Vue, Tailwind CSS, TypeScript' },
            { category: 'Backend', tech: 'Node.js, NestJS, Python, FastAPI' },
            { category: 'Databases', tech: 'PostgreSQL, MongoDB, Firebase, Supabase' },
            { category: 'Cloud & DevOps', tech: 'AWS, Google Cloud, Vercel, Docker' },
            { category: 'AI & Automation', tech: 'OpenAI, Claude, LangChain, Vector DBs, RAG' },
          ].map((stack, i) => (
            <div key={i} className='bg-grey dark:bg-darkHeroBg p-6 rounded-2xl border border-border shadow-xs hover:shadow-md transition-shadow duration-300'>
              <h6 className='text-primary text-lg font-bold mb-3'>{stack.category}</h6>
              <p className='text-black/75 dark:text-white/75 text-base font-medium leading-relaxed'>{stack.tech}</p>
            </div>
          ))}
        </div>

        {/* Meet the Team */}
        <div className='mt-20'>
          <h2 className='text-center max-w-5xl mx-auto'>
            Meet the Team
          </h2>
          <h5 className='font-medium text-center pt-5 text-black/50 max-w-3xl mx-auto'>
            The minds behind Arch Technologies — passionate engineers and innovators building the future.
          </h5>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mt-14'>
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className='group flex flex-col bg-grey dark:bg-darkHeroBg rounded-3xl border border-border shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden'
              >
                {/* Photo */}
                <div className='w-full aspect-square overflow-hidden'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
                  />
                </div>

                {/* Info */}
                <div className='flex flex-col flex-1 py-6 px-5 gap-3'>
                  {/* Badge */}
                  {member.badge && (
                    <span
                      style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '6px', background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', color: '#fff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.04em', padding: '4px 10px', borderRadius: '999px' }}
                    >
                      <svg width='10' height='10' viewBox='0 0 10 10' fill='none' style={{ flexShrink: 0 }}>
                        <circle cx='5' cy='5' r='4' fill='rgba(255,255,255,0.35)' />
                        <path d='M3 5l1.5 1.5L7 3.5' stroke='#fff' strokeWidth='1.2' strokeLinecap='round' strokeLinejoin='round' />
                      </svg>
                      {member.badge}
                    </span>
                  )}

                  <div>
                    <h4 className='font-bold text-xl'>{member.name}</h4>
                    <p className='text-primary font-semibold mt-0.5 text-sm'>{member.role}</p>
                  </div>

                  <p className='text-black/60 dark:text-white/60 text-sm leading-relaxed flex-1'>
                    {member.bio}
                  </p>

                  {/* Skill chips */}
                  <div className='flex flex-wrap gap-2 mt-1'>
                    {member.skills.map((skill, si) => (
                      <span
                        key={si}
                        className='text-xs font-semibold px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-border text-black/70 dark:text-white/70'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 mt-16'>
          <Image
            src='/images/team/team.webp'
            alt='office-image'
            height={684}
            width={1296}
            className='relative z-1 rounded-3xl'
          />
        </div>
      </div>
    </section>
  )
}

export default Team

