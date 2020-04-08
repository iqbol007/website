import React from 'react'
import style from './Category.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const arrowRight = <FontAwesomeIcon icon={faChevronRight} />

interface Props {

}

const Category = (props: Props) => {
    return (
        <article className={style.categoryBlock}>
            <h4 className={style.offerForYou}>WHAT WE OFFER FOR YOU</h4>
            <h1 className={style.therapies}>Therapies & Treatments</h1>
            <div className={style.containerInfo}>
                <div className={style.infoItemTheraphy}>
                    <div className={style.imgBlockFirst}></div>
                    <div className={style.someText}><span>Couple Theraphy</span></div>
                    <div className={style.someParagraph}>Couples’ therapy is a form of therapy in which a couple works with a therapist</div>
                    <div className={style.learnMore}><span>LEARN MORE <span className={style.arrowRightIcon}>{arrowRight}</span></span></div>
                </div>
                <div className={style.infoItemDisorder}>
                    <div className={style.imgBlockSecond}></div>
                    <div className={style.someText}><span>Anxiety Disorder</span></div>
                    <div className={style.someParagraph}>Anxiety disorders can be a serious illness and have long term problems</div>
                    <div className={style.learnMore}><span>LEARN MORE <span className={style.arrowRightIcon}>{arrowRight}</span></span></div>
                </div>
                <div className={style.infoItemDepression}>
                    <div className={style.imgBlockThird}></div>
                    <div className={style.someText}><span>Treating Depression</span></div>
                    <div className={style.someParagraph}>Everyone feels low from time to time, so it’s not always easy to know when it is...</div>
                    <div className={style.learnMore}><span>LEARN MORE <span className={style.arrowRightIcon}>{arrowRight}</span></span></div>
                </div>
            </div>
        </article>
    )
}

export default Category
