import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div> 
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div> 
            <div className='w-3 h-3 bg-green-500 rounded-full'></div> 
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
               <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
              <Library />
              Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-100'>Hits Brasil 20</a>
            <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-100'>My playlist #5</a>
            <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-100'>Niver All</a>
            <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-100'>Sertanejo 10's</a>
            <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-100'>As mais tocadas</a>
            <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-100'>Today's Hits</a>
            <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-100'>Furacão 2000</a>
            <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-100'>International 20</a>
          </nav>

        </aside>
        <main className='flex-1 p-6'>
          <div className='flex item-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Evening</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transiction-colors'>
              <Image src="/titas.jpg" width={96} height={96} alt="Image" />
              <strong>Titãs Acústico</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>

            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transiction-colors'>
              <Image src="/furacao.jpg" width={96} height={96} alt="Image" />
              <strong>Furacão 2000</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>

            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transiction-colors'>
              <Image src="/titas.jpg" width={96} height={96} alt="Image" />
              <strong>Titãs Acústico</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>

            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transiction-colors'>
              <Image src="/furacao.jpg" width={96} height={96} alt="Image" />
              <strong>Furacão 2000</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>

            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transiction-colors'>
              <Image src="/titas.jpg" width={96} height={96} alt="Image" />
              <strong>Titãs Acústico</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>

            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transiction-colors'>
              <Image src="/furacao.jpg" width={96} height={96} alt="Image" />
              <strong>Furacão 2000</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black'/>
              </button>

            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for  ChukyNoris</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/furacao.jpg" className='w-full' width={120} height={120} alt="Image" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Bonde do Tigrão</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/titas.jpg" className='w-full' width={120} height={120} alt="Image" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Titãs</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/furacao.jpg" className='w-full' width={120} height={120} alt="Image" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Bonde do Tigrão</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/titas.jpg" className='w-full' width={120} height={120} alt="Image" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Titãs</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/furacao.jpg" className='w-full' width={120} height={120} alt="Image" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Bonde do Tigrão</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/titas.jpg" className='w-full' width={120} height={120} alt="Image" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Titãs</span>
            </a>
          </div>

        </main>
      </div>
      <Footer />
        
        

      
    </div>
  )
}
 