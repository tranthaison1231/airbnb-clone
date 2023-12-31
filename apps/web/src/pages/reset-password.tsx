import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { resetPasswordSchema } from '@/utils/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type ResetPasswordInputs = z.infer<typeof resetPasswordSchema>

export default function Component() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ResetPasswordInputs>({
    mode: 'onBlur',
    resolver: zodResolver(resetPasswordSchema)
  })

  const onSubmit = (data: ResetPasswordInputs) => {
    console.log(data)
  }

  return (
    <div>
      <Header className="mx-auto w-full max-w-6xl" />
      <hr />
      <div className="mx-auto max-w-6xl">
        <form className="space-y-4 p-6" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center text-2xl font-medium"> Forgot Password </h1>
          <Input {...register('password')} placeholder="Password" type="password" />
          {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          <Input {...register('confirmPassword')} placeholder="Confirm Password" type="password" />
          {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
          <Button className="w-full" size="lg" type="submit">
            Reset
          </Button>
        </form>
      </div>
    </div>
  )
}
