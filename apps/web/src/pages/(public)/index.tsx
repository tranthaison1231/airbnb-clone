import { Category, fetchCategories } from '@/apis/categories'
import { Room, fetchRooms } from '@/apis/rooms'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import CategoryList from './_components/CategoryList'
import FilterModal from './_components/FilterModal'
import RoomCard from './_components/RoomCard'

export default function Component() {
  const [searchParams] = useSearchParams()
  
  const [isLoading, setLoading] = useState(true)
  const [categories, setCategories] = useState <Category[]>([])
  const [rooms, setRooms] = useState<Room[]>([])
  const categoryListRef = useRef<HTMLDivElement>(null)

  const categoryTag = searchParams.get('category_tag') ?? categories[0]?.id

  const navigate = useNavigate()

  function onRightClick() {
    if (!categoryListRef.current) return
    const rect = categoryListRef.current.getBoundingClientRect()
    categoryListRef.current.scroll({
      behavior: 'smooth',
      left: rect.width
    })
  }

  function onLeftClick() {
    if (!categoryListRef.current) return
    const rect = categoryListRef.current.getBoundingClientRect()
    categoryListRef.current.scroll({
      behavior: 'smooth',
      left: rect.width * -1
    })
  }

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true)
      try {
        const categories = await fetchCategories()
        setCategories(categories)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getCategories()
  }, [])

  useEffect(() => {
    const getRooms = async (categoryId: string) => {
      setLoading(true)
      try {
        const rooms = await fetchRooms(categoryId)
        setRooms(rooms)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    categoryTag && getRooms(categoryTag)
  }, [categoryTag])


  return (
    <>
      <div className="mb-4 flex ">
        <div
          onClick={onLeftClick}
          className="mx-3 mt-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border"
        >
          <ChevronLeft />
        </div>
        <div ref={categoryListRef} className="no-scrollbar flex w-4/5 gap-8 overflow-x-auto">
          <CategoryList categories={categories} isLoading={isLoading} />
        </div>
        <div
          onClick={onRightClick}
          className="mx-3 mt-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border"
        >
          <ChevronRight />
        </div>
        <FilterModal />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {rooms.map(room => (
          <div
            key={room.id}
            onClick={() => {
              navigate(`/rooms/${room.id}`)
            }}
          >
            <RoomCard room={room} key={room.id} />
          </div>
        ))}
      </div>
    </>
  )
}
