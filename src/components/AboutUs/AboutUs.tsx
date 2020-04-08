import React from 'react'
import style from './AboutUs.module.css'

interface Props {

}

const AboutUs: React.FC = (props: Props) => {
    return (
        <article className={style.aboutUsContainer}>
            <div className={style.videoBlock}>
                <div className={style.videoAbout}>
                </div>
            </div>
            <div className={style.aboutBlock}>
                <div className={style.infoAboutUs}>
                    <h4 className={style.whoWeAre}>WHO WE ARE</h4>
                    <h1 className={style.supportForYou}>We Are The Best Support for You</h1>
                    <p className={style.clinic}>Our clinic largest private mental health partnership, with a carefully selected nationwide team of Psychiatrists, Psychologists and Psychotherapists. We only work with highly experienced and capable partners who share our values.</p>
                    <button className={style.btnAboutUs}>ABOUT US</button>
                </div>
            </div>
        </article>
    )
}

export default AboutUs
