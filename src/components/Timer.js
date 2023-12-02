import {useState, useEffect} from 'react';
// import {useNavigate} from 'react-router-dom'

const totalSeconds = 5;

function Timer (props) {
    const [seconds, setSeconds] = useState(totalSeconds);
    // const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
    
        return () => clearInterval(interval);
    }, [setSeconds]);

    if (seconds === 0) {
        props.onTimeUp();
        return;
    }
    
    return(
        <div>Timer: {seconds} </div>
    );
}

export default Timer;