import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#About' },
  { label: 'About', href: '#Dedicated' },
  { label: 'Process', href: '#Process' },
  { label: 'FAQ', href: '#FAQ' },
  { label: 'Contact', href: '#Contact' },
]

// about data (service cards)
const Aboutdata: aboutdata[] = [
  {
    heading: 'Web Application Development',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph: 'Custom business web applications, SaaS platforms, admin panels, customer portals, and enterprise web solutions built for scale and high performance.',
    link: 'Book Call',
  },
  {
    heading: 'Mobile App Development',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph: 'High-quality iOS, Android, and cross-platform mobile apps built using Flutter and React Native. Fully optimized for app store deployment.',
    link: 'Book Call',
  },
  {
    heading: 'AI & Machine Learning',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph: 'Unlock growth with custom AI assistants, workflow automation, LLM integrations (OpenAI & Claude), document AI, and vector search systems.',
    link: 'Book Call',
  },
  {
    heading: 'Startup MVP Development',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph: 'Fast-track your idea from validation and rapid prototyping to architecture design, product launch, and initial scaling support.',
    link: 'Book Call',
  },
  {
    heading: 'Dedicated Product Teams',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph: 'Extend your engineering capacity by hiring complete product teams or dedicated software developers for long-term support and feature development.',
    link: 'Book Call',
  },
  {
    heading: 'Cloud & Backend Engineering',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph: 'Robust, secure, and scalable backend architectures powered by Node.js, NestJS, and Python, deployed seamlessly on AWS and Google Cloud.',
    link: 'Book Call',
  },
  {
    heading: 'UI/UX Design',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph: 'User-centered design systems, high-fidelity prototypes, and sleek, intuitive user interfaces that deliver premium and modern digital experiences.',
    link: 'Book Call',
  },
  {
    heading: 'Product Consulting',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph: 'Technical consultation, outsourced CTO services, product architecture design, and strategic roadmaps to set your technology up for long-term growth.',
    link: 'Book Call',
  },
  {
    heading: 'AI Agents & Workflow Automation',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph: 'Design and implement autonomous AI agents, automated workflow triggers, and customized business logic engines to cut operating costs and improve team productivity.',
    link: 'Book Call',
  },
]

// work-data (projects data)
const WorkData: workdata[] = [
  {
    profession: 'Search & Discovery Engine',
    name: 'Compass Search Engine',
    imgSrc: '/images/featured/feat1.jpg',
    link: 'https://github.com/dhrroovv',
  },
  {
    profession: 'Custom Medusa.js Bulk System',
    name: 'Matrixify Medusa System',
    imgSrc: '/images/featured/feat2.jpg',
    link: 'https://github.com/dhrroovv',
  },
  {
    profession: 'AI Agent & LLM Workflow',
    name: 'RAG Customer Support Chatbot',
    imgSrc: '/images/featured/feat1.jpg',
    link: 'https://github.com/dhrroovv',
  },
  {
    profession: 'Scalable Cloud Architecture',
    name: 'va2pt.com Cloud Infra',
    imgSrc: '/images/featured/feat2.jpg',
    link: 'https://va2pt.com',
  },
  {
    profession: 'Terraform & CI/CD Pipelines',
    name: 'Infrastructure Code',
    imgSrc: '/images/featured/feat1.jpg',
    link: 'https://github.com/pkdeva',
  },
]

const FeaturedData: featureddata[] = [
  {
    heading: 'Clinikally Skin & Haircare App (iOS & Android)',
    imgSrc: '/images/featured/feat1.jpg',
    link: 'https://apps.apple.com/in/app/clinikally-skin-haircare-app/id6743621924',
  },
  {
    heading: 'Sigfyn - Fintech Wealth Management Platform',
    imgSrc: '/images/featured/feat2.jpg',
    link: 'https://play.google.com/store/apps/details?id=com.sigfyn.app&pcampaignid=web_share',
  },
  {
    heading: 'Compass Search Engine',
    imgSrc: '/images/featured/feat1.jpg',
    link: 'https://github.com/dhrroovv',
  },
  {
    heading: 'Matrixify Medusa System',
    imgSrc: '/images/featured/feat2.jpg',
    link: 'https://github.com/dhrroovv',
  },
  {
    heading: 'RAG Customer Support Chatbot',
    imgSrc: '/images/featured/feat1.jpg',
    link: 'https://github.com/dhrroovv',
  },
  {
    heading: 'va2pt.com Cloud Infra',
    imgSrc: '/images/featured/feat2.jpg',
    link: 'https://va2pt.com',
  },
  {
    heading: 'Infrastructure Code',
    imgSrc: '/images/featured/feat1.jpg',
    link: 'https://github.com/pkdeva',
  },
]

// plans data
const PlansData = [
  {
    heading: 'Startup MVP',
    price: {
      monthly: 4999,
      yearly: 4499,
    },
    user: 'per project',
    features: {
      devs: '1 Dedicated Full-Stack Developer',
      pm: 'CTO / Solutions Architect Support',
      calls: 'Weekly Milestones & Demo Calls',
      maintenance: '2 Weeks Post-Launch Support',
      hosting: 'Cloud Setup & Deployment',
    },
  },
  {
    heading: 'Growth Team',
    price: {
      monthly: 9999,
      yearly: 8999,
    },
    user: 'per month',
    features: {
      devs: '2 Dedicated Senior Engineers',
      designer: '1 UI/UX Designer (Part-Time)',
      pm: 'Dedicated Project Manager & CTO',
      calls: 'Daily Standups & Slack Integration',
      maintenance: 'Continuous Maintenance & Feature Dev',
    },
  },
  {
    heading: 'Enterprise Team',
    price: {
      monthly: 19999,
      yearly: 17999,
    },
    user: 'custom contact',
    features: {
      devs: '4+ Dedicated Full-Time Engineers',
      architect: 'Dedicated Enterprise Architect & CTO',
      sla: 'Enterprise-Grade Security & SLA',
      support: '24/7 Priority Technical Support',
      custom: 'Custom Integration & Scaling Roadmaps',
    },
  },
]

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'Robert Fox',
    profession: 'Startup Founder',
    comment:
      'We partnered with Arch Technologies to build our MVP, and their team felt like an extension of our own.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'Business Owner',
    comment:
      'Excellent communication, fast execution, and a strong understanding of product thinking.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Cody Fisher',
    profession: 'Founder & CEO',
    comment:
      'They did not just build software — they helped us shape the product and scale it securely.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
  {
    name: 'Robert Fox',
    profession: 'Startup Founder',
    comment:
      'We partnered with Arch Technologies to build our MVP, and their team felt like an extension of our own.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'Business Owner',
    comment:
      'Excellent communication, fast execution, and a strong understanding of product thinking.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Cody Fisher',
    profession: 'Founder & CEO',
    comment:
      'They did not just build software — they helped us shape the product and scale it securely.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
]

// artical data
const ArticlesData: articles[] = [
  {
    time: '5 min',
    heading: 'Building a Scalable MVP:',
    heading2: "A Founder's Engineering Guide",
    name: 'Published by Priyanshu',
    date: 'July 14, 2026',
    imgSrc: '/images/articles/article.png',
    href: '/blog/1',
  },
  {
    time: '7 min',
    heading: 'Outsourced CTO vs. In-House:',
    heading2: 'Making the Right Tech Decision',
    name: 'Published by Priyanshu',
    date: 'June 28, 2026',
    imgSrc: '/images/articles/article2.png',
    href: '/blog/2',
  },
  {
    time: '6 min',
    heading: 'Integrating Custom AI/LLMs:',
    heading2: 'A Step-by-Step Business Guide',
    name: 'Published by Dhruv',
    date: 'May 15, 2026',
    imgSrc: '/images/articles/article3.png',
    href: '/blog/3',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Company',
    links: [
      { label: 'About Us', href: '#Dedicated' },
      { label: 'Our Team', href: '#Team' },
      { label: 'Technology Stack', href: '#Team' },
      { label: 'Development Process', href: '#Process' },
    ],
  },
  {
    section: 'Services',
    links: [
      { label: 'Web Development', href: '#About' },
      { label: 'Mobile Apps', href: '#About' },
      { label: 'AI & Machine Learning', href: '#About' },
      { label: 'MVP Development', href: '#About' },
    ],
  },
  {
    section: 'Resources',
    links: [
      { label: 'FAQ', href: '#FAQ' },
      { label: 'Blog & Articles', href: '#Blog' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}
