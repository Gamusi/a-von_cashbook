import React, { useState, useEffect } from 'react'
import { PageHeader } from '../../components/layout/PageHeader'
import { TableShell } from '../../components/ui/TableShell'
import { Badge } from '../../components/ui/Badge'
import { Input } from '../../components/ui/Input'
import { getPayments } from '../../api/payments'
import { Search, Printer, FileSearch, Filter } from 'lucide-react'
import { usePrint } from '../../hooks/usePrint'

export default function PaymentHistory() {
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const { handlePrint } = usePrint()

  useEffect(() => {
    getPayments()
      .then(data => setPayments(data))
      .finally(() => setLoading(false))
  }, [])

  const filteredPayments = payments.filter(p => 
    p.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.receipt_number.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Collection History" 
        subtitle="Review and reprint receipts for all collected payments"
      />

      <div className="flex flex-col md:flex-row md:items-end gap-4 bg-surface p-4 rounded-xl border border-border shadow-sm">
        <div className="flex-1">
          <Input 
            label="Search Records"
            placeholder="Search by student name or receipt #..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-32 text-xs">
          <label className="text-sm font-medium text-text-primary block mb-1.5 whitespace-nowrap">Channel</label>
          <select className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light">
            <option>All Methods</option>
            <option>Cash</option>
            <option>Bank Slip</option>
            <option>Mobile Money</option>
          </select>
        </div>
        <button className="px-4 py-2 border border-border rounded text-sm hover:bg-background flex items-center gap-2">
           <Filter size={16} /> Filter
        </button>
      </div>

      <TableShell 
        loading={loading} 
        empty={!filteredPayments.length}
        pagination
      >
        <thead>
          <tr className="bg-background/50 text-[10px] font-bold text-text-muted uppercase tracking-widest border-b border-border">
            <th className="px-4 py-3">Receipt #</th>
            <th className="px-4 py-3">Student Name</th>
            <th className="px-4 py-3">Amount (UGX)</th>
            <th className="px-4 py-3">Channel</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {filteredPayments.map((p) => (
            <tr key={p.id} className="text-sm hover:bg-background/30 transition-colors group">
              <td className="px-4 py-3 font-mono text-xs font-bold text-primary">{p.receipt_number}</td>
              <td className="px-4 py-3">
                <div className="flex flex-col">
                  <span className="font-medium text-text-primary">{p.student_name}</span>
                  <span className="text-[10px] text-text-muted">{p.class_name}</span>
                </div>
              </td>
              <td className="px-4 py-3 font-mono font-bold text-accent">{p.amount.toLocaleString()}</td>
              <td className="px-4 py-3">
                 <Badge variant="default" className="text-[9px] uppercase">{p.channel.replace('_', ' ')}</Badge>
              </td>
              <td className="px-4 py-3 text-text-muted">{p.payment_date}</td>
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button 
                    onClick={() => handlePrint(p.id)}
                    className="p-1.5 text-text-muted hover:text-primary-light hover:bg-primary/5 rounded"
                    title="Reprint Receipt"
                  >
                    <Printer size={16} />
                  </button>
                  <button className="p-1.5 text-text-muted hover:text-text-primary hover:bg-background rounded">
                    <FileSearch size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    </div>
  )
}
