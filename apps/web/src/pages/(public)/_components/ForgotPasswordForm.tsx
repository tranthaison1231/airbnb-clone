import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { forgotPasswordSchema } from '@/utils/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import * as z from 'zod'

export type ForgotPasswordInputs = z.infer<typeof forgotPasswordSchema>

interface Props {
  onSubmit: SubmitHandler<ForgotPasswordInputs>
}

export default function ForgotPasswordForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordInputs>({
    mode: 'onBlur',
    resolver: zodResolver(forgotPasswordSchema)
  })

  return (
    <>
      <h2 className="text-center font-bold">Forgot Password</h2>
      <hr />
      <form className="space-y-4 p-6" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-medium"> Forgot Password </h1>
        <Input {...register('email')} placeholder="Email" type="email" />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        <Button className="w-full" size="lg" type="submit">
          Submit
        </Button>
      </form>
    </>
  )
}
