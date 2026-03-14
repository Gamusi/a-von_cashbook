import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export function RequireRole({ roles }) {
  const role = useAuthStore((state) => state.role)

  if (!roles.includes(role) && !roles.includes('all')) {
    // If user doesn't have the required role, redirect to dashboard
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}
