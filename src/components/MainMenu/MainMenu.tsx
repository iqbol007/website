import React from 'react'
import style from './MainMenu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const arrowDown = <FontAwesomeIcon icon={faChevronDown} />

const MainMenu: React.FC = () => {
    return (
        <div className={style.mainMenu}>
            <div className={`${style.logo}`}>Psychological Services</div>
            <div className={`${style.mainItem} ${style.main}`}><span className={style.menuText}>ГЛАВНАЯ</span></div>
            <div className={`${style.mainItem} ${style.blog}`}><span className={style.menuText}>БЛОГ<span className={style.arrowDownIcon}>{arrowDown}</span></span></div>
            <div className={`${style.mainItem} ${style.tests}`}><span className={style.menuText}>ТЕСТЫ</span></div>
            <div className={`${style.mainItem} ${style.doctors}`}><span className={style.menuText}>ЛЮДИ</span></div>
            <div className={`${style.mainItem} ${style.stock}`}><span className={style.menuText}>АКЦИИ</span></div>
            <div></div>
        </div >
    )
}

export default MainMenu;