import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import LoginForm, { type LoginInputs } from './LoginForm'
import { toast } from 'sonner'
import { forgotPassword, signIn } from '@/apis/auth'
import { setToken } from '@/utils/token'
import { useState } from 'react'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import ForgotPasswordForm, { type ForgotPasswordInputs } from './ForgotPasswordForm'
import { AxiosError } from 'axios'

export default function LoginModal() {
  const [isLoading, setIsLoading] = useState(false)
  const [tab, setTab] = useState<'login' | 'forgot-password'>('login')
  const [isOpen, setIsOpen] = useState(false)

  const onLoginSubmit = async (data: LoginInputs) => {
    try {
      setIsLoading(true)
      const res = await signIn(data)
      setToken(res.accessToken)
      setIsOpen(false)
      toast.success('Login successfully!')
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const onForgotPassword = async (data: ForgotPasswordInputs) => {
    try {
      await forgotPassword(data)
      toast.success("We've sent you an email to reset your password.")
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
      }
    }
  }

  const onOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setTab('login')
    }
    setIsOpen(isOpen)
  }

  return (
    <Dialog onOpenChange={onOpenChange} open={isOpen}>
      <DialogTrigger asChild>
        <div className="my-2 w-full cursor-pointer p-3  text-muted-foreground hover:bg-gray-100">Login</div>
      </DialogTrigger>
      <DialogContent className="px-0 sm:max-w-[600px]">
        <Tabs value={tab}>
          <TabsContent value="login">
            <LoginForm
              onSubmit={onLoginSubmit}
              isLoading={isLoading}
              onForgotPasswordClick={() => setTab('forgot-password')}
            />
          </TabsContent>
          <TabsContent value="forgot-password">
            <ForgotPasswordForm onSubmit={onForgotPassword} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
