// desktop.component.jsx

import React, {useEffect} from 'react'
import './desktop.styles.css'
import logoVortex from './../../assets/img/Vortex.png'
import mesh from './../../assets/img/malla.png'
import waves from './../../assets/img/waves.png'
import balls from './../../assets/img/balls.png'
import point from './../../assets/img/point.png'
import flatmesh from './../../assets/img/mallaPlana.png'
//import Base from './../../assets/img/3D-Base.png'
import verticalmesh from './../../assets/img/mallaVertical.png'
import anillos from './../../assets/img/anillos.png'
import particleTwo from './../../assets/img/ParticleDos.png'
import invertedmesh from './../../assets/img/mallaInvertida.png'
import particle from './../../assets/img/particle.png'
import waveshorizontal from './../../assets/img/WavesHorizontal.png'
import vortexfooter from './../../assets/img/Vortex-Footer.png'
import logolinkedin from './../../assets/img/Logo-Linkedin.png'
import videoBackground from './../../assets/video/Animación.mp4'
import webAnim from './../../assets/video/WebAnim_1.mp4'
import baseAnim from './../../assets/video/Web_animation_2.mp4'
import {TweenLite, TweenMax, Linear} from 'gsap';
import flatmeshTwo from './../../assets/img/mallaPlana.png'
export const Desktop = () => {
    
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
        TweenMax.to(waveshorizontal, 2, {
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
         {/* <ParallaxProvider > */}
                <div className='principal'>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            position: 'absolute',
                            width:"70%",
                            right:"45%",
                            zIndex:-3,
                            objectFit:"cover",
                            transform: "translate(4%,25%)"
                        }}
                    >
                        <source src={videoBackground}/>
                    </video>
                    <div className='onePage' >
                        {/* Panel izquierdo 1ra screen*/}
                        <div className='onePage__logo '>
                            <img className='onePage__logo onePage__logo--margin' src={logoVortex} alt="logo"/>
                        </div>

                            <div className='onePage__Header'>
                                <a href='#threePage'><p className='onePage__Header--spacing fontSizeTwo textColorWhite'>Nuestra Empresa</p></a>
                                <a href='#sevenPage'><p className='onePage__Header--spacing fontSizeTwo textColorWhite'>Nuestros Servicios</p></a>
                                <a href='#twelvePage'><p className='onePage__Header--spacing fontSizeTwo textColorWhite'>Algunos Conceptos</p></a>
                                <a href='#thirteenPage'><p className='onePage__Header--spacing fontSizeTwo textColorWhite'>Contacto</p></a>
                            </div>

                       
                        <p className=" onePage__txtSi textColorWhite fontSizeSix" >
                            Es hora de adaptar su empresa a las nuevas tecnologías blockchain, web 3.0, defi, fintech, metaverso, A.I  y criptomonedas.
                        </p>
                        
                        {/* Panel derecho 1ra screen*/}
                        
                        <img className="onePage__mesh" src={mesh} alt="mesh" ref={el => mesh = el }/>
                        {/* separador */}
                        <div className='onePage__separator onePage__separator--color'></div>
                    </div>
                    

                    {/* Panel derecho 2da screen*/}
                    <div className='twoPage'>
                        <div className='twoPage__container'>
                            <div className='displayInlineFlex flexDirectionRow fontWeightBold widhtHundred'>
                                <p className="textColorWhite fontWeightLighter fontSizeSeven">Metaverso - </p>
                                <p className="fontWeightBold textColorCian fontSizeSeven">&nbsp;Cadena de Bloques</p>
                            </div>
                            
                            <div className='flexDirectionRow fontWeightBold displayInlineFlex marginTopTwo widhtHundred'>
                                <p className="textColorCian fontSizeSeven fontWeightLighter ">Web 3.0 -</p>
                                <p className="textColorWhite fontSizeSeven fontWeightLighter">&nbsp;Cripto Seguridad</p>
                            </div>

                            <div className='flexDirectionRow displayInlineFlex fontWeightBold marginTopTwo widhtHundred'>
                                <p className="textColorWhite fontWeightBold fontSizeSeven">Aplicaciones descentralizadas</p>
                            </div>
                        </div>
                         <div className='twoPage__container twoPage__container--display'>
                             <div className='displayFlexEnd'>
                                <p className="textColorWhite fontSizeFive fontWeightLighter">Lo invitamos a prepararse <br/>para el <b>Futuro...</b></p>
                            </div>
                            <p className="textColorWhite fontSizeFive fontWeightLighter marginTopTwo displayFlexEnd">...Hoy</p>
                        </div> 
                       
                        <img className="twoPage__flower" src={waves} alt="waves" ref={el => waves = el }/>
                        <div className='onePage__gradient onePage__gradient--color twoPage__GradientFlower'></div>
                    </div>

                    
                    <div className='threePage' id='threePage'>
                        {/* <div className='threePage__gradient threePage__gradientMini--color '> </div> */}
                        <div className='threePage__container'>
                           <h1 className="threePage__containerTitleNe textColorCian fontSizeTen fontWeightBold ">Nuestra Empresa.</h1>
                            <p className="threePage__containerTextSo textColorWhite fontSizeFour fontWeightLighter">
                               Somos una empresa de innovación, con amplio conocimiento en el desarrollo de soluciones en cadena de bloques.
                            </p> 
                            <p className=" threePage__containerTextNu textColorWhite fontSizeFour fontWeightLighter ">
                                Nuestros desarrollos y servicios son confiables, pues cumplimos con los estándares internacionales para desarrollos de software descentralizado.
                                Contratando con nosotros usted puede ser partícipe de los avances, mediante visitas y reportes periódicos, que demuestran nuestro compromiso para su solución.
                            </p>
                        </div>
                        <video
                            autoPlay
                            loop
                            muted
                            style={{
                                marginLeft:1045,
                                marginTop: -450,
                                width: "45%",
                                position: 'absolute',
                                zIndex:-1,

                            }}
                        >
                            <source src={webAnim}/>
                        </video>
                    </div>
                  

                    <div className='fourPage'>
                        <div className='fourPage__container'>
                            <h1 className=" textColorCian fontSizeSeven fontWeightBold fourPage__containerTituloPo ">¿Por qué somos importantes<br/>&nbsp;&nbsp;para su empresa?</h1>
                        </div>
                         <div className='fourPage__containerParagraph'>
                            <p className=" textColorWhite fontSizeTwoEight fontWeightLighter ">Somos importantes porque:</p>
                        </div>
                        <div className='fourPage__containerList'>
                        {/* ref={el => point = el } */}
                            <img className='fourPage__containerListPoint' src={point} alt="point"/>
                            <p className='fourPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Podemos hacer que su empresa se adapte a las nuevas tecnologías, cuyos cambios se revierten en menor tiempo, menor costo, mas seguridad y mayor confiabilidad 
                                de su servicio.
                            </p>
                            <br/><br/>

                             <img className='fourPage__containerListPoint' src={point} alt="point"/>
                            <p className='fourPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Somos de las pocas empresas, con desarrollo mostrables en cadena de bloques.</p>
                            <br/><br/>

                            <img className='fourPage__containerListPoint' src={point} alt="point"/>
                            <p className='fourPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Contamos con un equipo de desarrolladores especializados y con experiencia en el tema.</p>
                            <br/><br/>

                            <img className='fourPage__containerListPoint' src={point} alt="point"/>
                            <p className='fourPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Estamos respaldados con otras empresas y personas conocidas por su innovación.</p>
                            <br/><br/>

                            <img className='fourPage__containerListPoint' src={point} alt="point"/>
                            <p className='fourPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Usted puede visitarnos en nuestras oficinas y verificar el paso a paso de su proceso.</p>
                        </div>
                        <div className='fourPage__flatmesh'>
                            <img className='fourPage__flatmesh--size' src={flatmesh} alt='flatmesh' ref={el => flatmesh = el }></img>
                        </div> 
                    </div>

                    
                    <div className='fivePage '>
                        <div className='fivePage__contenedorH1 fivePage__contenedorH1--marginTop'>
                            <h1 className='textColorWhite fontSizeEight'>¿Para quienes es importante?</h1>
                        </div>
                        <div className='fivePage__contenedorH2 fivePage__contenedorH2--marginTop'>
                            <h2 className='textColorCian fontSizeFive'>Nuestros servicios son importantes si usted o su empresa
                            </h2>
                        </div>

                       
                        <div className='fivePage__containerList'>
                            <img className='fivePage__containerListPoint' src={point} alt="circle"/>
                            <p className='fivePage__containerListPointP fivePage__containerListPointP--rightOne textColorWhite fontSizeTwoEight fontWeightLighter'>Presta servicios bancarios o financieros como créditos y CDTs.
                            </p>
                            <br/><br/>

                            <img className='fivePage__containerListPoint' src={point} alt="circle"/>
                            <p className='fivePage__containerListPointP fivePage__containerListPointP--rightTwo textColorWhite fontSizeTwoEight fontWeightLighter'>Presta servicios por suscripción como revistas, películas o videos.</p>
                            <br/><br/>

                            <img className='fivePage__containerListPoint' src={point} alt="circle"/>
                            <p className='fivePage__containerListPointP fivePage__containerListPointP--rightThree textColorWhite fontSizeTwoEight fontWeightLighter'>Manejo servicios públicos como agua, energía, gas, teléfono, internet, streaming, etc.</p>
                            <br/><br/>

                            <img className='fivePage__containerListPoint' src={point} alt="circle"/>
                            <p className='fivePage__containerListPointP fivePage__containerListPointP--rightFour textColorWhite fontSizeTwoEight fontWeightLighter'>Desea desarrollar una moneda virtual o criptoactivo.</p>
                            <br/><br/>

                            <img className='fivePage__containerListPoint' src={point} alt="circle"/>
                            <p className='fivePage__containerListPointP fivePage__containerListPointP--rightFive textColorWhite fontSizeTwoEight fontWeightLighter'>Desea desarrollar un videojuego, juego o apuesta.</p>
                            <br/><br/>

                            <img className='fivePage__containerListPoint' src={point} alt="circle"/>
                            <p className='fivePage__containerListPointP fivePage__containerListPointP--rightSix textColorWhite fontSizeTwoEight fontWeightLighter'>Es un artista y desea comercializar su arte por usted mismo, sin intermediarios.</p>
                        </div>
                    </div> 

                     {/* 6ta screnn */}
                    <div className='sixPage'>
                        <div className='sixPage__containerList'>
                            <img className='sixPage__containerListPoint' src={point} alt="circle"/>
                            <p className='sixPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Quiere comercializar un producto o un servicio de una manera más agil.
                            </p>
                            <br/><br/>

                            <img className='sixPage__containerListPoint' src={point} alt="circle"/>
                            <p className='sixPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Desea tener un sistema de recompensas y fidelización.</p>
                            <br/><br/>

                            <img className='sixPage__containerListPoint' src={point} alt="circle"/>
                            <p className='sixPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Desea apoyar las soluciones sostenibles del planeta.</p>
                            <br/><br/>

                            <img className='sixPage__containerListPoint' src={point} alt="circle"/>
                            <p className='sixPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Quiere tener un interventoría sobre un proyecto en cadena de bloques.</p>
                            <br/><br/>

                            <img className='sixPage__containerListPoint' src={point} alt="circle"/>
                            <p className='sixPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Quiere especificar los terminos y condiciones de un proyecto en cadena de bloques para licitar.</p>
                            <br/><br/>

                            <img className='sixPage__containerListPoint' src={point} alt="circle"/>
                            <p className='sixPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Desea flexibilizar, hacer más económico y seguro su proceso comercial.</p>
                            <br/><br/>

                            <img className='sixPage__containerListPoint' src={point} alt="circle"/>
                            <p className='sixPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Comercializa soluciones en salud o seguros de vida.</p>
                            <br/><br/>

                            <img className='sixPage__containerListPoint' src={point} alt="circle"/>
                            <p className='sixPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Generar trazabilidad para su organización.</p>
                            <br/><br/>
                            <video
                                autoPlay
                                loop
                                muted
                                style={{
                                    position: 'absolute',
                                    width:"35%",
                                    right:"35%",
                                    zIndex:-3,
                                    objectFit:"cover",
                                    transform: "translate(80%,-80%)"
                                }}
                            >
                                <source src={baseAnim}/>
                            </video>
                        </div>
                        <div className='sixPage__separator sixPage__separator--color'></div>
                    </div>
                    
                    <div className='sevenPage' id='sevenPage'>
                        <div className='sevenPageContainer'>
                          <div className='sevenPageContainer__title'>
                            <h1 className='textColorWhite fontSizeFive fontWeightBold'>Nuestros servicios en Cadena de Bloques</h1>
                            </div>
                            <div className='sevenPageContainer_veticalmesh '>
                                <img className='sevenPageContainer_veticalmeshSize' src={verticalmesh} alt='verticalmesh' ref={el => verticalmesh = el }></img>
                            </div>
                            <div className='sevenPageContainer__subTitle'>
                                <h1 className='textColorCian fontSizeFour fontWeightBold'>Desarrollo para Metaverso</h1><br/><br/>
                                <p className='sevenPageContainer__subTitle--top textColorWhite fontSizeTwoEight fontWeightLighter'>Es un ambiente virtual, donde los usuarios pueden trabajar, jugar y vivir todo tipo de experiencias.<br/>
                                    Usted puede tener actividades comerciales en oficinas, centros comerciales y casas. Esta nueva <br/> economía implica el uso de monedas virtuales.<br/><br/>
                                    Desarrollos para monetización en el concepto de Metaverso, definido por el fundador de <br/> Facebook, moneda, pagos, compras y contratos inteligentes en cadena de bloques.
                                </p>
                                <h1 className='textColorCian fontSizeFour fontWeightBold'>Consultoría y auditoría de proyectos</h1><br/>
                                <p className='sevenPageContainer__subTitle--top textColorWhite fontSizeTwoEight fontWeightLighter'>No importa si usted no ha contratado con nosotros, permítanos auditar su desarrollo como una <br/> 
                                    segunda opinión, que le permita tener confianza en su proyecto antes de ser lanzado</p>
                            </div>  
                        </div>
                    </div>


                    <div className='eightPage'>
                        <div className='eightPageContainer'>
                            <div className='eightPageContainer__title'>
                                <h1 className='textColorCian fontSizeFour fontWeightBold'>Desarrollos Propios, Públicos y Privados.</h1>
                                <p className='eightPageContainer__subTitle--top textColorWhite fontSizeTwoEight fontWeightLighter'>Su proyecto desarrollado en las más populares plataformas: Solana, Ethereum y BNB entre otras.</p>
                            </div>
                            <div className='eightPageContainer__titleTwo'>
                                <h1 className='textColorCian fontSizeFour fontWeightBold'>Lenguajes usados:</h1>
                                <div className='eightPageContainer__gradientBox'>
                                    <p className='eightPageContainer__text textColorWhite fontSizeTwoEight'>Solidity, Rust, C, Go, Truffle, TypeScript, JavaScript, Python, MQL5 y PHP.</p>
                                </div>
                                <p className='eightPageContainer__subTitle--top textColorCian fontSizeTwoFive fontWeightLighter'>Mantiene la privacidad de la información y con la seguridad que garantiza la cadena de bloques</p>
                            </div>
                            <img className='eightPageContainer__imageRings' src={anillos} alt='Rings' ref={el => anillos = el }></img>
                            <img className='eightPageContainer__imageParticle' src={particleTwo} alt='particleTwo' ref={el => particleTwo = el }></img>
                            <div className='eightPageContainer__gradient eightPageContainer__gradient--ubication'></div>
                            <div className='eightPageContainer__gradient eightPageContainer__gradient--ubicationTwo'></div>   
                        </div>
                        <div className='eightPage__separator eightPage__separator--color'></div>
                    </div>


                    <div className='ninePage'>
                        <div className='ninePageContainer'>
                            <div className='ninePageContainer__right'>
                                <h1 className='ninePageContainer__right--bottom textColorCian fontSizeThree fontWeightBold'>Desarrollo de Pruebas de Concepto (POC)</h1>
                                <p className='ninePageContainer__right--bottom textColorWhite fontSizeTwoEight fontWeightLighter'>Le permite hacer uso de la tecnología y probarla hasta que realmente se adapte<br/> a sus necesidades y cumpla con todos los requisitos.</p>  
                            </div>
                            <div className='ninePageContainer__right'>
                                <h1 className='ninePageContainer__right--bottom textColorCian fontSizeThree fontWeightBold'>Billeteras Virtuales</h1>
                                <p className='ninePageContainer__right--bottom textColorWhite fontSizeTwoEight fontWeightLighter'>Para que sus clientes sientan más tranquilidad y flexibilidad que con sus actuales Apps.<br/>Nuestras Apps descentralizadas DApps, son muchas más seguras y fáciles de usar.</p>  
                            </div>
                            <div className='ninePageContainer__right'>
                                <h1 className='ninePageContainer__right--bottom textColorCian fontSizeThree fontWeightBold'>Contratos Inteligentes</h1>
                                <p className='ninePageContainer__right--bottom textColorWhite fontSizeTwoEight fontWeightLighter'>Es un contrato virtual que puede ser firmado electrónicamente, sin necesidad de<br/>implicar a una tercera entidad. Solo hasta que se cumplan los términos y condiciones,<br/>previamente definidos por usted, se podrán hacer desembolsos o pagos.</p>  
                            </div>
                            <div className='ninePageContainer__right'>
                                <h1 className='ninePageContainer__right--bottom textColorCian fontSizeThree fontWeightBold'>Firma Electronica</h1>
                                <p className='textColorWhite fontSizeTwoEight fontWeightLighter'>Para que el contenido de sus documentos no pueda ser adulterados y siempre<br/>permanezcan con la originalidad del autor.</p>  
                            </div>
                            <img className='ninePageContainer__invertedmesh' src={invertedmesh} alt='invertedmesh' ref={el => invertedmesh = el }></img>
                            <div className='ninePageContainer__gradient ninePageContainer__gradient--ubication'></div>
                        </div>
                    </div>


                    <div className='tenPage'>
                        <div className='tenPageContainer'>
                            <div className='tenPageContainer__left'>
                                <h1 className='tenPageContainer__left--top textColorCian fontSizeFour fontWeightBold'>Juegos</h1>
                                <p className='tenPageContainer__left--top textColorWhite fontSizeTwoEight fontWeightLighter'>Desarrollo de juegos y apuestas en cadena de bloques. Los usuarios interactúan<br/>en tiempo real, lo que garantiza la mas real, confiable y transparente experiencia.<br/>La aplicación descentralizada (DApp) incluye un contrato inteligente.</p>  
                            </div>
                            <div className='tenPageContainer__left'>
                                <h1 className='tenPageContainer__left--top textColorCian fontSizeFour fontWeightBold'>Finanzas Descentralizadas (DeFi)</h1>
                                <p className='tenPageContainer__left--top textColorWhite fontSizeTwoEight fontWeightLighter'>Le ayudamos a transformar sus servicios financieros tradicionales en<br/>aplicaciones descentralizadas (DApps) equivalentes, encriptadas, sin riesgo.<br/>Mejoran la experiencia de su cliente y la rentabilidad y confiabilidad de su servicio.<br/><br/>
                                    Contratos inteligentes, prestamos, fondos, inversiones, validación de<br/> transacciones (staking), seguros de vida, activos reales, criptoactivos (NFT), Billetera virtual.<br/> Tarejetas de crédito, Débito, puntos de recompensa, etc. 
                                </p>  
                            </div>
                            <div className='tenPageContainer__left'>
                                <h1 className='tenPageContainer__left--top textColorCian fontSizeFour fontWeightBold'>Criptomonedas y Tokens</h1>
                                <p className='tenPageContainer__left--top textColorWhite fontSizeTwoEight fontWeightLighter'>Usted puede desarrollar sus criptomonedas y usarla con un propósito legal definido.<br/>El desarrollo de criptomonedas, no necesariamente fluctuantes ni valiosas,<br/> puede ser aplicable a cualquier campo de actividad humana.<br/><br/>
                                    Scripts para funciones de intercambio con otras monedas y su posible monetización.
                                </p>  
                            </div>
                            <img className='tenPageContainer__particle' src={particle} alt='particle' ref={el => particle = el }></img>
                            <div className='tenPageContainer__gradient tenPageContainer__gradient--ubication'></div>
                        </div>
                    </div>


                    <div className='elevenPage'>
                        <div className='elevenPageContainer'>
                            <div className='elevenPageContainer__left'>
                                <h1 className='textColorCian fontSizeFour fontWeightBold'>Tokens no Fungibles (NFT)</h1>
                                <p className='elevenPageContainer__left--top textColorWhite fontSizeTwoEight fontWeightLighter'>Todo lo que pertenezca al mundo digital, como una obra de arte, una canción o un libro.<br/>puede ser certificado de que es una obra original y que no ha sido modificada.<br/>
                                    Esta apliación es útil para artistas que quieran universalizar sus obras. La venta y la compra de NFTs<br/>asegura que los artistas reciban su regalía en forma directa y sin intermediarios.    
                                </p>
                            </div>
                            <div className='elevenPageContainerFlatmesh'>
                                <img className='elevenPageContainerFlatmesh__size' src={flatmesh} alt='flatmesh' ></img>
                            </div>
                            <div className='elevenPageContainer__waveshorizontal'>
                                <img className='elevenPageContainer__waveshorizontalSize' src={waveshorizontal} alt='waveshorizontal' ref={el => waveshorizontal = el }></img>
                                <div className='elevenPageContainer__gradient elevenPageContainer__gradient--ubication'></div>
                            </div>  
                        </div>
                    </div>


                    <div className='twelvePage' id='twelvePage'>
                        <div className='twelvePageContainer'>
                            <div className='twelvePageContainer__right'>
                                <h1 className='twelvePageContainer__right--bottom textColorCian fontSizeSeven fontWeightBold'>Algunos Conceptos</h1>
                                <h2 className='twelvePageContainer__right--bottom textColorCian fontSizeFive fontWeightBold'>Criptografía</h2>
                                <p className='twelvePageContainer__right--bottom textColorWhite fontSizeTwoEight fontWeightLighter'>Es una técnica de protección de datos y comunicaciones, utilizada en los desarrollos en cadena de<br/>bloques, para enviar o almacenar datos, de modo que solo el que envía y los destinatarios deseados<br/>
                                    puedan acceder a los datos, sin interferencias de terceros y con la máxima seguridad posible.
                                </p>
                            </div>
                            <div className='twelvePageContainer__right'>
                                <h2 className='twelvePageContainer__right--bottom textColorCian fontSizeFive fontWeightBold'>Cadena de Bloques</h2>
                                <p className='twelvePageContainer__right--bottom textColorWhite fontSizeTwoEight fontWeightLighter'>Es una novedosa tecnología que permite simplificar los procesos de su empresa, para dar transparencia,<br/>
                                    inmutabilidad y seguridad. Elimina los intermediarios, la cantidad de manejo de documentos y el<br/>almacenamiento de registros. Le permite ahorrar tiempo y dinero.
                                </p>
                            </div>
                            <div className='twelvePageContainer__right'>
                                <h2 className='twelvePageContainer__right--bottom textColorCian fontSizeFive fontWeightBold'>Aplicación Descentralizada</h2>
                                <p className='textColorWhite fontSizeTwoEight fontWeightLighter'>Conocidas como DApps, son aplicaciones que pueden correr en un celular o<br/>computador, cuya información es dividida en múltiples bloques,
                                    que viajan<br/>simultaneamente a través de múltiples medios en internet, lo cual la hace<br/>mucho más segura e imposible de hackear.
                                </p>
                            </div>
                        </div>
                        <div className='twelvePageContainerSeparator twelvePageContainerSeparator--color'></div>
                    </div>
                    <div className='thirteenPage' id='thirteenPage'>
                        <img className='thirteenPage__logoFooter' src={vortexfooter}></img>
                        <div className='thirteenPage__logoLinkedin' >
                            <a href='https://www.linkedin.com/company/vortex-labcol'><img className='thirteenPage__logoLinkedin' src={logolinkedin}></img></a>  
                        </div>
                        <div className='thirteenPage__gmail'>  
                            <a className='textColorWhite fontSizeTwoFive fontWeightLighter' href='https://www.google.com/intl/es-419/gmail/about/'>vortexlabcol@gmail.com</a>
                        </div>
                        
                    </div>
                </div>
            {/* </ParallaxProvider>  */}
        </>
    )
}
