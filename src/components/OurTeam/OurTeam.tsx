import React from 'react'
import style from './OurTeam.module.css'

interface Props {

}

const OurTeam = (props: Props) => {
    return (
        <article className={style.ourTeamContainer}>
            <div className={style.ourTeamInfo}>
                <div>
                    <h5 className={style.bestTeam}>WE HAVE BEST TEAM</h5>
                    <h1 className={style.spesialists}>Meet Our Spesialists</h1>
                </div>
                <div>
                    <p className={style.ourTeamTextInfo}>We think it’s really important that clinicians have a mixture of
                    clinical skill and human qualities that mean you can place your
                    trust in them. We interview every potential partner in person
                    before we agree to work with them, as well as carrying out rigorous background checks.
                    </p>
                </div>
            </div>
            <div className={style.ourTeamImageBlock}>
                <div className={style.ourTeamImgFirst}></div>
                <div className={style.ourTeamImgSecond}></div>
                <div className={style.ourTeamImgThird}></div>
            </div>
        </article>
    )
}

export default OurTeam
