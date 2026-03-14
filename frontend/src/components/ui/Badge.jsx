import React from 'react'

export function Badge({ 
  children, 
  variant = 'default',
  className = '' 
}) {
  const baseStyles = 'badge'
  
  const variants = {
    default: 'bg-background text-text-muted border border-border',
    paid: 'badge-paid',
    pending: 'badge-pending',
    unpaid: 'badge-unpaid',
    voided: 'badge-voided',
    active: 'badge-active',
    transferred: 'badge-transferred',
  }

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  )
}
