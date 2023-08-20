import '../styles/globals.scss';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import WhatsApp from '@/components/Commons/WhatsApp';
import Conocenos from '@/components/Conocenos';
import Footer from '@/components/Footer';
import Redes from '@/components/Redes';
import EdadModal from '@/components/EdadModal';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <EdadModal />
      <Header />
      <WhatsApp /> 
      <Banner />
      <Conocenos />
      <Redes />
      <Footer />
      <Menu />
      <p className='text-center py-4 bg-white text-black'><a href='https://www.thehipposoft.com/' rel='noreferrer' target='_blank'>Created by <span className='font-semibold'>HippoSoft</span> | All Right Reserved</a></p>
    </main>
  )
}
