import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { updateProfileSchema } from '@/utils/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import * as z from 'zod'

export type UpdateProfileInputs = z.infer<typeof updateProfileSchema>

interface Props {
  onSubmit: SubmitHandler<UpdateProfileInputs>
}

export default function UpdateProfileForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdateProfileInputs>({
    mode: 'onBlur',
    resolver: zodResolver(updateProfileSchema)
  })

  return (
    <>
      <h2 className="text-center font-bold">Update your profile</h2>
      <hr />
      <form className="space-y-4 p-6" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-medium"> Update profile </h1>
        <Input {...register('firstName')} placeholder="First Name" />
        {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
        <Input {...register('lastName')} placeholder="Last Name" />
        {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
        <Input {...register('dob')} placeholder="Date of Birth" type="date" />
        {errors.dob && <p className="text-sm text-red-500">{errors.dob.message}</p>}
        <Button className="w-full" size="lg" type="submit">
          Submit
        </Button>
      </form>
    </>
  )
}
