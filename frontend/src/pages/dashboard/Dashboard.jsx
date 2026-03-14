import React, { useState, useEffect } from 'react'
import { PageHeader } from '../../components/layout/PageHeader'
import { StatCard } from '../../components/ui/StatCard'
import { TableShell } from '../../components/ui/TableShell'
import { Button } from '../../components/ui/Button'
import { getDashboardStats, getRecentPayments } from '../../api/dashboard'
import { Plus, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [stats, setStats] = useState([])
  const [recentPayments, setRecentPayments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getDashboardStats(), getRecentPayments()])
      .then(([s, p]) => {
        setStats(s)
        setRecentPayments(p)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="space-y-8">
      <PageHeader 
        title="Institutional Dashboard" 
        subtitle="School Financial Overview · Term 1 2025"
        actions={
          <Button icon={Plus}>New Collection</Button>
        }
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          Array(4).fill(0).map((_, i) => (
            <div key={i} className="h-32 bg-surface animate-pulse rounded-xl border border-border"></div>
          ))
        ) : (
          stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-text-primary tracking-tight">Recent Collections</h2>
            <Link to="/payments/history" className="text-xs font-bold text-primary-light hover:underline flex items-center gap-1">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          
          <TableShell loading={loading} empty={!recentPayments.length}>
            <thead>
              <tr className="bg-background/50 text-[10px] font-bold text-text-muted uppercase tracking-widest border-b border-border">
                <th className="px-4 py-3">Student</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentPayments.map((p) => (
                <tr key={p.id} className="text-sm hover:bg-background/30 transition-colors">
                  <td className="px-4 py-3 font-medium text-text-primary">{p.student}</td>
                  <td className="px-4 py-3 font-mono font-bold text-accent">{p.amount}</td>
                  <td className="px-4 py-3 text-text-muted">{p.date}</td>
                  <td className="px-4 py-3">
                    <span className="text-[10px] font-bold bg-background border border-border px-2 py-0.5 rounded uppercase">{p.method}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableShell>
        </div>

        {/* Informational Card / Side Panel */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-text-primary tracking-tight">Financial Health</h2>
          <div className="bg-primary/5 border border-primary/10 p-6 rounded-xl space-y-4 shadow-inner">
            <p className="text-sm text-text-primary leading-relaxed">
              Collections for <strong>Term 1 2025</strong> are at <span className="text-accent font-bold">72%</span> of the expected total.
            </p>
            <div className="w-full bg-background rounded-full h-2 overflow-hidden border border-border">
              <div className="bg-accent h-full w-[72%]"></div>
            </div>
            <p className="text-[11px] text-text-muted italic">
              * Based on currently assigned fee structures.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
