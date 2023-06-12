import { Home as HomeIcon, Search, Library} from 'lucide-react'

export function Aside() {
    return (
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
    )
}