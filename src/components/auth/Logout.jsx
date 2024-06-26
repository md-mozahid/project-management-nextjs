'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'

export default function LogOut() {
  return (
    <Link href="#" onClick={() => signOut()}>
      LogOut
    </Link>
  )
}
