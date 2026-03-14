import { MOCK_MODE } from '../config/env'
import client from './client'
import { mockPayments } from './mock/payments.mock'

export async function getPayments(filters) {
  if (MOCK_MODE) return mockPayments
  const res = await client.get('/payments', { params: filters })
  return res.data
}

export async function recordPayment(data) {
  if (MOCK_MODE) {
    console.log('Mock: Recording payment', data)
    return {
      id: Math.floor(Math.random() * 1000),
      receipt_number: `2025/T1/${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
      ...data,
      recorded_by_name: "Sarah Nakato",
      created_at: new Date().toISOString()
    }
  }
  const res = await client.post('/payments', data)
  return res.data
}

export async function voidPayment(id, reason) {
  if (MOCK_MODE) {
    console.log(`Mock: Voiding payment ${id} for reason: ${reason}`)
    return { success: true }
  }
  const res = await client.post(`/payments/${id}/void`, { reason })
  return res.data
}
