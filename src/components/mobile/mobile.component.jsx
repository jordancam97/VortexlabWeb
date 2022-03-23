// mobile.component.jsx
import React, {useEffect, useRef, useState} from 'react';
import videoBackground from './../../assets/video/Animación.mp4'
import webAnim from './../../assets/video/WebAnim_1.mp4'
import webAnimBase from './../../assets/video/Web_animation_2.mp4'
import logoVortex from './../../assets/img/Vortex.png'
import mesh from './../../assets/img/malla.png'
import waves from './../../assets/img/waves.png'
import balls from './../../assets/img/balls.png'
import point from './../../assets/img/point.png'
import flatmesh from './../../assets/img/mallaPlana.png'
import Base from './../../assets/img/3D-Base.png'
import veticalmesh from './../../assets/img/mallaVertical.png'
import anillos from './../../assets/img/anillos.png'
import particleTwo from './../../assets/img/ParticleDos.png'
import invertedmesh from './../../assets/img/mallaInvertida.png'
import particle from './../../assets/img/particle.png'
//import waveshorizontal from './../assets/img/WavesHorizontal.png'
import vortexfooter from './../../assets/img/Vortex-Footer.png'
import logolinkedin from './../../assets/img/Logo-Linkedin.png'
import './mobile.styles.css';
import NavbarComp from './../../../src/components/NavBar/NavbarComp';
import {TweenLite, TweenMax, Linear, Power1, Back, gsap} from 'gsap';

export const Mobile = () => {

    useEffect(() => {
        // TweenMax.from(point, 4, {x:"20%", ease: Linear.easeNone, repeat: 0});  animacion points
        TweenMax.to(mesh, 2, {
            css: {
              opacity: 1,
              scale: .95
            },
            ease: Linear.easeNone,
            repeat: -1,
            yoyo: true,
            
        });
        TweenMax.to(waves, 2, {
            css: {
              opacity: 1,
              scale: .95
            },
            ease: Linear.easeNone,
            repeat: -1,
            yoyo: true,
            
        });
        TweenMax.to(flatmesh, 2, {
            css: {
              opacity: 1,
              scale: .95,
              zIndex:-1,
                position: 'absolute',
            },
            ease: Linear.easeNone,
            repeat: -1,
            yoyo: true,
        });
        TweenMax.to(anillos, 2, {
            css: {
              opacity: 1,
              scale: .95,
              zIndex:-1,
            },
            ease: Linear.easeNone,
            repeat: -1,
            yoyo: true,
        });
        TweenMax.to(particleTwo, 2, {
            css: {
              opacity: 1,
              scale: .95,
              zIndex:-1,
            },
            ease: Linear.easeNone,
            repeat: -1,
            yoyo: true,
        });
        TweenMax.to(invertedmesh, 2, {
            css: {
              opacity: 1,
              scale: .95,
              zIndex:-1,
            },
            ease: Linear.easeNone,
            repeat: -1,
            yoyo: true,
        });
        TweenMax.to(particle, 2, {
            css: {
              opacity: 1,
              scale: .95,
              zIndex:-1,
            },
            ease: Linear.easeNone,
            repeat: -1,
            yoyo: true, 
        });
        
    }, []);

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
                        height:"100%",
                        left:"-10%",
                        zIndex:-3,
                        objectFit:"cover",
                        transform: "translate(10%,15%)",
                    }}
                >
                    <source src={videoBackground}/>
                </video>
                <div className='onePageMobile'>
                    <div className='onePage__logoMobile'>
                        <img className='onePage__logoMobile onePage__logoMobile--margin' src={logoVortex} alt="logo"/>
                    </div>
                    <div className='onePage__separatorMobileOne onePage__separatorMobile--color'></div>
                        <NavbarComp/>
                    <p className="onePage__txtSiMobile textColorWhite fontSizeFive">
                        Es hora de adaptar su empresa a<br/> las nuevas tecnologías <br/>blockchain, web 3.0, defi, fintech, metaverso, A.I  y criptomonedas.
                    </p>
                    <img className="onePage__meshMobile" src={mesh} alt="mesh" ref={el => mesh = el }/>
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
                    <img className="twoPageMobile__flower" src={waves} alt="waves" ref={el => waves = el }/>
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
                            left:50,
                            top: 15,
                            width: "75%",
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
                        <img className='fourPageMobile__flatmesh--size' src={flatmesh} alt='flatmesh' ref={el => flatmesh = el }></img>
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

                        <img className='sixPageMobileContainerList__Point' src={point} alt="circle"/>
                        <p className='sixPageMobileContainerList__Point--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Quiere tener un interventoría sobre un proyecto en cadena de bloques.</p>
                        <br/><br/>

                        <img className='sixPageMobileContainerList__Point' src={point} alt="circle"/>
                        <p className='sixPageMobileContainerList__Point--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Quiere especificar los terminos y condiciones de un proyecto en cadena de bloques para licitar.</p>
                        <br/><br/>

                        <img className='sixPageMobileContainerList__Point' src={point} alt="circle"/>
                        <p className='sixPageMobileContainerList__Point--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Desea flexibilizar, hacer más económico y seguro su proceso comercial.</p>
                        <br/><br/>

                        <img className='sixPageMobileContainerList__Point' src={point} alt="circle"/>
                        <p className='sixPageMobileContainerList__Point--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Comercializa soluciones en salud o seguros de vida.</p>
                        <br/><br/>

                        <img className='sixPageMobileContainerList__Point' src={point} alt="circle"/>
                        <p className='sixPageMobileContainerList__Point--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Generar trazabilidad para su organización.</p>
                        <br/><br/>
                        <video
                            autoPlay
                            loop
                            muted
                            style={{
                                position: 'absolute',
                                width:"80%",
                                height:"50%",
                                zIndex:-3,
                                objectFit:"cover",
                                transform: "translate(-5%,-15%)",
                            }}
                        >
                            <source src={webAnimBase}/>
                        </video>
                        <div className='sixPageMobile__separator sixPageMobile__separator--color'></div>
                    </div>
                </div>


                <div className='sevenPageMobile' id='sevenPage'>
                    <div className='sevenPageMobileContainer'>
                        <div className='sevenPageMobileContainer__title'>
                            <h1 className='textColorWhite fontSizeFour fontWeightBold'>Nuestros servicios en Cadena de Bloques</h1>
                        </div>
                        <div className='sevenPageMobileContainer_veticalmesh '>
                            <img className='sevenPageMobileContainer_veticalmeshSize' src={veticalmesh}  alt='verticalmesh'></img>
                        </div>
                        <div className='sevenPageMobileContainer__subTitle'>
                            <h1 className='textColorCian fontSizeFour fontWeightBold'>Desarrollo para Metaverso</h1><br/><br/>
                            <p className='sevenPageMobileContainer__subTitle--top textColorWhite fontSizeTwoEight fontWeightLighter'>Es un ambiente virtual, donde los usuarios pueden trabajar, jugar y vivir todo tipo de experiencias.<br/>
                                Usted puede tener actividades comerciales en oficinas, centros comerciales y casas. Esta nueva <br/> economía implica el uso de monedas virtuales.<br/><br/>
                                Desarrollos para monetización en el concepto de Metaverso, definido por el fundador de <br/> Facebook, moneda, pagos, compras y contratos inteligentes en cadena de bloques.
                            </p>
                            <h1 className='sevenPageMobileContainer__subTitle--top textColorCian fontSizeFour fontWeightBold'>Consultoría y auditoría de proyectos</h1><br/>
                            <p className='sevenPageMobileContainer__subTitle--top textColorWhite fontSizeTwoEight fontWeightLighter'>No importa si usted no ha contratado con nosotros, permítanos auditar su desarrollo como una 
                                segunda opinión,<br/> que le permita tener confianza en su proyecto antes de ser lanzado
                            </p>
                        </div> 
                    </div>
                    <div className='sevenPage__separator sevenPageMobile__separator--color'></div>
                </div>

                <div className='eightPageMobile'>
                    <div className='eightPageMobileContainer'>
                        <div className='eightPageMobileContainer__title'>
                            <h1 className='textColorCian fontSizeFour fontWeightBold'>Desarrollos Propios, Públicos y Privados.</h1>
                            <p className='eightPageMobileContainer__subTitle--top textColorWhite fontSizeTwoEight fontWeightLighter'>Su proyecto desarrollado en las más populares plataformas: Solana, Ethereum y BNB entre otras.</p>
                        </div>
                        <div className='eightPageMobileContainer__titleTwo'>
                            <h1 className='textColorCian fontSizeFour fontWeightBold'>Lenguajes usados:</h1>
                            <div className='eightPageMobileContainer__gradientBox'>
                                <p className='eightPageMobileContainer__text textColorWhite fontSizeTwo'>Solidity, Rust, C, Go, Truffle, TypeScript, JavaScript, Python, MQL5 y PHP.</p>
                            </div>
                            <p className='eightPageMobileContainer__subTitle--top textColorCian fontSizeTwo fontWeightLighter textAlignCenter'>Mantiene la privacidad de la información y con la seguridad que garantiza la cadena de bloques</p>
                        </div>
                        <img className='eightPageMobileContainer__imageRings' src={anillos} alt='Rings' ref={el => anillos = el }></img>
                        <img className='eightPageMobileContainer__imageParticle' src={particleTwo} alt='particleTwo' ref={el => particleTwo = el }></img>
                        <div className='eightPageMobileContainer__gradient eightPageMobileContainer__gradient--ubication'></div>
                        <div className='eightPageMobileContainer__gradient eightPageMobileContainer__gradient--ubicationTwo'></div>
                    </div>
                    <div className='eightPageMobile__separator eightPageMobile__separator--color'></div>
                </div>

                <div className='ninePageMobile'>
                    <div className='ninePageMobileContainer'>
                        <div className='ninePageMobileContainer__central'>
                            <h1 className='ninePageMobileContainer__central--top textColorCian fontSizeThree fontWeightBold'>Desarrollo de Pruebas de Concepto (POC)</h1><br/>
                            <p className='ninePageMobileContainer__central--top textColorWhite fontSizeTwo fontWeightLighter'>Le permite hacer uso de la tecnología y<br/> probarla hasta que realmente se adapte a<br/> sus necesidades y cumpla con todos<br/> los requisitos.</p>  
                        </div>
                        <div className='ninePageMobileContainer__central'>
                            <h1 className='ninePageMobileContainer__central--top textColorCian fontSizeThree fontWeightBold'>Billeteras Virtuales</h1>
                            <p className='ninePageMobileContainer__central--top textColorWhite fontSizeTwo fontWeightLighter'>Para que sus clientes sientan más<br/> tranquilidad y flexibilidad que con<br/> sus actuales Apps.<br/>Nuestras Apps descentralizadas DApps,<br/> son muchas más seguras y fáciles de usar.</p>  
                        </div>
                        <div className='ninePageMobileContainer__central'>
                            <h1 className='ninePageMobileContainer__central--top textColorCian fontSizeThree fontWeightBold'>Contratos Inteligentes</h1>
                            <p className='ninePageMobileContainer__central--top textColorWhite fontSizeTwo fontWeightLighter'>Es un contrato virtual que puede ser firmado electrónicamente, sin necesidad de<br/>implicar a una tercera entidad. Solo hasta que se cumplan los términos y condiciones,<br/>previamente definidos por usted, se podrán hacer desembolsos o pagos.</p>  
                        </div>
                        <div className='ninePageMobileContainer__central'>
                            <h1 className='ninePageMobileContainer__central--top textColorCian fontSizeThree fontWeightBold'>Firma Electronica</h1>
                            <p className='ninePageMobileContainer__central--top textColorWhite fontSizeTwo fontWeightLighter'>Para que el contenido de sus documentos no pueda ser adulterados y siempre<br/>permanezcan con la originalidad del autor.</p>  
                        </div>
                        <img className='ninePageMobileContainer__invertedmesh' src={invertedmesh} alt='invertedmesh' ref={el => invertedmesh = el }></img>
                        <div className='ninePageMobileContainer__gradient ninePageMobileContainer__gradient--ubication'></div>
                    </div>
                </div>

                <div className='tenPageMobile'>
                    <div className='tenPageMobileContainer'>
                        <div className='tenPageMobileContainer__central'>
                            <h1 className='tenPageMobileContainer__central--top textColorCian fontSizeThree fontWeightBold'>Juegos</h1>
                            <p className='tenPageMobileContainer__central--top textColorWhite fontSizeTwo fontWeightLighter'>Desarrollo de juegos y apuestas en cadena de bloques. Los usuarios interactúan<br/>en tiempo real, lo que garantiza la mas real, confiable y transparente experiencia.<br/>La aplicación descentralizada (DApp) incluye un contrato inteligente.</p>  
                        </div>
                        <div className='tenPageMobileContainer__central'>
                            <h1 className='tenPageMobileContainer__central--top textColorCian fontSizeThree fontWeightBold'>Finanzas Descentralizadas (DeFi)</h1>
                            <p className='tenPageMobileContainer__central--top textColorWhite fontSizeTwo fontWeightLighter'>Le ayudamos a transformar sus servicios financieros tradicionales en<br/>aplicaciones descentralizadas (DApps) equivalentes, encriptadas, sin riesgo.<br/>Mejoran la experiencia de su cliente y la rentabilidad y confiabilidad de su servicio.<br/><br/>
                                Contratos inteligentes, prestamos, fondos, inversiones, validación de<br/> transacciones (staking), seguros de vida, activos reales, criptoactivos (NFT), Billetera virtual.<br/> Tarejetas de crédito, Débito, puntos de recompensa, etc. 
                            </p>  
                        </div>
                        <div className='tenPageMobileContainer__central'>
                            <h1 className='tenPageMobileContainer__central--top textColorCian fontSizeThree fontWeightBold'>Criptomonedas y Tokens</h1>
                            <p className='tenPageMobileContainer__central--top textColorWhite fontSizeTwo fontWeightLighter'>Usted puede desarrollar sus criptomonedas y usarla con un propósito legal definido.<br/>El desarrollo de criptomonedas, no necesariamente fluctuantes ni valiosas,<br/> puede ser aplicable a cualquier campo de actividad humana.<br/><br/>
                                Scripts para funciones de intercambio con otras monedas y su posible monetización.
                            </p>  
                        </div>
                        <img className='tenPageMobileContainer__particle' src={particle} alt='particle' ref={el => particle = el }></img>
                    </div>
                </div>

                <div className='elevenPageMobile'>
                    <div className='elevenPageMobileContainer'>
                        <div className='elevenPageMobileContainer__central'>
                            <h1 className='textColorCian fontSizeThree fontWeightBold'>Tokens no Fungibles (NFT)</h1>
                            <p className='elevenPageMobileContainer__central--top textColorWhite fontSizeTwo fontWeightLighter'>Todo lo que pertenezca al mundo digital, como una obra de arte, una canción o un libro.<br/>puede ser certificado de que es una obra original y que no ha sido modificada.<br/>
                                Esta apliación es útil para artistas que quieran universalizar sus obras. La venta y la compra de NFTs<br/>asegura que los artistas reciban su regalía en forma directa y sin intermediarios.    
                            </p>
                        </div>
                        <div className='elevenPageMobileContainerFlatmesh'>
                            <img className='elevenPageMobileContainerFlatmesh__size' src={flatmesh}></img>
                        </div>
                    </div>
                </div>

                <div className='twelvePageMobile' id='twelvePage'>
                    <div className='twelvePageMobileContainer'>
                        <h1 className='twelvePageMobileContainer__right--bottom textColorCian fontSizeFour fontWeightBold'>Algunos Conceptos</h1>
                        <h2 className='twelvePageMobileContainer__right--bottom textColorCian fontSizeThree fontWeightBold'>Criptografía</h2>
                            <p className='twelvePageMobileContainer__right--bottom textColorWhite fontSizeTwo fontWeightLighter'>Es una técnica de protección de datos y comunicaciones, utilizada en los desarrollos en cadena de<br/>bloques, para enviar o almacenar datos, de modo que solo el que envía y los destinatarios deseados<br/>
                                puedan acceder a los datos, sin interferencias de terceros y con la máxima seguridad posible.
                            </p>
                    </div>
                    <div className='twelvePageMobileContainer'>
                        <h2 className='twelvePageMobileContainer__right--top textColorCian fontSizeThree fontWeightBold'>Cadena de Bloques</h2>
                            <p className='twelvePageMobileContainer__right--topT textColorWhite fontSizeTwo fontWeightLighter'>Es una novedosa tecnología que permite simplificar los procesos de su empresa, para dar transparencia,
                                inmutabilidad y seguridad.<br/> Elimina los intermediarios, la cantidad de manejo de documentos y el almacenamiento de registros. Le permite ahorrar tiempo y dinero.
                            </p>
                    </div>
                    <div className='twelvePageMobileContainer'>
                        <h2 className='twelvePageMobileContainer__right--top textColorCian fontSizeThree fontWeightBold'>Aplicación Descentralizada</h2>
                            <p className='twelvePageMobileContainer__right--topT textColorWhite fontSizeTwo fontWeightLighter'>Conocidas como DApps, son aplicaciones que pueden correr en un celular o<br/>computador, cuya información es dividida en múltiples bloques,
                                que viajan<br/>simultaneamente a través de múltiples medios en internet, lo cual la hace<br/>mucho más segura e imposible de hackear.
                            </p>
                    </div>
                    <div className='twelvePageMobileContainerSeparator twelvePageMobileContainerSeparator--color'></div>
                </div>

                <div className='thirteenPageMobile' id='thirteenPage'>
                    <img className='thirteenPageMobile__logoFooter' src={vortexfooter}></img>
                    <div className='thirteenPageMobile__logoLinkedin' >
                        <a href='https://co.linkedin.com/'><img className='thirteenPageMobile__logoLinkedin' src={logolinkedin}></img></a>  
                    </div>
                    <div className='thirteenPageMobile__gmail'>  
                        <a className='textColorWhite fontSizeOneFive fontWeightLighter' href='https://www.google.com/intl/es-419/gmail/about/'>vortexlabcol@gmail.com</a>
                    </div>  
                </div>
            </div>
        </>
    )
}
