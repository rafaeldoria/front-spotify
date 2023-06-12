import { Footer } from './components/Footer';
import { Aside } from './components/Aside';
import { Main } from './components/Main';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  )
}
 