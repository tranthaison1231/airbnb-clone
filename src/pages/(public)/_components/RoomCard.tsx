import Carousel from '@/components/ui/carousel'
import { Room } from '@/utils/type'

interface RoomProps {
  room: Room
}

export default function RoomCard({ room }: RoomProps) {
  return (
    <div className="group cursor-pointer space-y-1">
      <Carousel images={room.images} autoplay />
      <p>{room.name}</p>
      <p>{room.price}</p>
      <p>{room.date}</p>
      <p>{room.distance}</p>
    </div>
  )
}
