import { getMe } from '@/apis/auth'
import { useQuery } from '@tanstack/react-query'

export default function UserProfile() {
  const { data: meQuery } = useQuery({
    queryKey: ['me'],
    queryFn: getMe
  })
  return <div>{meQuery.data?.fullName}</div>
}
