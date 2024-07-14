import css from "../Batle/Batle.module.css";
import foto from "../../image/foto.png";
import vector1 from "../../image/vector1.png";
import plusik from '../../image/plusik.png'
const Batle = () => {
  return (
    <div className={css.divmain}>
      <div className={css.header}>
        <h1 className={css.title1}>
          Hello, <span className={css.spantitle}>Nadia!</span>
        </h1>
        <div className={css.divleb}>
          <h4 className={css.title}>Nadia</h4>
          <img className={css.foto} src={foto} alt="" />
          <button className={css.btn}>
            <img src={vector1} alt="" />
          </button>
        </div>
      </div>
      <div className={css.head}>
        <h2 className={css.tet}>Today</h2>
        <button className={css.btn}><img src={plusik} alt="" /></button>
        <p className={css.add}>Add water</p>
      </div>
      <ul className={css.list}>
            <li className={css.item}></li>
            <li className={css.item}></li>
            <li className={css.item}></li>
        </ul>
    </div>
  );
};

export default Batle;
