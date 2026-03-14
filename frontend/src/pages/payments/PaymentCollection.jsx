import React, { useState, useEffect } from 'react'
import { PageHeader } from '../../components/layout/PageHeader'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Badge } from '../../components/ui/Badge'
import { getStudents, getStudentBalance } from '../../api/students'
import { recordPayment } from '../../api/payments'
import { Search, Wallet, User, CreditCard, CheckCircle2, AlertCircle } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'

export default function PaymentCollection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [balance, setBalance] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      payment_method: 'cash'
    }
  })

  // Search students
  useEffect(() => {
    if (searchTerm.length >= 2) {
      getStudents({ q: searchTerm }).then(data => setStudents(data))
    } else {
      setStudents([])
    }
  }, [searchTerm])

  const handleSelectStudent = async (student) => {
    setLoading(true)
    setSelectedStudent(student)
    setSearchTerm('')
    setStudents([])
    try {
      const b = await getStudentBalance(student.id)
      setBalance(b)
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const result = await recordPayment({
        student_id: selectedStudent.id,
        amount: parseFloat(data.amount),
        channel: data.payment_method,
        channel_reference: data.reference
      })
      toast.success(`Payment recorded! Receipt: ${result.receipt_number}`)
      handleReset()
    } catch (err) {
      toast.error('Failed to record payment')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSelectedStudent(null)
    setBalance(null)
    reset()
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <PageHeader 
        title="Payment Collection" 
        subtitle="Record student fee payments and generate receipts"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Student Selection & Balance */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-tight flex items-center gap-2">
              <Search size={16} className="text-primary-light" />
              Find Student
            </h3>
            
            {!selectedStudent ? (
              <div className="relative">
                <Input 
                  placeholder="Search name or student ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {students.length > 0 && (
                  <div className="absolute z-20 w-full mt-1 bg-surface border border-border rounded-lg shadow-xl overflow-hidden divide-y divide-border">
                    {students.map(s => (
                      <button 
                        key={s.id}
                        onClick={() => handleSelectStudent(s)}
                        className="w-full px-4 py-3 text-left hover:bg-background transition-colors flex flex-col"
                      >
                        <span className="font-bold text-sm text-text-primary">{s.first_name} {s.last_name}</span>
                        <span className="text-[10px] text-text-muted font-mono">{s.student_id} &bull; {s.class_name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <User size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary leading-none">{selectedStudent.first_name} {selectedStudent.last_name}</p>
                    <p className="text-[10px] text-text-muted font-mono mt-1">{selectedStudent.student_id}</p>
                  </div>
                </div>
                <button onClick={handleReset} className="text-[10px] font-bold text-danger hover:underline">Change</button>
              </div>
            )}

            {selectedStudent && (
              <div className="pt-4 border-t border-dotted border-border space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-muted">Current Term:</span>
                  <span className="font-bold text-text-primary">Term 1 2025</span>
                </div>
                {balance ? (
                  <div className="bg-background/80 rounded-lg p-3 space-y-2">
                    <div className="flex justify-between items-center border-b border-border pb-2 mb-1">
                      <span className="text-xs font-bold uppercase text-text-muted tracking-tighter text-[9px]">Total Outstanding</span>
                      <span className="text-lg font-mono font-bold text-danger leading-none">
                        {balance.outstanding.toLocaleString()}
                      </span>
                    </div>
                    {balance.breakdown.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-[10px]">
                        <span className="text-text-muted">{item.fee_category}</span>
                        <span className="font-semibold text-text-primary">{item.balance.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                ) : loading && <div className="h-20 animate-pulse bg-background rounded-lg"></div>}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Payment Form */}
        <div className="lg:col-span-2">
          {!selectedStudent ? (
            <div className="h-full border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center p-10 text-center text-text-muted opacity-60">
               <div className="bg-background p-4 rounded-full mb-4">
                  <Wallet size={32} />
               </div>
               <p className="text-sm font-medium">Select a student from the left panel to begin recording a payment.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-surface p-8 rounded-2xl border border-border shadow-sm space-y-8 animate-in fade-in slide-in-from-right-4">
              <div className="flex items-center gap-3 text-primary border-b border-border pb-6">
                <Wallet size={24} />
                <h2 className="text-xl font-syne font-bold tracking-tight">Record Transaction</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Input 
                    label="Amount to Pay (UGX)"
                    placeholder="e.g. 100,000"
                    type="number"
                    {...register('amount', { required: 'Amount is required', min: { value: 1000, message: 'Minimum 1000' } })}
                    error={errors.amount?.message}
                  />

                  <div>
                    <label className="text-sm font-medium text-text-primary block mb-1.5 flex items-center gap-2">
                      <CreditCard size={14} className="text-text-muted" />
                      Payment Channel
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['cash', 'bank_slip', 'mobile_money'].map(method => (
                        <label key={method} className={`relative flex flex-col items-center p-3 border rounded-xl cursor-pointer transition-all ${watch('payment_method') === method ? 'bg-primary/5 border-primary ring-1 ring-primary' : 'border-border hover:bg-background'}`}>
                          <input 
                            type="radio" 
                            className="absolute opacity-0" 
                            value={method} 
                            {...register('payment_method')} 
                          />
                          <span className="capitalize text-[10px] font-bold text-center leading-tight">
                            {method.replace('_', ' ')}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Input 
                    label="Reference Number"
                    placeholder="Optional: Slip # or Tx ID"
                    {...register('reference')}
                  />

                  <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 p-4 rounded-xl">
                    <div className="flex gap-3">
                      <AlertCircle size={18} className="text-warning shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-tighter">Confirmation</p>
                        <p className="text-[11px] text-amber-700 dark:text-amber-500 mt-1">
                          Verify details before submission. Receipts cannot be edited after generation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex justify-end gap-4">
                <Button variant="ghost" type="button" onClick={handleReset}>Cancel</Button>
                <Button type="submit" loading={loading} className="px-8 shadow-lg shadow-primary/20">
                  <CheckCircle2 size={18} className="mr-2" />
                  Confirm & Print Receipt
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
