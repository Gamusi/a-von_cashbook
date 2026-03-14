import React from 'react'
import { Search, Bell, Moon, Sun } from 'lucide-react'
import { useAuthStore } from '../../store/authStore'
import { useInstitutionStore } from '../../store/institutionStore'

export function Topbar() {
  const activeYear = useInstitutionStore(s => s.activeYear) || '2025'
  const activeTerm = useInstitutionStore(s => s.activeTerm) || 'Term 1'
  
  // Theme toggle placeholder
  const toggleTheme = () => {
    const html = document.documentElement
    const current = html.getAttribute('data-theme')
    html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="h-16 bg-surface border-b border-border flex items-center justify-between px-6 z-10">
      {/* Global Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search students by name or ID..."
            className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light/20 focus:border-primary transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 pointer-events-none">
            <kbd className="bg-surface border border-border rounded px-1.5 text-[10px] font-sans text-text-muted">Ctrl</kbd>
            <kbd className="bg-surface border border-border rounded px-1.5 text-[10px] font-sans text-text-muted">K</kbd>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Active Term Desktop Badge */}
        <div className="hidden md:flex items-center gap-2 bg-background border border-border rounded-full px-4 py-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
          <span className="text-xs font-bold text-text-primary">{activeYear} &mdash; {activeTerm}</span>
        </div>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="p-2 text-text-muted hover:bg-background rounded-full transition-colors"
          title="Toggle Theme"
        >
          <Sun size={18} className="dark:hidden" />
          <Moon size={18} className="hidden dark:block" />
        </button>

        {/* Notifications */}
        <button className="p-2 text-text-muted hover:bg-background rounded-full transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-danger rounded-full border-2 border-surface"></span>
        </button>
      </div>
    </header>
  )
}
