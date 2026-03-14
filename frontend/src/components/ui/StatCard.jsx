import React from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

export function StatCard({ label, value, change, trend }) {
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus
  const trendColor = trend === 'up' ? 'text-accent' : trend === 'down' ? 'text-danger' : 'text-text-muted'

  return (
    <div className="bg-surface p-6 rounded-xl border border-border shadow-sm flex flex-col justify-between">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest">{label}</p>
      <div className="flex items-end justify-between mt-4">
        <h3 className="text-2xl font-bold text-text-primary tracking-tight">{value}</h3>
        {change && (
          <div className={`flex items-center gap-1 text-xs font-bold ${trendColor}`}>
            <TrendIcon size={14} />
            <span>{change}</span>
          </div>
        )}
      </div>
    </div>
  )
}
