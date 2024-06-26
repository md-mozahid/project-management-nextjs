'use client'

import { CircleHelp, CircleUserRound, LogOut, Settings } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Login from './Login'

export default function Profile({ session, fName, lName }) {
  const [toggle, setToggle] = useState(false)
  const picture = session?.user?.image
  // const user =
  // console.log(session)
  return (
    <>
      {session?.user ? (
        <div>
          <button onClick={() => setToggle(!toggle)}>
            {session?.user?.image ? (
              <Image
                src={picture}
                alt="profile picture"
                className="w-10 rounded-full mr-4"
                width={50}
                height={50}
              />
            ) : (
              <h2 className="bg-slate-600 text-white w-10 h-10 flex items-center justify-center text-xl rounded-full">
                {fName?.charAt(0)}
              </h2>
            )}
          </button>
          {toggle && (
            <div className="top-full  right-0 w-[320px] overflow-hidden [transition:max-height_0.5s] absolute">
              <div className="bg-slate-500 text-slate-800 p-5 m-3">
                <div className="flex items-center justify-start ml-3">
                  {session?.user?.image ? (
                    <Image
                      src={picture}
                      alt="profile picture"
                      className="w-10 rounded-full mr-4"
                      width={50}
                      height={50}
                    />
                  ) : (
                    <h2 className="bg-slate-600 text-white w-10 h-10 flex items-center justify-center text-xl rounded-full mr-4">
                      {fName?.charAt(0)}
                    </h2>
                  )}
                  <h3 className="text-lg uppercase">
                    {fName} {lName}
                  </h3>
                </div>
                <hr className="h-[1px] w-full mt-4 mb-3" />

                <Link href="#" className="flex items-center my-3">
                  <CircleUserRound className="w-20" />
                  <p className="w-full">Edit Profile</p>
                  <span className="text-xl">&gt;</span>
                </Link>
                <Link href="#" className="flex items-center my-3">
                  <Settings className="w-20" />
                  <p className="w-full">Setting & Privacy</p>
                  <span className="text-xl">&gt;</span>
                </Link>
                <Link href="#" className="flex items-center my-3">
                  <CircleHelp className="w-20" />
                  <p className="w-full">Help & Support</p>
                  <span className="text-xl">&gt;</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center my-3"
                  onClick={() => signOut()}>
                  <LogOut className="w-20" />
                  <p className="w-full">Logout</p>
                  <span className="text-xl">&gt;</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Login />
      )}
    </>
  )
}
