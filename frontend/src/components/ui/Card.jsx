import React from 'react'

export function Card({ children, className = '', padding = 'p-6' }) {
  return (
    <div className={`bg-surface border border-border rounded-xl shadow-sm ${padding} ${className}`}>
      {children}
    </div>
  )
}
