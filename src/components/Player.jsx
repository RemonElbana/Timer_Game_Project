import { useState  , useRef} from "react";
// let inp = document.getElementById('inpName')

export default function Player() {
  const newPlayer = useRef()
  const [ playerName , setPlayerName ] = useState('unknown entity')

  function handleChange() {
    setPlayerName(newPlayer.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={newPlayer} type="text" />
        <button onClick={handleChange} >Set Name</button>
      </p>
    </section>
  );
}
