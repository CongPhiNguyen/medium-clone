import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Phiroud blog</title>
        <link rel="shortcut icon" href="https://i.pinimg.com/564x/87/36/2a/87362aaf9773cdca520d134bf1fc9c4a.jpg"></link>
      </Head>
      <Header/>
      <div className='flex justify-bettween items-center mx-5 bg-[#f1d244] border-[#000] border-[1px] 
        py-4 mt-4 max-w-[1200px] lg:mx-auto
      '>
        <div className='px-5 space-y-5'> 
          <h1 className='text-5xl max-w-xl font-serif'>
            <span className='underline decoration-4'>Claymore</span> is a Japanese dark fantasy manga series.
          </h1>
          <h2>
            It debuted in Shueisha&apos;s shōnen manga magazine Monthly Shōnen Jump in June 2001, where it continued until the magazine was shut down in June 2007. Following a four-chapter monthly publication in Weekly Shōnen Jump
          </h2>
        </div>
        <div className='relative after:block after:pb-[100%] after:content-[""] w-full overflow-hidden'>
          <img
            className='hidden md:inline-flex w-[100%] object-cotain absolute px-4 ' 
            src="https://i.pinimg.com/564x/2e/cd/48/2ecd48650e09de8121bcb8a9555a945a.jpg" alt="" 
          />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home
