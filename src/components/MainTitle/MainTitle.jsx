import css from '../MainTitle/MainTitle.module.css'
import Male1 from '../../image/Male1.png'
import Male2 from '../../image/Male2.png'
import Male3 from '../../image/Male3.png'


const MainTitle = () => {
  return (
    <div className={css.divmain}>
      <div className={css.div1}>
        <h2 className={css.title}>AquaTrack</h2>
        <h1 className={css.maintext}>Water consumption tracker</h1>
        <p className={css.text}>Record daily water intake and track</p>
        <div className={css.divbtn}>
          <button className={css.btn1}>Try tracker</button>
          <button className={css.btn2}>Sign In</button>
        </div>
      </div>
      <div className={css.div2}>
        <div>
          <img src={Male1} alt="" />
          <img src={Male2} alt="" />
          <img src={Male3} alt="" />
        </div>
        <div>
            <div>
                <span></span>
            <button>Habit drive</button>
            </div>
            <button>View statistics</button>
        </div>
        <button>Personal rate setting</button>
      </div>
    </div>
  );
}

export default MainTitle