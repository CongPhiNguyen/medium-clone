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
      <div className="text-[#ff0000]">Nguyễn Công Phi</div>
    </div>
  )
}

export default Home
