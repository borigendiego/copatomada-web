import Menu from '@/components/Menu'
import '../styles/globals.scss'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Provedores from '@/components/Provedores'
import WhatsApp from '@/components/Commons/WhatsApp'
import Conocenos from '@/components/Conocenos'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="">
      <Header />
      <WhatsApp /> 
      <Banner />
      <Conocenos />
      <Footer />
    </main>
  )
}
