import { LOGIN, PUBLIC_ROUTES, ROOT } from '@/lib/routes'
import NextAuth from 'next-auth'
import { authConfig } from './auth.config'

const { auth } = NextAuth(authConfig)

export default auth((request) => {
  const { nextUrl } = request

  const isAuthenticated = !!request.auth
  console.log('isAuthenticated', isAuthenticated, nextUrl.pathname)

  const isPublicRoute =
    PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
    nextUrl.pathname === ROOT
  console.log('isPublicRoute', { isPublicRoute })

  if (!isAuthenticated && !isPublicRoute) {
    return Response.redirect(new URL(LOGIN, nextUrl))
  }
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
