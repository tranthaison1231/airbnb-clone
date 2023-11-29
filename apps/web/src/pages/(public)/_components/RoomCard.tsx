import { Room } from '@/apis/rooms'
import Carousel from '@/components/ui/carousel'

interface RoomProps {
  room: Room
}

export default function RoomCard({ room }: RoomProps) {
  return (
    <div className="group cursor-pointer space-y-1">
      <Carousel images={room.images} className="rounded-xl" imgClassName="aspect-square" />
      <p>{room.name}</p>
      <p>{room.price}</p>
      <p>{room.date}</p>
      <p>{room.distance}</p>
    </div>
  )
}
