import { auth } from '@/auth'
import Profile from '../auth/Profile'
import CustomLink from '../others/CustomLink'
import MobileNav from './MobileNav'

export default async function Navbar() {
  const session = await auth()
  return (
    <>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between border-b pb-2 md:py-3 px-5">
          <MobileNav />
          <CustomLink path="/addProject">
            <button className="btn btn-primary btn-fw">
              <span className="text-xl">+</span> Add Project
            </button>
          </CustomLink>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-5 uppercase">
              <li className="hover:text-rose-500">
                <CustomLink path="/">Home</CustomLink>
              </li>
              <li className="hover:text-rose-500">
                <CustomLink path="/projects">Project List</CustomLink>
              </li>
              <li className="hover:text-rose-500">
                <CustomLink path="craneSchedule">Crane Schedule</CustomLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center space-x-5 ">
            <Profile session={session} />
          </div>
        </nav>
      </div>
    </>
  )
}
