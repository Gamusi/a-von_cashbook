import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: null,
  role: null,
  token: null,
  isAuthenticated: false,

  login: (userData, token) => set({
    user: userData,
    role: userData.role,
    token: token,
    isAuthenticated: true
  }),

  logout: () => {
    // Clear storage in production
    if (window.__TAURI__) {
      // Logic for tauriStore will go here
    }
    set({ user: null, role: null, token: null, isAuthenticated: false })
  },

  hydrateFromStorage: async () => {
    // Logic for restoring session from Tauri/localStorage
    console.log('Hydrating auth from storage...')
  }
}))
