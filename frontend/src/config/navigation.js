import { 
  LayoutDashboard, 
  Users, 
  Wallet, 
  BookOpen,
  BarChart2, 
  Settings, 
  ClipboardList, 
  Building2,
  Receipt, 
  FileText,
  CreditCard,
  History,
  Search,
  Users2,
  Archive,
  LogOut,
  ShieldCheck
} from 'lucide-react'

export const NAVIGATION = [
  { 
    group: null, 
    items: [
      { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, roles: ['all'] }
    ]
  },
  { 
    group: 'Students', 
    items: [
      { label: 'Student List', path: '/students', icon: Users, roles: ['all'] },
      { label: 'Add Student',  path: '/students/new', icon: Users2, roles: ['bursar', 'super_admin', 'data_entry'] },
    ]
  },
  { 
    group: 'Payments', 
    items: [
      { label: 'Collect Payment', path: '/payments', icon: Wallet, roles: ['bursar', 'super_admin'] },
      { label: 'Payment History', path: '/payments/history', icon: Receipt, roles: ['bursar', 'headteacher', 'super_admin'] },
      { label: 'Receipt Lookup',  path: '/payments/lookup', icon: Search, roles: ['bursar', 'headteacher', 'super_admin'] },
    ]
  },
  {
    group: 'Accounting',
    items: [
      { label: 'Cashbook', path: '/cashbook', icon: BookOpen, roles: ['bursar', 'headteacher', 'super_admin'] },
      { label: 'Bank Accounts', path: '/banking', icon: Building2, roles: ['bursar', 'super_admin'] },
      { label: 'Bank Deposits', path: '/banking/deposits', icon: CreditCard, roles: ['bursar', 'super_admin'] },
    ]
  },
  {
    group: 'Expenses',
    items: [
      { label: 'All Expenses', path: '/expenses', icon: ClipboardList, roles: ['bursar', 'headteacher', 'super_admin'] },
      { label: 'New Expense', path: '/expenses/new', icon: Archive, roles: ['bursar', 'super_admin'] },
    ]
  },
  {
    group: 'Academic',
    items: [
      { label: 'Fee Categories', path: '/fees/categories', icon: FileText, roles: ['bursar', 'super_admin'] },
      { label: 'Fee Structures', path: '/fees/structures', icon: History, roles: ['bursar', 'super_admin'] },
    ]
  },
  {
    group: 'System',
    items: [
      { label: 'Reports', path: '/reports', icon: BarChart2, roles: ['bursar', 'headteacher', 'super_admin'] },
      { label: 'Settings', path: '/settings', icon: Settings, roles: ['super_admin'] },
      { label: 'Audit Log', path: '/audit', icon: ShieldCheck, roles: ['headteacher', 'super_admin'] },
    ]
  }
]
