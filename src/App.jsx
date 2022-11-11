import { useState } from 'react'
import logo from './assets/eGENCY.svg'
import scooterGuy from './assets/Saly-3.svg'
import oneoneImg from './assets/1 1.svg'
import bikeGuy from './assets/Saly-5.svg'
import babyImage from './assets/Saly-22.svg'
import subscribeImg from './assets/Saly-6.svg'
import visa from './assets/visa.svg'
import americanexpress from './assets/americanexpress.svg'
import paypal from './assets/paypal.svg'
import mastercard from './assets/mastercard.svg'
import stripe from './assets/stripe.svg'
import bitcoin from './assets/bitcoin.svg'
import bancontact from './assets/bancontact.svg'

import bagIcon from './assets/Bag 2.svg'
import ticketIcon from './assets/Ticket Star.svg'
import moreCircleIcon from './assets/More Circle.svg'
import moreSquareIcon from './assets/More Square.svg'
import discountIcon from './assets/Discount.svg'
import shoppingIcon from './assets/Buy.svg'

import CardBlockText from './components/CardBlockText'
import CardWithIcon from './components/CardWithIcon'
import DescribeCard from './components/DescribeCard'

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
        <div className='flex bg-red-300 justify-between items-center mt-48 pl-12'>
          <div className='w-full p-12 pt-32'>
            <h1 className='text-4xl max-w-4xl text-[#4F4F4F]'>Grow your business with better</h1>
            <h1 className='text-4xl max-w-4xl text-[#4F4F4F]'>Shipping organizations</h1>
            <div className='mt-12 flex justify-start w-96 pb-12'>
              <input type='text' className='rounded-md py-2 px-6 pr-36' placeholder='Write your email address' />
              <input type='button' value='Subscribe' className='bg-red-500 rounded-lg py-2 px-6 text-white cursor-pointer ml-8' />
            </div>
          </div>
          <div className='relative w-full'>
            <img src={subscribeImg} className='absolute w-[800px] mt-[-430px] ml-[-200px]'/>
          </div>
        </div>
      </section>
      <section>
        <div className='flex justify-between items-center m-16'>
          <h1 className='text-6xl max-w-2xl'>The best design for your studio website</h1>
          <a href='#'>Experienced team</a>
        </div>
        <div className='flex justify-around'>
          <DescribeCard label="Audit" colorTag="bg-red-400" />
          <DescribeCard label="Teamwork" colorTag="bg-yellow-400" />
          <DescribeCard label="Create" colorTag="bg-green-400" />
        </div>
      </section>
      <footer className='bg-[#2ED57380]'>
        <div className='px-36 pt-12 '>
          <div className='flex justify-between'>
            <div className='max-w-lg text-justify'>
              <img src={logo} className="mb-12" />
              <p>
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit entitum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo ripuit mentitum.
              </p>
            </div>
            <div>
              <h3 className='mb-12'>Pages</h3>
              <ul>
                <li>Templates</li>
                <li>Price</li>
                <li>Help</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className='mb-12'>Demos</h3>
              <ul>
                <li>Dark theme</li>
                <li>Light theme</li>
                <li>Classic theme</li>
              </ul>
            </div>
            <div>
              <h3 className='mb-12'>Resources</h3>
              <ul>
                <li>Documentation</li>
              </ul>
            </div>
          </div>
          <div className='border-b-2 border-black flex justify-end space-x-8 p-2 mt-4'>
            <a>New York</a>
            <a>Dubai</a>
            <a>Dhaka</a>
            <a>Mumbai</a>
            <a>Sydney</a>
          </div>
          <div className='flex justify-between mt-12 w-[500px] m-auto'>
            <img src={visa} className="cursor-pointer" />
            <img src={americanexpress} className="cursor-pointer" />
            <img src={paypal} className="cursor-pointer" />
            <img src={mastercard} className="cursor-pointer" />
            <img src={stripe} className="cursor-pointer" />
            <img src={bitcoin} className="cursor-pointer" />
            <img src={bancontact} className="cursor-pointer" />
          </div>
          <div className='flex justify-between mt-16'>
            <span>© All Rights Reserved.</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
