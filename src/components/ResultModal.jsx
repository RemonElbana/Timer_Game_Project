import { forwardRef , useImperativeHandle , useRef } from "react"


const Result = forwardRef(
    function Result( { result , timeLeft , remainingTime , resetTime }  , ref){

        const dialog = useRef()
        useImperativeHandle( ref , () => {
            return {
                open() {
                    dialog.current.showModal()
                }
            }
        } )

        return(
            <dialog ref={dialog} className="result-modal"  >
                <h2> You {result} </h2>
                <p> The target time was <strong>{timeLeft} seconds. </strong> </p>
                <p> You stopped the timer with <strong>{remainingTime} seconds left.</strong> </p>
                <form method="dialog">
                    <button onClick={resetTime} >Close</button>
                </form>
            </dialog>
        )
    }
)


export default Result