import css from '../../components/Counter/Counter.module.css';
import plus from '../../image/plus.png'
import plus1 from '../../image/plus (1).png'
import { useState } from 'react';


const  Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleCounterInc = () => {
setCounter( counter + 1)
    }

    const handleCounterdec = () => {
        if(counter === 0) return
setCounter( counter - 1)
    }
    


  return (
    <div>
        <h1>Edit the entered amount of water</h1>
        <h3>Correct entered data:</h3>
        <p>Amount of water:</p>
        <button className={css.buttonCounter} onClick={handleCounterdec}><img src={plus} alt="" /></button>
        <button >{counter}</button>
        <button className={css.buttonCounter}onClick={handleCounterInc}><img src={plus1} alt="" /></button>
    </div>
  )
}

export default Counter