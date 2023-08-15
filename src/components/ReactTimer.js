import React,{useState,useEffect} from "react";


const ReactTimer=()=>{
    let [seconds,setSeconds]=useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    

    return (
    <div>
       <h1>You've been on this page for {seconds} seconds.</h1>
    </div>
    )
}

export default ReactTimer;