import css from '../Batle/Batle.module.css'
import foto from '../../image/foto.png'
import vector1 from '../../image/vector1.png'
const Batle = () => {
  return (
    <div className={css.divmain}>
        <div>
        <h1>Hello, Nadia!</h1>
        <div className={css.divleb}>
        <h4 className={css.title}>Nadia</h4>
        <img className={css.foto} src={foto} alt="" />
        <button className={css.btn}><img src={vector1} alt="" /></button>
        
    </div>
        </div>
    </div>
  )
}

export default Batle