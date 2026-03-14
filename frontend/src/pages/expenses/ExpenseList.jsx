import React, { useState, useEffect } from 'react'
import { PageHeader } from '../../components/layout/PageHeader'
import { TableShell } from '../../components/ui/TableShell'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { getExpenses } from '../../api/expenses'
import { Plus, Receipt, Calendar, User, Search } from 'lucide-react'
import { format } from 'date-fns'

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getExpenses()
      .then(data => setExpenses(data))
      .finally(() => setLoading(false))
  }, [])

  const filteredExpenses = expenses.filter(e => 
    e.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const actions = (
    <Button variant="primary">
      <Plus size={16} className="mr-2" />
      Record Expense
    </Button>
  )

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Expense Management" 
        subtitle="Track institutional expenditures and utility payments"
        actions={actions}
      />

      {/* Search Bar */}
      <div className="max-w-md">
        <div className="relative group">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search expenses by description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      <TableShell 
        loading={loading} 
        empty={!filteredExpenses.length}
        emptyMessage="No expenses found"
      >
        <thead>
          <tr className="bg-background/50 text-[10px] font-bold text-text-muted uppercase tracking-widest border-b border-border">
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Amount (UGX)</th>
            <th className="px-4 py-3 text-right">Recorded By</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {filteredExpenses.map((e) => (
            <tr key={e.id} className="text-sm hover:bg-background/30 transition-colors">
              <td className="px-4 py-3 text-text-muted">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="opacity-50" />
                  {e.date}
                </div>
              </td>
              <td className="px-4 py-3">
                <Badge variant="default" className="text-[10px] uppercase font-bold tracking-tighter">
                  {e.category}
                </Badge>
              </td>
              <td className="px-4 py-3 font-medium text-text-primary">{e.description}</td>
              <td className="px-4 py-3 font-mono font-bold text-danger">{(e.amount).toLocaleString()}</td>
              <td className="px-4 py-3 text-right text-text-muted text-xs">
                <div className="flex items-center justify-end gap-2">
                  <User size={12} className="opacity-50" />
                  {e.recorded_by}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    </div>
  )
}
