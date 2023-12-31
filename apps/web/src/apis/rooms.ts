export interface Room {
  id: string
  name: string
  price: number
  date: string
  distance: string
  images: string[]
}

export const fetchRooms = async (categoryId: string): Promise<Room[]> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/categories/${categoryId}/rooms`)
  const json = await res.json()
  return json.data
}

export const fetchRoom = async (roomId: string): Promise<Room> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${roomId}`)
  const json = await res.json()
  return json.data
}
