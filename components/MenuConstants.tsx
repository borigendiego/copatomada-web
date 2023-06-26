import BaseComp from "./Commons/BaseComp"
import Image from "next/image"
import RedLayout from "./Commons/RedLayout"

const MENU_DATA = [
    {
        id: 1,
        section: 'Nosotros',
        content: <div className="nosotros flex md:flex-row flex-col-reverse">
                    <div className="md:min-w-[474px]">
                        <Image src={'/assets/images/nosotros.png'} alt="Foto del equipo" width={570} height={700} />
                    </div>
                    <div className="flex flex-col justify-center md:w-[500px] md:h-[500px] text-white md:pl-8">
                        <h1><span className="empty-font pr-2">SOMOS</span>AMIGOS</h1>
                        <p><span className="font-bold">Somos un Grupo de amigos</span> que en 2017 decidió emprender, hoy contamos con 2 locales Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
    },
    {
        id: 2,
        section: 'Locales',
        content:       <div className='flex md:flex-row flex-col-reverse md:min-w-[1302px] md:min-h-[85vh]' id="locales">
                            <div className='md:w-[900px]'>
                                <Image src={'/assets/images/locales.png'} width={750} height={400} alt='Image'/>
                            </div>
                            <div className='basecomp-r'>
                                <div className='md:w-[600px] md:h-4/5 my-12 md:my-0'>
                                    <div className="flex flex-col md:mb-8 mb-5">
                                        <p className="font-bold pb-2">Copa Buenos Aires</p>
                                        <a href="" className="flex py-2"><img src="/assets/images/location-svg.svg" className="mr-2" alt="" /><p className="hover:underline">Buenos Aires 1158</p></a>
                                        <a href="tel:+54 9 3512 60-3614" className="flex py-2"><img src="/assets/images/whatsapp-svg.svg" className="mr-2" alt="" /><p className="hover:underline">+54 9 3512 60-3614</p></a>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-bold pb-2">Copa Trejo</p>
                                        <a href="" className="flex py-2"><img src="/assets/images/location-svg.svg" className="mr-2" alt="" /><p className="hover:underline">Obispo Trejo 818</p></a>
                                        <a href="tel:+54 9 3512 60-3614" className="flex py-2"><img src="/assets/images/whatsapp-svg.svg" className="mr-2" alt="" /><p className="hover:underline">+54 9 3512 60-3614</p></a>
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
                        linkTo="https://linktr.ee/CopaTomada"
                    />
                    <RedLayout text={['nuestros productos sin moverte de tu casa', 'nuestros productos sin moverte de tu casa', 'nuestros productos sin moverte de tu casa', 'nuestros productos sin moverte de tu casa']}/>
                </div>
    },
    {
        id: 4,
        section: 'Cyclear',
        content: <div>
                    <div className='flex md:flex-row flex-col-reverse md:min-w-[1302px] md:min-h-[85vh]' id="cyclear">
                            <div className='md:min-w-[474px] md:min-h-[85vh]'>
                                <Image src={'/assets/images/cyclear.png'} width={870} height={400} alt='Image'/>
                            </div>
                            <div className='basecomp-r'>
                                <div className='md:w-[700px] md:h-[85%] my-12 md:my-0 md:block flex flex-col items-center'>
                                    <h1 className='my-2 text-4xl'>SOMOS SUSTENTABLES</h1>
                                    <p className='my-2 md:w-3/4 11/12 px-6 md:px-0'>
                                        Desde Copa Tomada nos sumamos al cuidado del medio ambiente. 
                                        Somos punto de recepción y venta de bolsas mágicas de Cyclear,  
                                        formando parte del ciclo de reciclaje consciente de residuos para 
                                        transformarlos en recursos y así disminuír nuestra huella de carbono, y vos... ¿Te copas?
                                    </p>
                                </div>
                        </div>
                        </div>
                    <RedLayout text={['copa sustentable - punto de recepción cyclear', 'copa sustentable - punto de recepción cyclear', 'copa sustentable - punto de recepción cyclear', 'copa sustentable - punto de recepción cyclear']}/>
                </div>
    },
]

export { MENU_DATA }
   

       
