import React from 'react'
import { Archive } from 'lucide-react'

export function EmptyState({ 
  message = 'No records found', 
  description = 'Try adjusting your filters or adding a new record.',
  icon: Icon = Archive 
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="bg-background p-4 rounded-full mb-4">
        <Icon size={32} className="text-text-muted opacity-50" />
      </div>
      <h3 className="text-sm font-semibold text-text-primary whitespace-nowrap">{message}</h3>
      <p className="text-xs text-text-muted mt-1 max-w-[200px]">{description}</p>
    </div>
  )
}
