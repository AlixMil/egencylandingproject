import { useState } from 'react'
import logo from './assets/eGENCY.svg'
import scooterGuy from './assets/Saly-3.svg'
import oneoneImg from './assets/1 1.svg'
import bikeGuy from './assets/Saly-5.svg'
import babyImage from './assets/Saly-22.svg'
import subscribeImg from './assets/Saly-6.svg'

import bagIcon from './assets/Bag 2.svg'
import ticketIcon from './assets/Ticket Star.svg'
import moreCircleIcon from './assets/More Circle.svg'
import moreSquareIcon from './assets/More Square.svg'
import discountIcon from './assets/Discount.svg'
import shoppingIcon from './assets/Buy.svg'

import CardBlockText from './components/CardBlockText'
import CardWithIcon from './components/CardWithIcon'

function App() {
  const [articles, setArticles] = useState([
    { 
      text: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.',
      isActive: true
    },
    {
      text: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.',
      isActive: false
    },
    {
      text: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.',
      isActive: false
    }
  ])

  const Link = (props) => (<a href='/' className='hover:text-blue-600'>{props.children}</a>)

  const handleSetActiveArticle = (id) => {
    setArticles(prev => {
      const prevState = [...prev]
      prevState.map((el, index) => index !== id ? el.isActive = false : el.isActive = true)
      return prevState
    })
  }


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
        <div className='flex flex-row justify-around pb-20'>
          <div className='mt-14'>
            {articles.map( (el, id) => {
              return <CardBlockText text={el.text} isActive={el.isActive} setActiveArticle={handleSetActiveArticle} index={id} key={id} />
            })}
          </div>
          <div className='w-[1000px] flex justify-center'>
            <img src={oneoneImg} className='' />
          </div>
        </div>
      </section>
      <section>
        <div className='w-full bg-green-300 h-[340px]'>
            <div className='flex justify-between'>
              <h1 className='text-6xl max-w-2xl p-20'>
                Simplify your online shipping for free this month!
              </h1>
              <h1 className='text-6xl max-w-2xl p-20'>
                Grow your business with better Shipping organizations
              </h1>
            </div>
          <img src={bikeGuy} className='relative m-auto top-[-520px]' />

        </div>
        <div className='w-full lex justify-center'>

        </div>
        <div className='p-20'>
          <div className='flex justify-between'>
            <CardWithIcon text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum." icon={bagIcon} />
            <CardWithIcon text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum." icon={ticketIcon} />
          </div>
          <div className='flex justify-between'>
            <CardWithIcon text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum." icon={moreCircleIcon} />
            <CardWithIcon text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum." icon={moreSquareIcon} />
            <CardWithIcon text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum." icon={discountIcon} />
            <CardWithIcon text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum." icon={shoppingIcon} />
          </div>
        </div>
      </section>
      <section>
        <div className='flex justify-between mt-28 px-60'>
          <div>
            <img src={babyImage} />
          </div>
          <div className='max-w-lg'>
            <h3 className='text-2xl mt-6'>We scratch, build and play together</h3>
            <h1 className='text-6xl mt-6'>We scratch, build and play together</h1>
            <p className='mt-6 text-gray-400 text-xl'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
          </div>
        </div>
      </section>
      <section>
        <div className='flex bg-red-300 justify-around items-center'>
          <div className=''>
            <h1 className='text-6xl max-w-4xl'>Grow your business with better Shipping organizations</h1>
            <div className='mt-12'>
              <input type='text' className='rounded-md py-2 px-6' placeholder='Write your email address' />
              <input type='button' value='Subscribe' className='bg-red-500 rounded-md py-2 px-6 text-white cursor-pointer' />
            </div>
          </div>
          <div className='relative'>
            <img src={subscribeImg} className='absolute w-full top-[-140px]'/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
