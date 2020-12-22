import React, {useEffect, useRef} from "react";
export interface  X{
    callback?:(elemetn:any)=>void
}
const FileName:React.FC<X> = ({callback }) => {
const  ref = useRef<any>(null)
    useEffect(()=>{
        if (callback){
            callback(ref)
        }
    },[])
    return (
        <div>
            <input ref={ref}/>
        </div>
    )
}
export {FileName}
