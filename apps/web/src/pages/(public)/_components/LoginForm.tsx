import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { loginSchema } from '@/utils/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import * as z from 'zod'

export type LoginInputs = z.infer<typeof loginSchema>

interface Props {
  onSubmit: SubmitHandler<LoginInputs>
}


export default function LoginForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInputs>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema)
  })

  return (
    <>
      <h2 className="text-center font-bold">Log in or sign up</h2>
      <hr />
      <form className="space-y-4 p-6" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-medium"> Welcome to Airbnb </h1>
        <Input {...register('email')} placeholder="Email" type="email" />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        <Input {...register('password')} placeholder="Password" type="password" />
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
        <p className="text-sm text-muted-foreground">
          We’ll call or text you to confirm your number. Standard message and data rates apply.{' '}
          <span className="text-foreground underline">Privacy Policy </span>
        </p>
        <Button className="w-full" size="lg" type="submit">
          Continue
        </Button>
      </form>
    </>
  )
}
