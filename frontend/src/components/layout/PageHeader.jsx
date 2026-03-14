import React from 'react'

export function PageHeader({ 
  title, 
  subtitle, 
  actions 
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-xl md:text-2xl font-syne font-bold text-text-primary tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm font-mono text-text-muted mt-1 uppercase tracking-wider">
            {subtitle}
          </p>
        )}
      </div>
      
      {actions && (
        <div className="flex items-center gap-3">
          {actions}
        </div>
      )}
    </div>
  )
}
