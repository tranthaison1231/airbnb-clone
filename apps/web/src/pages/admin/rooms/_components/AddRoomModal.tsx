import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'

export default function AddRoomModal() {
  const { register, handleSubmit } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button> Create </Button>
      </DialogTrigger>
      <DialogContent className="px-0 sm:max-w-[600px]">
        <h2 className="text-center font-bold"> Create Room</h2>
        <hr />
        <form className="space-y-4 p-6" onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('email')} placeholder="Email" type="email" />
          <Input {...register('password')} placeholder="Password" type="password" />
          <Button className="w-full" size="lg" type="submit">
            Save
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
