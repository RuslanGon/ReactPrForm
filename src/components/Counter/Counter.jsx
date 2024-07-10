import css from '../../components/Counter/Counter.module.css';
import plus from '../../image/plus.png'
import plus1 from '../../image/plus (1).png'


const  Counter = ({handleCounter}) => {
  return (
    <div>
        <h1>Edit the entered amount of water</h1>
        <h3>Correct entered data:</h3>
        <p>Amount of water:</p>
        <button className={css.buttonCounter}><img src={plus} alt="" /></button>
        <button >hello</button>
        <button className={css.buttonCounter}onClick={handleCounter}><img src={plus1} alt="" /></button>
    </div>
  )
}

export default Counter