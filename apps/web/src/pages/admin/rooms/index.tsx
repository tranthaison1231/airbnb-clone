import { fetchMyRooms } from '@/apis/rooms'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useQuery } from '@tanstack/react-query'
import AddRoomModal from './_components/AddRoomModal'

export default function Room() {
  const { data: rooms } = useQuery({
    queryKey: ['rooms'],
    queryFn: () => fetchMyRooms()
  })

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold"> Room </h1>
        <AddRoomModal />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms?.map(room => (
            <TableRow key={room.id}>
              <TableCell>{room.name}</TableCell>
              <TableCell>{room.price}</TableCell>
              <TableCell>{room.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
