import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'


export default function Component() {

  return (
    <div>
      <Header className="mx-auto max-w-7xl" hasSearch />
      <hr />
      <div className="mx-auto max-w-7xl py-5">
        <Outlet />
      </div>
    </div>
  )
}
