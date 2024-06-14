import React, { useState, useRef } from 'react';
import styles from './Card.module.css';

function Card() {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    const intervalRef = useRef(null); 

    const handleStart = () => {
        if (!start) {
            
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1); 
            }, 1000);
        } else {
            
            clearInterval(intervalRef.current);
        }
        setStart(prevStart => !prevStart);
    };
   
    const timeFormatter= (num) =>{
        return num < 10 ? '0' + num : num;
    };

    
    const setinterval = (time) => {

        const seconds = time%59;
        let minutes = 0;
        if(time>=60){
            minutes = Math.floor(time / 60);
        }
        
        return `${minutes}:${timeFormatter(seconds)}`;
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setTime(0);
        setStart(false);
    };

    return (
        <div className={styles.card}>
            <h1 className={styles.header}>Stopwatch</h1>
            <h5 className={styles.headertime}>Time: {setinterval(time)} </h5>
            <div>
                <button onClick={handleStart}>{start ? 'Stop' : 'Start'}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default Card;
