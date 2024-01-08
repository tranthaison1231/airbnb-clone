import UserProfile from './UserProfile'

export default function Header() {
  return (
    <div className="flex w-full border-b">
      <div className="w-64 px-8 py-3"> Airnbnb Admin </div>
      <div className="flex justify-between px-8 py-2">
        <div> Search </div>
        <div className="flex gap-4">
          <div> Language </div>
          <div> Notification </div>
          <div> Message </div>
          <UserProfile />
        </div>
      </div>
    </div>
  )
}
