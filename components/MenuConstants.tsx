import BaseComp from "./Commons/BaseComp"
import Image from "next/image"
import RedLayout from "./Commons/RedLayout"

const MENU_DATA = [
    {
        id: 1,
        section: 'Provedores',
        content: <div>
                    <BaseComp 
                        image='/assets/images/provedores.png'
                        title='HOLA!' 
                        text='Bienvenido a nuestro sector de compras, ¿Estás interesado en ofrecernos tu productos? Contactanos!'
                        button='QUIERO OFRECER MIS PRODUCTOS'
                    />
                    <RedLayout text={['copa', 'tomada -', 'mercado', 'de bebeidas']}/>
                </div>
    },
    {
        id: 2,
        section: 'Locales',
        content:       <div className='flex'>
                            <div className='md:w-[900px]'>
                                <Image src={'/assets/images/locales.png'} width={750} height={400} alt='Image'/>
                            </div>
                            <div className='basecomp-r'>
                                <div className='md:w-[600px] md:h-4/5'>
                                    <div className="flex md:flex-col md:mb-8">
                                        <p className="font-bold md:pb-2">Copa Buenos Aires</p>
                                        <a href="" className="flex"><img src="/assets/images/location-svg.svg" className="md:mr-2" alt="" /><p className="hover:underline">Buenos Aires 1158</p></a>
                                        <a href="tel:+54 9 3512 60-3614" className="flex"><img src="/assets/images/whatsapp-svg.svg" className="md:mr-2" alt="" /><p className="hover:underline">+54 9 3512 60-3614</p></a>
                                    </div>
                                    <div className="flex md:flex-col">
                                        <p className="font-bold md:pb-2">Copa Trejo</p>
                                        <a href="" className="flex"><img src="/assets/images/location-svg.svg" className="md:mr-2" alt="" /><p className="hover:underline">Obispo Trejo 818</p></a>
                                        <a href="tel:+54 9 3512 60-3614" className="flex"><img src="/assets/images/whatsapp-svg.svg" className="md:mr-2" alt="" /><p className="hover:underline">+54 9 3512 60-3614</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
    },
    {
        id: 3,
        section: 'Delivery',
        content: <div>
                    <BaseComp 
                        image='/assets/images/delivery.png'
                        text='Nosotros te llevamos lo que quieras a tu casa. Agregá todo lo que querés al carrito y esperá la confirmación por WhatsApp'
                        button='HACER PEDIDO'
                    />
                    <RedLayout text={['nuestros productos', 'sin moverte', 'de tu', 'casa']}/>
                </div>
    },
    {
        id: 4,
        section: 'Cyclear',
        content: <div>
                    <BaseComp 
                        image='/assets/images/cyclear.png'
                        title='SOMOS SUSTENTABLES' 
                        text='Desde Copa Tomada nos sumamos al cuidado del medio ambiente. 
                        Somos punto de recepción y venta de bolsas mágicas de Cyclear,  formando parte del ciclo de reciclaje consciente de residuos para transformarlos en recursos y así disminuír nuestra huella de carbono, y vos... ¿Te copas?'
                    />
                    <RedLayout text={['copa sustentable -', 'punto de', 'recepción', 'cyclear']}/>
                </div>
    },
]

export { MENU_DATA }
   

       
