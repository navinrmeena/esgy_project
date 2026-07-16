'use client'
import React, { createContext, useContext, useState } from 'react'

interface BookCallContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const BookCallContext = createContext<BookCallContextType | null>(null)

export const BookCallProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <BookCallContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </BookCallContext.Provider>
  )
}

export const useBookCall = () => {
  const context = useContext(BookCallContext)
  if (!context) {
    throw new Error('useBookCall must be used within a BookCallProvider')
  }
  return context
}
