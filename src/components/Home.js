import React from 'react';
import logoVortex from './../assets/img/Vortex.png'
import mesh from './../assets/img/malla.png'
import waves from './../assets/img/waves.png'
import balls from './../assets/img/balls.png'
import point from './../assets/img/point.png'
import flatmesh from './../assets/img/mallaPlana.png'
import Base from './../assets/img/3D-Base.png'

 

const Home = () => {
    return ( 
        <>
            {/* <ParallaxProvider > */}
                <div className='principal'>
                    <div className='onePage'>
                        {/* Panel izquierdo 1ra screen*/}
                        <div className='flexDirectionRow'>
                            <img className='onePage__logo' src={logoVortex} alt="logo"/>
                        </div>

                        <div className='onePage__gradient onePage__gradient--marginOne'/>
                        <div className='onePage__gradient onePage__gradient--marginTwo'/>
                        <div className='onePage__gradient onePage__gradient--marginThree'/>
                        <div className='onePage__gradient onePage__gradient--sizeTwentyseven onePage__gradient--marginFour'/>
                       
                        <p className=" onePage__txtSi textColorWhite fontSizeSix">
                            Si usted no se adapta a las nuevas tecnologías, como la de la cadena de bloques y criptomonedas,
                            su empresa tendrá un futuro complicado.
                        </p>
                        
                        {/* Panel derecho 1ra screen*/}
                        <img className="onePage__mesh" src={mesh} alt="mesh"/>
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
                       
                        <img className="twoPage__flower" src={waves} alt="waves"/>
                        <div className='onePage__gradient onePage__gradient--color twoPage__GradientFlower'></div>
                    </div>

                    
                    <div className='threePage'>
                        <div className='threePage__gradient threePage__gradientMini--color '> </div>
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
                      
                        <img className="threePage__balls" src={balls} alt="ball"/>
                        <div className='threePage__gradient threePage__gradient--color '> </div>
                    </div>
                  
                     <div className='fourPage'>
                        <div className='fourPage__container'>
                            <h1 className=" textColorCian fontSizeSeven fontWeightBold fourPage__containerTituloPo ">¿Por qué somos importantes<br/>&nbsp;&nbsp;para su empresa?</h1>
                        </div>
                         <div className='fourPage__containerParagraph'>
                            <p className=" textColorWhite fontSizeTwoEight fontWeightLighter ">Somos importantes porque:</p>
                        </div>
                        <div className='fourPage__containerList'>
                            <img className='fourPage__containerListPoint' src={point} alt="circle"/>
                            <p className='fourPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Podemos hacer que su empresa se adapte a las nuevas tecnologías, cuyos cambios se revierten en menor tiempo, menor costo, mas seguridad y mayor confiabilidad 
                                de su servicio.
                            </p>
                            <br/><br/>

                             <img className='fourPage__containerListPoint' src={point} alt="circle"/>
                            <p className='fourPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Somos de las pocas empresas, con desarrollo mostrables en cadena de bloques.</p>
                            <br/><br/>

                            <img className='fourPage__containerListPoint' src={point} alt="circle"/>
                            <p className='fourPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Contamos con un equipo de desarrolladores especializados y con experiencia en el tema.</p>
                            <br/><br/>

                            <img className='fourPage__containerListPoint' src={point} alt="circle"/>
                            <p className='fourPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Estamos respaldados con otras empresas y personas conocidas por su innovación.</p>
                            <br/><br/>

                            <img className='fourPage__containerListPoint' src={point} alt="circle"/>
                            <p className='fourPage__containerListPoint--margin textColorWhite fontSizeTwoEight fontWeightLighter'>Usted puede visitarnos en nuestras oficinas y verificar el paso a paso de su proceso.</p>
                        </div>
                        <div className='fourPage__flatmesh'>
                            <img className='fourPage__flatmesh--size' src={flatmesh}></img>
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
                        <div className='sixPage__elipse'>
                            <img></img>
                        </div>
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
                            <div className='sixPage__base'>
                                <img className='sixPage__base' src={Base}></img>
                            </div>
                        </div>
                        <div className='sixPage__separator sixPage__separator--color'></div>
                    </div>

                    {/* <div className='sevenPage'>
                        <div className='sevenPage__containerList'>
                            <h1>Nuestro servicios en Cadena de Bloques</h1>
                        </div>
                    </div> */}
                </div>
            {/* </ParallaxProvider>  */}
        </>
    );
}
 
export default Home;