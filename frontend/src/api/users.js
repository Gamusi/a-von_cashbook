import { MOCK_MODE } from '../config/env'
import client from './client'
import { mockUsers } from './mock/users.mock'

export async function login(username, password) {
  if (MOCK_MODE) {
    // Basic mock login: any non-empty password works
    const user = mockUsers.find(u => u.username === username)
    if (user && password) {
      return {
        user,
        token: "mock-jwt-token-abcd"
      }
    }
    throw new Error("Invalid credentials")
  }
  
  const res = await client.post('/auth/login', { username, password })
  return res.data
}
