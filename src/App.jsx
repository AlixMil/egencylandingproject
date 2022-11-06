import { useState } from 'react'
import logo from './assets/eGENCY.svg'
import scooterGuy from './assets/Saly-3.svg'
import oneoneImg from './assets/1 1.svg'
import CardBlockText from './components/CardBlockText'

function App() {
  const [count, setCount] = useState(0)

  const Link = (props) => (<a href='/' className='hover:text-blue-600'>{props.children}</a>)

  return (
    <div className="w-full">

      <section className='bg-[#FFA50280]'>
        <header className='px-24 w-full h-24 flex justify-between items-center'>
          <div>
            <img src={logo} draggable={false} />
          </div>
          <div className='ml-32 w-96 flex justify-between'>
            <Link href='/'>About</Link>
            <Link href='/'>Products</Link>
            <Link href='/'>Contact</Link>
            <Link href='/'>Help</Link>
          </div>
          <div className='text-center flex justify-between'>
            <a href='/' className='font-semibold text-gray-500 py-2 px-6'>Sign In</a>
            <a href='/' className='bg-red-500 rounded-md py-2 px-6 text-white'>Sign Up</a>
          </div>
        </header>
        <div className='flex justify-around mt-20'>
          <img src={scooterGuy} draggable={false} className='' />
          <div className='max-w-[500px] flex flex-col justify-around mt-20 mr-40'>
            <h2 className='text-6xl font-semibold'>We scratch, build and play together</h2>
            <p className='text-gray-400 leading-relaxed tracking-wider text-justify'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
            <button className='w-32 h-12 border-red-500 border text-red-500'>Contact us</button>
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-row justify-around'>
          <div className='mt-14'>
            <CardBlockText text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum." />
            <CardBlockText text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum." />
            <CardBlockText text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum." />
          </div>
          <div>
            <img src={oneoneImg} className="w-[400px]" />
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default App
