import foto from '../../image/foto.png'
import vector1 from '../../image/vector1.png'
import css from '../Lable/Lable.module.css'


const Lable = () => {
  return (
    <div className={css.div}>
        <h4 className={css.title}>Nadia</h4>
        <img className={css.foto} src={foto} alt="" />
        <button><img src={vector1} alt="" /></button>
        
    </div>
  )
}

export default Lable