import React from 'react';
import { Fade } from 'react-slideshow-image';
import style from './Slider.module.css'

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: false,
}

const Slider = () => {
    return (
        <div className={style.slideContainer}>
            <Fade {...properties}>
                <div className={style.eachSlide}>
                    <div className={style.imageBlock1}>
                    </div>
                </div>
                <div className={style.eachSlide}>
                    <div className={style.imageBlock2}>
                    </div>
                </div>
                <div className={style.eachSlide}>
                    <div className={style.imageBlock3}>
                    </div>
                </div>
            </Fade>
        </div>
    )
}
export default Slider