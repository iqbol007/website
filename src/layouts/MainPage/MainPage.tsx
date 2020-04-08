import React from 'react';
import style from './MainPage.module.css';
import MainMenu from '../../components/MainMenu/MainMenu';
import Slider from '../../shared/Slider/Slider';
import { useSpring, animated } from 'react-spring';
import AboutUs from '../../components/AboutUs/AboutUs';
import Category from '../../components/Category/Category';
import OurTeam from '../../components/OurTeam/OurTeam';

const MainPage: React.FC = () => {

    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })

    return (
        <animated.article className={style.mainPage} style={fade}>
            <MainMenu />
            <Slider />
            <AboutUs />
            <Category />
            <OurTeam />
        </animated.article>
    )
}

export default MainPage;