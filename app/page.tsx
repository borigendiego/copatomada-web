import '../styles/globals.scss'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import WhatsApp from '@/components/Commons/WhatsApp'
import Conocenos from '@/components/Conocenos'
import Footer from '@/components/Footer'
import Redes from '@/components/Redes'
import Nosotros from '@/components/Nosotros'

export default function Home() {
  return (
    <main className="">
      <Header />
      <WhatsApp /> 
      <Banner />
      <Conocenos />
      <Redes />
      <Footer />
      <p className='text-center py-4 bg-white text-black'>Created by <span className='font-semibold'>HippoSoft</span> | All Right Reserved</p>
    </main>
  )
}
