import {useState, useEffect} from 'react';

function Timer () {
    const [seconds, setSeconds] = useState(120);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
    
        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);
    
    return seconds
}

export default Timer;