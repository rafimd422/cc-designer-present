import Card from '@/Components/Card'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Logo from '@/Assets/CC-golden.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-4 py-8 p-2 ${inter.className}`}
    >
<Image 
alt='Cultural Classistists'
height={3}
width={400}
className='my-8'
src={Logo} />
<p className='text-[1.125rem] my-1'>Description</p>
<div className="flex flex-wrap md:container mx-auto gap-6 justify-center">
<Card />

</div>
    </main>
  )
}
