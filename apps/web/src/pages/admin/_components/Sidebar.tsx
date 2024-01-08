import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

const SIDE_BAR = [
  {
    title: 'Dashboard',
    path: '/'
  },
  {
    title: 'Room',
    path: '/rooms'
  },
  {
    title: 'Category',
    path: '/categories'
  }
]

export default function Sidebar() {
  const currentPath = useLocation().pathname

  return (
    <ul className="w-64 border-r p-4">
      {SIDE_BAR.map(item => (
        <li
          key={item.title}
          className={clsx('cursor-pointer px-6 py-2', {
            'bg-primary': currentPath === `/admin${item.path}`,
            'text-white': currentPath === `/admin${item.path}`
          })}
        >
          <Link to={`/admin${item.path}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}
