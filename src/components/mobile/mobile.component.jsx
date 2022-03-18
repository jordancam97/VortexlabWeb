// mobile.component.jsx
import React, {useEffect, useRef, useState} from 'react';
import videoBackground from './../../assets/video/Animación.mp4'
import webAnim from './../../assets/video/WebAnim_1.mp4'
import logoVortex from './../../assets/img/Vortex.png'
import mesh from './../../assets/img/malla.png'
import waves from './../../assets/img/waves.png'
import balls from './../../assets/img/balls.png'
import point from './../../assets/img/point.png'
import flatmesh from './../../assets/img/mallaPlana.png'
// import Base from './../assets/img/3D-Base.png'
// import veticalmesh from './../assets/img/mallaVertical.png'
// import anillos from './../assets/img/anillos.png'
// import particleTwo from './../assets/img/ParticleDos.png'
// import invertedmesh from './../assets/img/mallaInvertida.png'
// import particle from './../assets/img/particle.png'
// import waveshorizontal from './../assets/img/WavesHorizontal.png'
// import vortexfooter from './../assets/img/Vortex-Footer.png'
// import logolinkedin from './../assets/img/Logo-Linkedin.png'
import './mobile.styles.css';

export const Mobile = () => {
    return (
        <>
            <div className='principalMobile'>
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        width:"100%",
                        height:"80%",
                        left:"-10%",
                        zIndex:-3,
                        objectFit:"cover",
                        transform: "translate(10%,18%)",
                    }}
                >
                    <source src={videoBackground}/>
                </video>
                <div className='onePageMobile'>
                    <div className='onePage__logoMobile'>
                        <img className='onePage__logoMobile onePage__logoMobile--margin ' src={logoVortex} alt="logo"/>
                    </div>
                    <div className='onePage__separatorMobileOne onePage__separatorMobile--color'></div>
                    <div className='onePage__HeaderMobileOne'>
                        <a href='#threePage'><p className=' onePage__HeaderMobile--spacing fontSizeTwo textColorWhite'>Nuestra Empresa</p></a>
                        <a href='#sevenPage'><p className=' onePage__HeaderMobile--spacing fontSizeTwo textColorWhite'>Nuestros Servicios</p></a>
                    </div>
                    <div className='onePage__HeaderMobileTwo'>
                        <a href='#twelvePage'><p className='onePage__HeaderMobile--spacing fontSizeTwo textColorWhite'>Algunos Conceptos</p></a>
                        <a href='#thirteenPage'><p className='onePage__HeaderMobile--spacing fontSizeTwo textColorWhite'>Contacto</p></a>
                    </div>
                     <div className='background onePage__separatorMobileTwo onePage__separatorMobile--color'></div>
                    <p className="onePage__txtSiMobile textColorWhite fontSizeFive">
                        Es hora de adaptar su empresa a<br/> las nuevas tecnologías <br/>blockchain, web 3.0, defi, fintech, metaverso, A.I  y criptomonedas.
                    </p>
                    <img className="onePage__meshMobile" src={mesh} alt="mesh"/>
                    <div className=' onePage__separatorMobileThree onePage__separatorMobile--color'></div>
                </div>


                <div className='twoPageMobile '>
                    <div className='twoPageMobileContainer'>
                        <div className='twoPageMobileContainer displayInlineFlex flexDirectionRow fontWeightBold'>
                            <p className=" twoPageMobileContainer__text fontWeightBold textColorWhite fontSizeTwoSeven">Metaverso -</p>
                            <p className="twoPageMobileContainer__text fontWeightBold textColorCian fontSizeTwoSeven">&nbsp;Cadena de Bloques</p>
                        </div>
                        <div className='flexDirectionRow fontWeightBold displayInlineFlex marginTopTwo'>
                            <p className="textColorCian fontSizeTwoSeven fontWeightLighter ">Web 3.0 -</p>
                            <p className="textColorWhite fontSizeTwoSeven fontWeightLighter">&nbsp;Cripto Seguridad</p>
                        </div>
                        <div className='flexDirectionRow displayInlineFlex fontWeightBold marginTopTwo'>
                            <p className="textColorWhite fontWeightBold fontSizeTwoSeven">Aplicaciones descentralizadas</p>
                        </div>
                    </div>
                    <div className='twoPageMobileContainer twoPageMobileContainer--display'>
                        <div className='displayFlexEnd'>
                            <p className="textColorWhite fontSizeTwoFive fontWeightLighter">Lo invitamos a prepararse <br/>para el <b>Futuro...</b></p>
                        </div>
                        <p className="textColorWhite fontSizeTwoFive fontWeightLighter marginTopTwo displayFlexEnd">...Hoy</p>
                    </div>
                    <img className="twoPageMobile__flower" src={waves} alt="waves"/>
                </div>
                <div className='threePageMobile' id='threePage'>
                    <div className='threePageContainerMobile'>
                        <h1 className="threePageContainerMobile__TitleNe textColorCian fontSizeFour fontWeightBold ">Nuestra Empresa.</h1>
                        <p className="threePageContainerMobile__TextSo textColorWhite fontSizeTwoFive fontWeightLighter">
                            Somos una empresa de innovación, con amplio conocimiento en el desarrollo de soluciones en cadena de bloques.
                        </p> 
                        <p className="threePageContainerMobile__TextNu textColorWhite fontSizeTwoFive fontWeightLighter ">
                            Nuestros desarrollos y servicios son confiables, pues cumplimos con los estándares internacionales para desarrollos de software descentralizado.
                            Contratando con nosotros usted puede ser partícipe<br/>de los avances, mediante visitas y reportes periódicos, que demuestran nuestro compromiso para su solución.
                        </p>
                    </div>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            left:85,
                            top: 15,
                            width: "55%",
                            position: 'relative',
                            zIndex:-1,

                        }}
                    >
                        <source src={webAnim}/>
                    </video>
                </div>

                <div className='fourPageMobile'>
                    <div className='fourPageContainerMobile'>
                        <h1 className="fourPageContainerMobile__TituloPo textColorCian fontSizeFour fontWeightBold ">¿Por qué somos importantes para su empresa?</h1>
                    </div>
                    <div className='fourPageContainerMobile__Paragraph'>
                        <p className=" textColorWhite fontSizeTwoEight fontWeightLighter ">Somos importantes porque:</p>
                    </div>
                    <div className='fourPageContainerMobile' ref={el => point = el }>
                        <img className='fourPageContainerMobile__ListPoint' src={point} alt="circle"/>
                        <p className='fourPageContainerMobile__ListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Podemos hacer que su empresa se adapte a las nuevas tecnologías, cuyos cambios se revierten en menor tiempo, menor costo, mas seguridad y mayor confiabilidad 
                            de su servicio.
                        </p>
                        <br/><br/>

                        <img className='fourPageContainerMobile__ListPoint' src={point} alt="circle"/>
                        <p className='fourPageContainerMobile__ListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Somos de las pocas empresas, con desarrollo mostrables en cadena de bloques.</p>
                        <br/><br/>

                        <img className='fourPageContainerMobile__ListPoint' src={point} alt="circle"/>
                        <p className='fourPageContainerMobile__ListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Contamos con un equipo de desarrolladores especializados y con experiencia en el tema.</p>
                        <br/><br/>

                        <img className='fourPageContainerMobile__ListPoint' src={point} alt="circle"/>
                        <p className='fourPageContainerMobile__ListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Estamos respaldados con otras empresas y personas conocidas por su innovación.</p>
                        <br/><br/>

                        <img className='fourPageContainerMobile__ListPoint' src={point} alt="circle"/>
                            <p className='fourPageContainerMobile__ListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Usted puede visitarnos en nuestras oficinas y verificar el paso a paso de su proceso.</p>            
                    </div>
                    <div className='fourPageMobile__flatmesh'>
                        <img className='fourPageMobile__flatmesh--size' src={flatmesh} alt='flatmesh'></img>
                    </div>
                </div>


                <div className='fivePageMobile'>
                     <div className='fivePageMobileContainer__H1 fivePageMobileContainer__H1--marginTop'>
                        <h1 className='textColorWhite fontSizeSix'>¿Para quienes es importante?</h1>
                    </div>
                    <div className='fivePageMobileContainer__H2 fivePageMobileContainer__H2--marginTop'>
                        <h2 className='textColorCian fontSizeThree'>Nuestros servicios son importantes si usted o su empresa
                        </h2><br/>
                    </div>
                    <div className='fivePageMobileContainer__List'>
                        <img className='fivePageMobileContainer__ListPoint' src={point} alt="circle"/>
                        <p className='fivePageMobileContainer__ListPointP fivePageMobileContainer__ListPointP--rightOne textColorWhite fontSizeTwoEight fontWeightLighter'>Presta servicios bancarios o financieros como créditos y CDTs.
                        </p>
                        <br/><br/>

                        <img className='fivePageMobileContainer__ListPoint' src={point} alt="circle"/>
                        <p className='fivePageMobileContainer__ListPointP fivePageMobileContainer__ListPointP--rightTwo textColorWhite fontSizeTwoEight fontWeightLighter'>Presta servicios por suscrip-<br/>ción como revistas, películas<br/> o videos.</p>
                        <br/><br/>

                        <img className='fivePageMobileContainer__ListPoint' src={point} alt="circle"/>
                        <p className='fivePageMobileContainer__ListPointP fivePageMobileContainer__ListPointP--rightThree textColorWhite fontSizeTwoEight fontWeightLighter'>Manejo servicios públicos<br/> como agua, energía, gas, teléfono, internet, streaming, etc.</p>
                        <br/><br/>

                        <img className='fivePageMobileContainer__ListPoint' src={point} alt="circle"/>
                        <p className='fivePageMobileContainer__ListPointP fivePageMobileContainer__ListPointP--rightFour textColorWhite fontSizeTwoEight fontWeightLighter'>Desea desarrollar una mone-<br/>da virtual o criptoactivo.</p>
                        <br/><br/>

                        <img className='fivePageMobileContainer__ListPoint' src={point} alt="circle"/>
                        <p className='fivePageMobileContainer__ListPointP fivePageMobileContainer__ListPointP--rightFive textColorWhite fontSizeTwoEight fontWeightLighter'>Desea desarrollar un video-<br/>juego, juego o apuesta.</p>
                        <br/><br/>

                        <img className='fivePageMobileContainer__ListPoint' src={point} alt="circle"/>
                        <p className='fivePageMobileContainer__ListPointP fivePageMobileContainer__ListPointP--rightSix textColorWhite fontSizeTwoEight fontWeightLighter'>Es un artista y desea comer-<br/>cializar su arte por usted mismo, sin intermediarios.</p>
                    </div>
                </div>


                <div className='sixPageMobile'>
                    <div className='sixPageMobileContainerList'>
                        <img className='sixPageMobileContainerList__Point' src={point} alt="circle"/>
                        <p className='sixPageMobileContainerList__Point--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Quiere comercializar un producto<br/> o un servicio de una manera más<br/> agil.
                        </p>
                        <br/><br/>

                        <img className='sixPageMobileContainerList__Point' src={point} alt="circle"/>
                        <p className='sixPageMobileContainerList__Point--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Desea tener un sistema de recompensas y fidelización.</p>
                        <br/><br/>

                        <img className='sixPageMobileContainerList__Point' src={point} alt="circle"/>
                        <p className='sixPageMobileContainerList__Point--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Desea apoyar las soluciones sostenibles del planeta.</p>
                        <br/><br/>

                        {/* <img className='sixPageMobileContainerList__Point' src={point} alt="circle"/>
                        <p className='sixPageMobileContainerList__Point--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Quiere tener un interventoría sobre un proyecto en cadena de bloques.</p>
                        <br/><br/> */}

                        {/* <img className='sixPage__containerListPoint' src={point} alt="circle"/>
                        <p className='sixPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Quiere especificar los terminos y condiciones de un proyecto en cadena de bloques para licitar.</p>
                        <br/><br/> */}
                    </div>
                </div>
            </div>
        </>
    )
}
