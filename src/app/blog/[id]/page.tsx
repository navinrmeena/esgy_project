import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Icon } from '@iconify/react/dist/iconify.js'

interface BlogPost {
  title: string
  subtitle: string
  author: string
  role: string
  date: string
  readTime: string
  image: string
  content: string[]
}

const blogPosts: Record<string, BlogPost> = {
  '1': {
    title: "Building a Scalable MVP: A Founder's Engineering Guide",
    subtitle: "How to ship fast and launch with confidence without accumulating crippling technical debt.",
    author: "Priyanshu",
    role: "CEO & DevOps, Arch Technologies",
    date: "July 14, 2026",
    readTime: "5 min",
    image: "/images/articles/article.png",
    content: [
      "In the early stages of a startup, speed is your ultimate competitive advantage. However, many founders make the critical mistake of running so fast that they build a foundation of sand. When the product begins to gain traction, the system crashes under the weight of basic scaling requirements.",
      "Building a scalable MVP isn't about creating an enterprise-grade microservice architecture on day one. Instead, it is about making conscious, modular design choices that allow your platform to grow seamlessly when the time comes.",
      "First, prioritize a monolithic framework with clear folder separation. Using Next.js or Node.js allows your team to develop rapidly using a single language stack. Second, choose standard, fully managed databases (like PostgreSQL or MongoDB) rather than experimenting with niche data stores. Lastly, keep your external integrations—especially AI and third-party APIs—isolated behind clean service interfaces. This ensures that if you need to switch LLM vendors or change payment gateways, you only modify a single file rather than refactoring your entire codebase.",
      "At Arch Technologies, we help founders navigate these early choices. By designing modular architectures from the start, we deliver MVPs that can scale from 100 to 100,000 users without requiring a total rewrite."
    ]
  },
  '2': {
    title: "Outsourced CTO vs. In-House: Making the Right Tech Decision",
    subtitle: "Navigating engineering leadership and technical structure for early-stage startups.",
    author: "Priyanshu",
    role: "CEO & DevOps, Arch Technologies",
    date: "June 28, 2026",
    readTime: "7 min",
    image: "/images/articles/article2.png",
    content: [
      "Every early-stage startup needs strong technical leadership to transform vision into code. However, finding and hiring a high-caliber, full-time in-house CTO can take months—precious time that early-stage startups simply cannot afford to lose.",
      "This guide breaks down the practical trade-offs between onboarding a full-time partner versus collaborating with an outsourced CTO and engineering team.",
      "An in-house CTO is essential when your product's core intellectual property is highly proprietary and requires deep daily R&D iteration. On the other hand, an outsourced CTO partner provides instant access to structured processes, pre-vetted senior developers, and a wealth of cross-industry scaling experience. They take the technical strategy, architecture, and team management off your plate so you can focus entirely on customer development and fundraising.",
      "For many growing businesses, starting with an outsourced engineering partner to build and launch the MVP is the most capital-efficient path. It gives you the technical speed of a senior team without the long-term equity dilution of a executive hire."
    ]
  },
  '3': {
    title: "Integrating Custom AI/LLMs: A Step-by-Step Business Guide",
    subtitle: "How startups are shifting from simple wrappers to building proprietary, high-value AI features.",
    author: "Dhruve",
    role: "AI / ML Engineer, Arch Technologies",
    date: "May 15, 2026",
    readTime: "6 min",
    image: "/images/articles/article3.png",
    content: [
      "The barrier to entry for building an AI application has never been lower. However, simply wrapping an OpenAI API call with a custom UI is no longer enough to build a defensible business. Today, startups must focus on creating proprietary value through custom data pipelines and advanced model orchestration.",
      "If you are looking to integrate AI into your product, the journey typically begins with Retrieval-Augmented Generation (RAG). By feeding custom database context to your LLM, you ensure responses are highly accurate and tailored to your business domain.",
      "As your usage scales, the focus shifts to orchestration and efficiency. Implementing agentic workflows—where AI models can execute tasks, call APIs, and double-check their own work—creates highly automated workflows that replace manual labor. Furthermore, utilizing caching layers and semantic search helps manage token limits and reduce operational latencies.",
      "Arch Technologies specializing in building these advanced AI pipelines. We guide startups through selecting vector databases, designing prompts, and choosing when to fine-tune open-source models versus utilizing commercial APIs."
    ]
  }
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params
  const post = blogPosts[id]

  if (!post) {
    notFound()
  }

  return (
    <article className='min-h-screen bg-grey pt-32 pb-24'>
      <div className='container mx-auto max-w-3xl px-4'>
        {/* Back navigation */}
        <Link 
          href='/#Blog' 
          className='inline-flex items-center gap-2 text-primary font-semibold hover:text-darkmode transition-colors mb-8 group'
        >
          <Icon icon='tabler:arrow-left' className='text-xl transition-transform group-hover:-translate-x-1' />
          Back to Articles
        </Link>

        {/* Heading */}
        <h1 className='text-4xl sm:text-5xl font-extrabold text-darkmode leading-tight mb-4'>
          {post.title}
        </h1>
        
        {/* Subtitle */}
        <p className='text-xl text-black/60 font-medium leading-relaxed mb-6'>
          {post.subtitle}
        </p>

        {/* Author metadata */}
        <div className='flex items-center gap-4 mb-10 pb-6 border-b border-black/10'>
          <div className='h-12 w-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center border border-primary/20'>
            <span className='font-bold text-primary text-lg'>SS</span>
          </div>
          <div>
            <p className='text-base font-bold text-darkmode'>{post.author}</p>
            <p className='text-sm text-black/50'>{post.role}</p>
          </div>
          <div className='ml-auto text-right text-sm text-black/50'>
            <p className='font-semibold'>{post.date}</p>
            <p>{post.readTime} read</p>
          </div>
        </div>

        {/* Image */}
        <div className='relative w-full h-[400px] rounded-3xl overflow-hidden mb-12 shadow-lg border border-black/5'>
          <Image 
            src={post.image}
            alt={post.title}
            fill
            className='object-cover'
            priority
          />
        </div>

        {/* Content Body */}
        <div className='space-y-6 text-lg text-black/75 leading-relaxed font-normal mb-16'>
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className='bg-darkmode text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden'>
          <div className='absolute -right-16 -top-16 w-48 h-48 bg-primary/10 rounded-full blur-2xl'></div>
          <div className='absolute -left-16 -bottom-16 w-48 h-48 bg-primary/10 rounded-full blur-2xl'></div>
          
          <h3 className='text-2xl sm:text-3xl font-extrabold text-white mb-4 relative z-10'>
            Want to build something similar?
          </h3>
          <p className='text-base text-white/70 max-w-lg mx-auto mb-8 relative z-10'>
            Arch Technologies acts as your dedicated AI engineering team. Let's discuss your technical roadmap, MVP build, or AI automation ideas.
          </p>
          <div className='relative z-10'>
            <Link 
              href='/#Contact'
              className='inline-block bg-primary hover:bg-white hover:text-darkmode text-white font-bold py-4 px-10 rounded-full transition-all shadow-md hover:shadow-lg'
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
