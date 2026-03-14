import { MOCK_MODE } from '../config/env'
import client from './client'
import { mockDashboardData } from './mock/dashboard.mock'

export async function getDashboardStats() {
  if (MOCK_MODE) return mockDashboardData.stats
  const res = await client.get('/dashboard/stats')
  return res.data
}

export async function getRecentPayments() {
  if (MOCK_MODE) return mockDashboardData.recentPayments
  const res = await client.get('/dashboard/recent-payments')
  return res.data
}
