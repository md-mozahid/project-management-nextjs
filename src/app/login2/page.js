import Link from 'next/link'

export default function Login2() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-50px)]  bg-slate-700">
      <div className="bg-slate-400 w-96 p-10 rounded-md text-slate-800">
        <form>
          <h1 className="text-xl text-center">Login</h1>
          <div className="w-full h-10 my-7">
            <input
              className="w-full h-full px-2 rounded-md border-none outline-none"
              type="text"
              placeholder="Enter email"
            />
          </div>
          <div className="w-full h-10 my-7">
            <input
              className="w-full h-full px-2 rounded-md border-none outline-none"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link href="#" className="hover:underline">
              forgot password
            </Link>
          </div>
          <button
            type="submit"
            className="bg-purple-500 w-full py-1.5 mx-auto my-5 rounded-full flex items-center justify-center">
            Login
          </button>
          <div className="text-center text-sm">
            <p>
              Don&apos;t have account?{' '}
              <span className="text-sky-400 hover:underline cursor-pointer">
                Register
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
