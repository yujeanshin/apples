import {useState, useEffect} from 'react';

function Timer ({ onSecondsChange }) {
    const [seconds, setSeconds] = useState(120);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => {
                onSecondsChange(prevSeconds - 1);
                return prevSeconds - 1;
            });
        }, 1000);
    
        return () => clearInterval(interval);
    }, [onSecondsChange]);
    
    return seconds;
}

export default Timer;