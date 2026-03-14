import React, { useState, useEffect } from 'react'
import { PageHeader } from '../../components/layout/PageHeader'
import { TableShell } from '../../components/ui/TableShell'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { Input } from '../../components/ui/Input'
import { getStudents } from '../../api/students'
import { Plus, Search, Filter, MoreVertical, Eye, UserPlus } from 'lucide-react'
import { useDebounce } from '../../hooks/useDebounce'

export default function StudentList() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  useEffect(() => {
    getStudents()
      .then(data => setStudents(data))
      .finally(() => setLoading(false))
  }, [])

  const filteredStudents = students.filter(s => 
    `${s.first_name} ${s.last_name}`.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    s.student_id.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  )

  const actions = (
    <Button variant="primary">
      <UserPlus size={16} className="mr-2" />
      Enroll Student
    </Button>
  )

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Student Directory" 
        subtitle="Manage all students and their academic records"
        actions={actions}
      />

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 bg-surface p-4 rounded-xl border border-border shadow-sm">
        <div className="flex-1">
          <Input 
            label="Search Directory"
            placeholder="Search by name, ID or guardian..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-32">
          <label className="text-sm font-medium text-text-primary block mb-1.5 whitespace-nowrap">Class</label>
          <select className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light">
            <option>All Classes</option>
            <option>P.1</option>
            <option>P.6</option>
            <option>P.7</option>
          </select>
        </div>
        <Button variant="secondary" className="whitespace-nowrap">
           <Filter size={16} className="mr-2" /> 
           More Filters
        </Button>
      </div>

      {/* Table Section */}
      <TableShell 
        loading={loading} 
        empty={!filteredStudents.length}
        emptyMessage="No students match your search criteria"
        pagination
      >
        <thead>
          <tr className="bg-background/50 text-[10px] font-bold text-text-muted uppercase tracking-widest border-b border-border">
            <th className="px-4 py-3">Student ID</th>
            <th className="px-4 py-3">Full Name</th>
            <th className="px-4 py-3">Class</th>
            <th className="px-4 py-3">Guardian</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {filteredStudents.map((s) => (
            <tr key={s.id} className="text-sm hover:bg-background/30 transition-colors group">
              <td className="px-4 py-3 font-mono text-xs font-bold text-primary-light">{s.student_id}</td>
              <td className="px-4 py-3 font-medium text-text-primary">
                {s.first_name} {s.last_name}
              </td>
              <td className="px-4 py-3">
                <span className="text-xs font-bold text-text-muted">{s.class_name}</span>
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-col">
                  <span className="font-medium text-text-primary">{s.guardian_name}</span>
                  <span className="text-[10px] text-text-muted">{s.guardian_phone}</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <Badge variant={s.status === 'active' ? 'active' : 'voided'}>
                  {s.status}
                </Badge>
              </td>
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1.5 text-text-muted hover:text-primary-light hover:bg-primary/5 rounded">
                    <Eye size={16} />
                  </button>
                  <button className="p-1.5 text-text-muted hover:text-text-primary hover:bg-background rounded">
                    <MoreVertical size={16} />
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
