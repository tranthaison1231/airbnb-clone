import { request } from '@/utils/request'
import { z } from 'zod'

export const roomSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  location: z.string(),
  images: z.array(z.string())
})

export type Room = z.infer<typeof roomSchema>

export const fetchMyRooms = async () => {
  const res = await request.get('/rooms')
  console.log(res.data.data)
  return roomSchema.array().parse(res.data.data)
}

export const fetchRooms = async (categoryId: string) => {
  const res = await request.get(`/categories/${categoryId}/rooms`)
  return roomSchema.array().parse(res.data.data)
}

export const fetchRoom = async (roomId: string) => {
  const res = await request.get(`/rooms/${roomId}`)
  return roomSchema.parse(res.data.data)
}
