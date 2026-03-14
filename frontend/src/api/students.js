import { MOCK_MODE } from '../config/env'
import client from './client'
import { mockStudents, mockStudentBalances } from './mock/students.mock'

export async function getStudents(filters) {
  if (MOCK_MODE) return mockStudents
  const res = await client.get('/students', { params: filters })
  return res.data
}

export async function getStudent(id) {
  if (MOCK_MODE) return mockStudents.find(s => s.id === parseInt(id))
  const res = await client.get(`/students/${id}`)
  return res.data
}

export async function getStudentBalance(id) {
  if (MOCK_MODE) return mockStudentBalances[id] || null
  const res = await client.get(`/students/${id}/balance`)
  return res.data
}

export async function createStudent(data) {
  if (MOCK_MODE) {
    console.log('Mock: Creating student', data)
    return { id: Math.floor(Math.random() * 1000), ...data }
  }
  const res = await client.post('/students', data)
  return res.data
}
