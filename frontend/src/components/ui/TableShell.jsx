import React from 'react'
import { LoadingSpinner } from './LoadingSpinner'
import { EmptyState } from './EmptyState'

export function TableShell({ 
  children, 
  loading, 
  empty, 
  emptyMessage, 
  pagination 
}) {
  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {children}
        </table>
      </div>

      {loading && (
        <div className="py-20 flex justify-center border-t border-border">
          <LoadingSpinner />
        </div>
      )}

      {!loading && empty && (
        <div className="border-t border-border">
          <EmptyState message={emptyMessage} />
        </div>
      )}

      {pagination && (
        <div className="px-4 py-3 border-t border-border flex items-center justify-between bg-background/50">
          <div className="text-xs text-text-muted">
            Showing <span className="font-medium text-text-primary">1</span> to <span className="font-medium text-text-primary">10</span> of <span className="font-medium text-text-primary">20</span> results
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-border rounded text-xs hover:bg-background disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-border rounded text-xs hover:bg-background">Next</button>
          </div>
        </div>
      )}
    </div>
  )
}
