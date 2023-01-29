import { useEffect } from "react";
import Button from "../Button/Button";
import { useState } from "react";
import TimerFunction from "../TimerFunction/TimerFunction";
import styles from './Timer.module.scss';

const Timer = () => {

    const [start, handleStart] = useState(false);
    const [clock, handleClock] = useState(0);

    useEffect(() => {
        let timer = null;

        if(start) {
            timer = setInterval(() => {
                handleClock((prevTime) => prevTime + 10);
            }, 10);
        } else if (!start) {
            clearInterval(timer)
        }
        return () => clearInterval(timer)
    }, [start]);

    return (
        <div>
            <TimerFunction time={clock} />
            <div className={styles.row}>
                <Button onClick={() => handleStart(true)}>Start</Button>
                <Button onClick={() => handleStart(false)}>Stop</Button>
                <Button onClick={() => handleClock(0)}>Reset</Button>
            </div>    
        </div>
    );
};

export default Timer;