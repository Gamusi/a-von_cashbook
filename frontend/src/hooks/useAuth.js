import { useAuthStore } from '../store/authStore'

export function useAuth() {
  const user = useAuthStore(s => s.user)
  const role = useAuthStore(s => s.role)
  const logout = useAuthStore(s => s.logout)

  const hasRole = (roles) => {
    if (roles.includes('all')) return true
    return roles.includes(role)
  }

  return {
    user,
    role,
    logout,
    hasRole
  }
}
