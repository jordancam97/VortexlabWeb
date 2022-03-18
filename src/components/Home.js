import React, {useEffect, useRef, useState} from 'react';
import logoVortex from './../assets/img/Vortex.png'
import mesh from './../assets/img/malla.png'
import waves from './../assets/img/waves.png'
import balls from './../assets/img/balls.png'
import point from './../assets/img/point.png'
import flatmesh from './../assets/img/mallaPlana.png'
import Base from './../assets/img/3D-Base.png'
import veticalmesh from './../assets/img/mallaVertical.png'
import anillos from './../assets/img/anillos.png'
import particleTwo from './../assets/img/ParticleDos.png'
import invertedmesh from './../assets/img/mallaInvertida.png'
import particle from './../assets/img/particle.png'
import waveshorizontal from './../assets/img/WavesHorizontal.png'
import vortexfooter from './../assets/img/Vortex-Footer.png'
import logolinkedin from './../assets/img/Logo-Linkedin.png'

import { useMediaQuery } from 'react-responsive'
// Animation

import {TweenMax, TweenLite, Power0, Power1, Power2, Power3, Back, Bounce, Elastic, SteppedEase, Circ, Expo, Sine} from 'gsap';

// const [state, setState] = useState(false);

// const handleExpand = () => {
//     TweenMax.to(point, .3, {width: 200, height: 200, ease: Bounce.easeOut})
//     setState(true)
// }

const Home = () => {
    // let firstP = useRef(null)

    // useEffect(() => {
    //     TweenMax.staggerFrom(point, .3, {opacity: 0, x: 250, ease: Bounce.easeInOut, delay: .4})
    //     TweenMax.staggerFrom(firstP, .3, {opacity: 0, x: 100, ease: Sine.easeIn, delay: .4})
    //   }, []);
    
    return ( 
        <>
            <div className='principal'>
                <div className='onePage'>
                    <div className='onePage__logo '>
                        <img className='onePage__logo onePage__logo--margin' src={logoVortex} alt="logo"/>
                    </div>
                    <div className='onePage__Header'>
                        <a href='#threePage'><p className='onePage__Header--spacing fontSizeTwo textColorWhite'>Nuestra Empresa</p></a>
                        <a href='#sevenPage'><p className='onePage__Header--spacing fontSizeTwo textColorWhite'>Nuestros Servicios</p></a>
                        <a href='#twelvePage'><p className='onePage__Header--spacing fontSizeTwo textColorWhite'>Algunos Conceptos</p></a>
                        <a href='#thirteenPage'><p className='onePage__Header--spacing fontSizeTwo textColorWhite'>Contacto</p></a>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Home;