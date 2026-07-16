'use client'
import { useState } from 'react'
import toast from 'react-hot-toast'
import Logo from '@/app/components/Layout/Header/Logo'
import Loader from '@/app/components/Common/Loader'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useBookCall } from '@/app/context/BookCallContext'

const BookCallModal = () => {
  const { isOpen, closeModal } = useBookCall()

  const [formData, setFormData] = useState({
    name: '',
    startupName: '',
    currentWebsite: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.startupName) {
      toast.error('Please fill in Name, Email, and Startup Name.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Consultation booked successfully!')
        closeModal()
        setFormData({
          name: '',
          startupName: '',
          currentWebsite: '',
          email: '',
          message: '',
        })
      } else {
        toast.error(data.error || 'Failed to book consultation.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50 p-4'>
      <div className='relative w-full max-w-lg bg-white rounded-2xl px-8 pt-12 pb-8 text-center bg-dark_grey/95 backdrop-blur-md shadow-2xl overflow-y-auto max-h-[90vh] border border-black/10'>
        <button
          onClick={closeModal}
          className='absolute top-4 right-4 text-black hover:text-primary transition-colors cursor-pointer'
          aria-label='Close Book Call Modal'>
          <Icon icon='tabler:currency-xrp' className='text-3xl' />
        </button>

        <div className='mb-6 text-center mx-auto inline-block max-w-[160px]'>
          <Logo />
        </div>

        <h4 className='text-2xl font-bold text-darkmode mb-6'>
          Schedule Your Free Consultation
        </h4>

        <form onSubmit={handleSubmit} className='space-y-4 text-left'>
          <div>
            <label className='block text-sm font-semibold text-darkmode mb-1.5'>Full Name *</label>
            <input
              type='text'
              required
              placeholder='Enter your full name'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-4 py-2.5 text-base text-dark outline-hidden transition placeholder:text-darkmode/50 focus:border-primary focus-visible:shadow-none text-darkmode'
            />
          </div>

          <div>
            <label className='block text-sm font-semibold text-darkmode mb-1.5'>Startup / Company Name *</label>
            <input
              type='text'
              required
              placeholder='Enter company name'
              value={formData.startupName}
              onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
              className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-4 py-2.5 text-base text-dark outline-hidden transition placeholder:text-darkmode/50 focus:border-primary focus-visible:shadow-none text-darkmode'
            />
          </div>

          <div>
            <label className='block text-sm font-semibold text-darkmode mb-1.5'>Current Website (if any)</label>
            <input
              type='text'
              placeholder='https://example.com'
              value={formData.currentWebsite}
              onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
              className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-4 py-2.5 text-base text-dark outline-hidden transition placeholder:text-darkmode/50 focus:border-primary focus-visible:shadow-none text-darkmode'
            />
          </div>

          <div>
            <label className='block text-sm font-semibold text-darkmode mb-1.5'>Email Address *</label>
            <input
              type='email'
              required
              placeholder='you@company.com'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-4 py-2.5 text-base text-dark outline-hidden transition placeholder:text-darkmode/50 focus:border-primary focus-visible:shadow-none text-darkmode'
            />
          </div>

          <div>
            <label className='block text-sm font-semibold text-darkmode mb-1.5'>How can we help? (Project details)</label>
            <textarea
              rows={3}
              placeholder='Briefly describe your product concept, tech stack, or scaling challenges...'
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-4 py-2.5 text-base text-dark outline-hidden transition placeholder:text-darkmode/50 focus:border-primary focus-visible:shadow-none text-darkmode resize-none'
            />
          </div>

          <div className='pt-2'>
            <button
              type='submit'
              disabled={loading}
              className='bg-primary w-full py-3 rounded-lg text-lg font-semibold border text-white border-primary hover:bg-darkmode hover:border-darkmode transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75'>
              {loading ? (
                <>
                  Scheduling... <Loader />
                </>
              ) : (
                'Confirm Consultation'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookCallModal
