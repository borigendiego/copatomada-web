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
    </main>
  )
}
