import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="my-2 w-full cursor-pointer p-3  text-muted-foreground hover:bg-gray-100">Login</div>
      </DialogTrigger>
      <DialogContent className="px-0 sm:max-w-[600px]">
        <h2 className="text-center font-bold">Log in or sign up</h2>
        <hr />
        <div className="space-y-4 p-6">
          <h1 className="text-2xl font-medium"> Welcome to Airbnb </h1>
          <Input placeholder="Country/Region" />
          <Input placeholder="Phone number" />
          <p className="text-sm text-muted-foreground">
            We’ll call or text you to confirm your number. Standard message and data rates apply.{' '}
            <span className="text-foreground underline">Privacy Policy </span>
          </p>
          <Button className="w-full" size="lg">
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
