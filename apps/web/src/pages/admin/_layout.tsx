import { Navigate, Outlet } from 'react-router-dom'
import Header from './_components/Header'
import Sidebar from './_components/Sidebar'
import { getToken } from '@/utils/token'

export default function Component() {
  const accessToken = getToken()

  if (!accessToken) return <Navigate to="/" />

  return (
    <div className="w-full">
      <Header />
      <div className="flex h-[calc(100vh-48px)]">
        <Sidebar />
        <div className="p-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
