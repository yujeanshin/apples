import {useState, useEffect} from 'react';
// import {useNavigate} from 'react-router-dom'

function Timer (props) {
    // const [seconds, setSeconds] = useState(totalSeconds);
    // const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            props.setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
    
        return () => clearInterval(interval);
    }, [props.setSeconds]);

    if (props.seconds === 0) {
        props.onTimeUp();
        return;
    }
    
    return(
        <div>Timer: {props.seconds} </div>
    );
}

export default Timer;