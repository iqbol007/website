import React from "react";
import {useSelector} from "react-redux";
import {IRootState} from "../../../reducers";
import {IUsersInitialState} from "../../../reducers/Users";
import './Account.scss'

export default function Account() {
    const {user} = useSelector<IRootState, IUsersInitialState>(state => state.users)

    return <div className='account'>
        <div style={{display:'flex',alignItems:'center'}}>
            <img width={30} height={30} style={{borderRadius: '50%'}}
                 src={`${process.env.REACT_APP_FILE_PATH}/${user?.avatar_image}`}/>
            <span>{user?.first_name} - {user?.last_name}</span>
        </div>
    </div>
}
