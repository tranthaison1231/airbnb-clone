import { request } from '@/utils/request'

interface SignUp {
  email: string
  password: string
}

export const signUp = async ({ email, password }: SignUp) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/sign-up`, {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })
  const data = await res.json()
  return data
}

export const resetPassword = async (token: string, password: string) => {
  const res = await request.post(
    '/reset-password',
    { password },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
  return res.data
}
