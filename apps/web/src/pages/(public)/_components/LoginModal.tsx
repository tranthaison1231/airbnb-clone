import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import LoginForm, { type LoginInputs } from './LoginForm'
import { useState } from 'react'
import UpdateProfileForm, { UpdateProfileInputs } from './UpdateProfileForm'

export default function LoginModal() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })


  const onLoginSubmit = (data: LoginInputs) => {
    setCredentials(credentials => ({
      ...credentials,
      email: data.email,
      password: data.password
    }))
  }

  const onUpdateProfileSubmit = (data: UpdateProfileInputs) => {
    console.log({
      ...data,
      ...credentials
    })
    
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="my-2 w-full cursor-pointer p-3  text-muted-foreground hover:bg-gray-100">Login</div>
      </DialogTrigger>
      <DialogContent className="px-0 sm:max-w-[600px]">
        {credentials?.email && credentials.password ? (
          <UpdateProfileForm onSubmit={onUpdateProfileSubmit} />
        ) : (
          <LoginForm onSubmit={onLoginSubmit} />
        )}
      </DialogContent>
    </Dialog>
  )
}
