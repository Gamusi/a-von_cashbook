import React from 'react'
import { PageHeader } from '../../components/layout/PageHeader'
import { Card } from '../../components/ui/Card'
import { 
  FileText, 
  Users, 
  TrendingUp, 
  PieChart, 
  Calendar, 
  ArrowRight,
  BookOpen
} from 'lucide-react'
import { Link } from 'react-router-dom'

const reports = [
  {
    title: "Daily Collection Report",
    description: "Summary of all fee payments received today.",
    icon: Calendar,
    path: "/reports/daily-collection",
    roles: ["bursar", "headteacher", "super_admin"]
  },
  {
    title: "Fee Balance Report",
    description: "Outstanding balances per class or student.",
    icon: Users,
    path: "/reports/fee-balances",
    roles: ["bursar", "headteacher", "super_admin"]
  },
  {
    title: "Income vs Expenditure",
    description: "Financial performance overview for the term.",
    icon: TrendingUp,
    path: "/reports/income-expenditure",
    roles: ["headteacher", "super_admin"]
  },
  {
    title: "Cashbook Export",
    description: "Full transaction log for audit purposes.",
    icon: BookOpen,
    path: "/reports/cashbook",
    roles: ["bursar", "headteacher", "super_admin"]
  },
  {
    title: "Student Statement",
    description: "Detailed fee history for a single student.",
    icon: FileText,
    path: "/reports/student-statement",
    roles: ["bursar", "headteacher", "super_admin"]
  }
]

export default function ReportsHub() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Reports Hub" 
        subtitle="Analytic insights and financial documentation"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, idx) => {
          const Icon = report.icon
          return (
            <Link 
              key={idx} 
              to={report.path} 
              className="group bg-surface p-6 rounded-2xl border border-border shadow-sm hover:border-primary hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="bg-background w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/5 transition-colors">
                  <Icon size={24} className="text-primary-light" />
                </div>
                <h3 className="text-lg font-bold text-text-primary tracking-tight">{report.title}</h3>
                <p className="text-xs text-text-muted mt-2 leading-relaxed">{report.description}</p>
              </div>
              
              <div className="mt-6 flex items-center text-primary-light text-xs font-bold uppercase tracking-widest gap-2">
                Generate <ArrowRight size={14} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
