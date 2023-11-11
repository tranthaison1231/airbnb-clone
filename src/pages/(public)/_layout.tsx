import { BedDouble, Building, Home } from 'lucide-react'
import { Outlet, Link, useSearchParams } from 'react-router-dom'
import Header from '@/components/Header'

const CATEGORIES = [
  {
    id: '123',
    name: 'Rooms',
    icon: <BedDouble />
  },
  {
    id: '234',
    name: 'Iconic cites',
    icon: <Building />
  },
  {
    id: '345',
    name: 'Tiny homes',
    icon: <Home />
  }
]

export default function Component() {
  const [searchParams] = useSearchParams()
  const categoryTag = searchParams.get('category_tag')

  return (
    <div>
      <Header className="px-20" />
      <div className="px-20 py-5">
        <div className="mb-4 flex gap-8">
          {CATEGORIES.map(category => (
            <Link
              to={`/?category_tag=${category.id}`}
              key={category.id}
              className="flex w-fit cursor-pointer flex-col items-center"
            >
              {category.icon}
              <span className="mb-2">{category.name}</span>
              {categoryTag === category.id && <hr className="h-1 w-full bg-black" />}
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  )
}
