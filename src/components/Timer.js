import {useEffect} from 'react';

function Timer (props) {
    // decrement the seconds state each 1000 milliseconds
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