import { useState,useEffect } from "react"
import { NotificationModal } from "./Modal";

export function Notification(){
    const [showButton, setShowButton]=useState(false);
    useEffect(()=>{
        let timer;
            if(showButton){
                console.log("Component Mounted(Portal)");
                console.log("Notification Modal opened");

                timer= setTimeout(() => {
                    setShowButton(false);
                }, 5000)
            }
            else {
                console.log("Component Updated (Portal)");
                console.log("Notification Modal Closed");
            }
            return ()=>clearTimeout(timer); 
        },[showButton]);

    // useEffect(()=>{
    //     if(!showButton){
    //         console.log("Component Updated(Portal");
    //         console.log("Notification Modal Closed");
    //     }
    // },[showButton]);

    return(
        <div>
            <button type="button" onClick={()=>setShowButton(!showButton)}>Show Notification</button>
            {
                showButton && <NotificationModal close={()=>setShowButton(false)} />
            }
        </div>
    )
}

export function Crash(){
    const [crashInfo, setCrashInfo]=useState(false);
    if(crashInfo){
            throw new Error("App crashed explictly");
        }
    return(
        <div>
            <button onClick={()=>setCrashInfo(true)}>Crash</button>
        </div>
    )
}