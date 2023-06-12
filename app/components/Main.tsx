import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image';

export function Main() {
    return (
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
    ) 
}