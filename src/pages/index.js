import Card from '@/Components/Card'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-4 py-8 p-2 ${inter.className}`}
    >
<p className='primary'>Cultural Clasistists</p>
<p className='text-[1.125rem] my-1'>Description</p>
<div className="flex flex-wrap md:container mx-auto gap-6 justify-center">
<Card />

</div>
    </main>
  )
}
