'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/app/types/articles'
import ArticlesSkeleton from '../../Skeleton/Articles'

const Articles = () => {
  // fetch data

  const [articles, setArticles] = useState<articles[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setArticles(data.ArticlesData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section id='Blog' className='relative bg-grey overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <div className='text-center'>
          <p className='text-primary text-xl font-normal tracking-widest'>
            ARTICLES
          </p>
          <h2>Our latest post.</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <ArticlesSkeleton key={i} />
              ))
            : articles.map((items, i) => (
                <Link href={items.href} key={i} className='block group hover:no-underline'>
                  <div className='bg-white px-3 pt-3 pb-12 shadow-lg rounded-4xl relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer h-full border border-black/5'>
                    <div className='overflow-hidden rounded-3xl relative'>
                      <Image
                        src={items.imgSrc}
                        alt={items.heading}
                        width={389}
                        height={262}
                        className='w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-3xl'
                      />
                    </div>
                    <span className='absolute text-base bg-primary text-white py-3 px-6 rounded-full top-52 right-8 shadow-md pointer-events-none'>
                      {items.time} read
                    </span>
                    <h5 className='font-bold pt-6 text-darkmode group-hover:text-primary transition-colors duration-300'>{items.heading}</h5>
                    <h5 className='font-bold pt-1 text-darkmode group-hover:text-primary transition-colors duration-300'>{items.heading2}</h5>
                    <div className='mt-4 pt-4 border-t border-linegrey'>
                      <p className='text-sm font-semibold text-black/75 dark:text-white/75'>
                        {items.name}
                      </p>
                      <p className='text-sm font-normal text-black/50 dark:text-white/50 mt-1'>
                        {items.date}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  )
}
export default Articles
