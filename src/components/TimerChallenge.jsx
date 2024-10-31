import { useRef, useState } from "react";
import Result from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef()
    const dialog = useRef()

    const [ timeLeft , setTimeLeft ] = useState( targetTime * 1000 )
    const isTimerActive = timeLeft > 0 && timeLeft < targetTime*1000

    if(timeLeft <= 0) {
        clearInterval(timer.current)
        setTimeLeft(targetTime * 1000)
        dialog.current.open()
    }

    function handleTimer() {
        timer.current = setInterval(() => {
            setTimeLeft( prevTimeLeft => prevTimeLeft - 10 )
        }, 10);
    }


    function handleStop() {
        dialog.current.open()
        clearInterval(timer.current)
    }

    function timerReset() {
        setTimeLeft(targetTime * 1000)
    }

    return (
        <>
        <Result resetTime={timerReset} ref={dialog} timeLeft={targetTime} result={ isTimerActive ? 'Won' : 'Lost' } remainingTime={ isTimerActive ? (timeLeft/1000).toFixed(2) : 0 } />
        <section className="challenge">
            <h2> {title} </h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button 
                    onClick={ isTimerActive ? handleStop : handleTimer }
                >
                    {isTimerActive ? 'Stop Challenge' : 'Start Challenge'}
                </button>
            </p>
            <p className={ isTimerActive ? 'active' : undefined }>{ isTimerActive ? 'Time is running ... ' :' Timer inactive'}</p>
        </section>
        </>
    );
    }
