import { MOCK_MODE } from '../config/env'
import client from './client'
import { mockExpenses } from './mock/expenses.mock'

export async function getExpenses(filters) {
  if (MOCK_MODE) return mockExpenses
  const res = await client.get('/expenses', { params: filters })
  return res.data
}

export async function recordExpense(data) {
  if (MOCK_MODE) {
    console.log('Mock: Recording expense', data)
    return {
      id: Math.floor(Math.random() * 1000),
      ...data,
      recorded_by: "Sarah Nakato",
      date: new Date().toISOString().split('T')[0]
    }
  }
  const res = await client.post('/expenses', data)
  return res.data
}
