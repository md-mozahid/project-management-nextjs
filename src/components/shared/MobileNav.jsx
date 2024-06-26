'use client'

import { AlignJustify, X } from 'lucide-react'
import { useState } from 'react'
import CustomLink from '../others/CustomLink'

export default function MobileNav() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="cursor-pointer z-30 relative md:hidden">
      <AlignJustify />
      {toggle && (
        <div className="fixed top-0 bottom-0 left-0 z-10 p-4 w-[25%] h-[100vh] flex items-end justify-end flex-col bg-slate-700">
          <X
            onClick={() => setToggle(false)}
            className="text-2xl text-rose-500"
          />
          <ul className="h-full w-full flex flex-col items-center justify-start mt-12 space-y-4 uppercase">
            <li className="md:text-xl hover:text-rose-500">
              <CustomLink path="/">Home</CustomLink>
            </li>
            <li className="md:text-xl hover:text-rose-500">
              <CustomLink path="/craneSchedule">Crane Schedule</CustomLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
