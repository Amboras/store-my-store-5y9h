'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative text-white" style={{ backgroundColor: 'var(--brand-primary)' }}>
      <div className="container-custom flex items-center justify-center py-2.5 text-xs tracking-[0.12em] uppercase font-medium">
        <p>Free express shipping on orders over $99 &nbsp;&mdash;&nbsp; Limited stock available</p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}
