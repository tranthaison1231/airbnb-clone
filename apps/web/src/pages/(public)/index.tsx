import { ROOMS } from '@/utils/data'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import FilterModal from './_components/FilterModal'
import RoomCard from './_components/RoomCard'
import { cn } from '@/utils/cn'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

const CATEGORIES = [
  {
    id: '1',
    name: 'Rooms',
    icon: 'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg'
  },
  {
    id: '234',
    name: 'Cabins',
    icon: '	https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg'
  },
  {
    id: '345',
    name: 'Beach',
    icon: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg'
  },
  {
    id: '456',
    name: 'A-frames',
    icon: 'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg'
  },
  {
    id: '789',
    name: 'Castels',
    icon: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg'
  },
  {
    id: '345',
    name: 'Beach',
    icon: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg'
  },
  {
    id: '456',
    name: 'A-frames',
    icon: 'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg'
  },
  {
    id: '789',
    name: 'Castels',
    icon: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg'
  },
  {
    id: '234',
    name: 'Cabins',
    icon: '	https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg'
  },
  {
    id: '345',
    name: 'Beach',
    icon: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg'
  },
  {
    id: '456',
    name: 'A-frames',
    icon: 'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg'
  },
  {
    id: '789',
    name: 'Castels',
    icon: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg'
  },
  {
    id: '345',
    name: 'Beach',
    icon: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg'
  },
  {
    id: '456',
    name: 'A-frames',
    icon: 'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg'
  },
  {
    id: '789',
    name: 'Castels',
    icon: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg'
  }
]

export default function Component() {
  const [searchParams] = useSearchParams()
  const categoryTag = searchParams.get('category_tag')
  const categoryListRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()

  function onRightClick () {
    if (!categoryListRef.current) return
    const rect = categoryListRef.current.getBoundingClientRect()
    categoryListRef.current.scroll({
      behavior:  'smooth',
      left:  rect.width
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
          {CATEGORIES.map(category => (
            <Link
              to={`/?category_tag=${category.id}`}
              key={category.id}
              className="h-13 group flex w-fit min-w-[4rem] cursor-pointer flex-col items-center"
            >
              <img
                src={category.icon}
                alt={category.name}
                className={cn('h-6 w-6 opacity-70 group-hover:opacity-100', {
                  'opacity-100': categoryTag === category.id
                })}
              />
              <span
                className={cn('mb-2 mt-2 text-xs text-gray-500 group-hover:text-black', {
                  'text-black': categoryTag === category.id
                })}
              >
                {category.name}
              </span>
              <hr
                className={cn('invisible h-1 w-full bg-gray-500 group-hover:visible', {
                  'visible bg-black': categoryTag === category.id
                })}
              />
            </Link>
          ))}
        </div>
        <div
          onClick={onRightClick}
          className="mx-3 mt-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border"
        >
          <ChevronRight />
        </div>
        <FilterModal />
      </div>

      <div className="grid grid-cols-6 gap-6">
        {ROOMS.map(room => (
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
