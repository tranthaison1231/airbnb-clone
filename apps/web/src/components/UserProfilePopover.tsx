import { AlignJustify, User2 } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import LoginModal from '../pages/(public)/_components/LoginModal'
import { Link } from '@/router'
import WinterReleaseModal from './modals/WinterReleaseModal'
import { getToken, removeToken } from '@/utils/token'
import { useState, useEffect } from 'react'

export default function UserProfilePopover() {
  const [isAuth, setIsAuth] = useState(!!getToken())

  useEffect(() => {
    const listener = () => {
      const isAuth = !!getToken()
      setIsAuth(isAuth)
    }

    window.addEventListener('local-storage', listener)

    return () => {
      window.removeEventListener('local-storage', listener)
    }
  }, [])

  const onLogout = () => {
    removeToken()
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-3 rounded-full border px-4 py-1">
          <AlignJustify className="w-6" />
          <div className="flex h-8 w-8 items-end justify-center rounded-full bg-gray-400 text-white">
            <User2 />
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-60 text-sm" align="end">
        <WinterReleaseModal />
        <hr />

        <hr />
        <Link to="/giftcards">
          <div className="my-2 w-full cursor-pointer p-3  text-muted-foreground hover:bg-gray-100">Gift cards</div>
        </Link>
        <Link to="/host/homes">
          <div className="my-2 w-full cursor-pointer p-3  text-muted-foreground hover:bg-gray-100">
            Airbnb your home
          </div>
        </Link>
        <Link to="/help">
          <div className="my-2 w-full cursor-pointer p-3  text-muted-foreground hover:bg-gray-100">Help Centre</div>
        </Link>
        {isAuth ? (
          <div className="my-2 w-full cursor-pointer p-3  hover:bg-gray-100" onClick={onLogout}>
            Logout
          </div>
        ) : (
          <>
            <div className="my-2 w-full cursor-pointer p-3  hover:bg-gray-100">Sign Up</div>
            <LoginModal />
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}
