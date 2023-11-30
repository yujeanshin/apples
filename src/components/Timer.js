import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

function Timer () {
    const [seconds, setSeconds] = useState(120);
    const navigate = useNavigate();
    if (seconds === 115) {
        navigate('/gameover');
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
    
        return () => clearInterval(interval);
    }, [setSeconds]);
    
    return seconds;
}

export default Timer;