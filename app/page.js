import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-purple-700 p-10">
        <div className='border-2  rounded-full border-gray-200 bg-slate-50 font-sans p-16 md:p-40 space-y-12'>
          <div className='font-bold text-lg'> Next-Gen-Calculator</div>
          <div className='flex flex-col items-center space-y-5'>
          <Link href='/simple'><div className='bg-purple-500 cursor-pointer px-3 py-2 rounded-3xl text-white'> Simple Calculator </div></Link> 
          <Link href='/coder'> <div className='bg-purple-500 cursor-pointer px-3 py-2 rounded-3xl text-white'>Coder's Calculator </div></Link>
          </div>
        </div>
    </main>
  )
}
