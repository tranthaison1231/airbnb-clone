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
      <p>{room.distance}</p>
      <p>{room.date}</p>
      <p className="underline"><span className="font-bold">${room.price} </span>night</p>
    </div>
  )
}
