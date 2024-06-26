import UserAvatar from './Avatar'
import Login from './Login'
import LogOut from './Logout'

export default async function Profile({ session }) {
  // console.log('profile',session)
  return (
    <div>
      {session?.user ? (
        <div className='flex items-center'>
          <LogOut />
          <UserAvatar />
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}
