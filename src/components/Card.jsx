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

   
    const handleReset = () => {
        clearInterval(intervalRef.current);
        setTime(0);
        setStart(false);
    };

    return (
        <div className={styles.card}>
            <h1 className={styles.header}>Stopwatch</h1>
            <h5 className={styles.headertime}>Time: {time} seconds</h5>
            <div>
                <button onClick={handleStart}>{start ? 'Stop' : 'Start'}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default Card;
