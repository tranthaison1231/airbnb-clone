import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import LoginForm, { type LoginInputs } from './LoginForm'
import { toast } from 'sonner'
import { signIn } from '@/apis/auth'
import { setToken } from '@/utils/token'

export default function LoginModal() {
  const onLoginSubmit = async (data: LoginInputs) => {
    try {
      const res = await signIn(data)
      setToken(res.accessToken)

      toast.success('Login successfully!')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="my-2 w-full cursor-pointer p-3  text-muted-foreground hover:bg-gray-100">Login</div>
      </DialogTrigger>
      <DialogContent className="px-0 sm:max-w-[600px]">
        <LoginForm onSubmit={onLoginSubmit} />
      </DialogContent>
    </Dialog>
  )
}
