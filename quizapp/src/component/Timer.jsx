import React from "react";
import {useState,useEffect} from "react";
let Timer =()=>{
    const [Timer, setTimer] = useState(30);

    useEffect(() => {
        let interval = setInterval(()=>{
            setTimer((prev) => prev -1)
        },1000)
    }, [])
    return Timer;
}

export default Timer;


