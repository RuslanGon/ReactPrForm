import css from "../MainTitle/MainTitle.module.css";
import Male1 from "../../image/Male1.png";
import Male2 from "../../image/Male2.png";
import Male3 from "../../image/Male3.png";
import point1 from '../../image/point1.png'

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
        <div className={css.divfot1}>
        <img className={css.male2} src={Male2} alt="" />
          <img className={css.male1} src={Male1} alt="" />
          <img className={css.male3} src={Male3} alt="" />
          <p className={css.ptext}>Our <span className={css.span}>happy</span> customers </p>
        </div>
        <div>
        <div className={css.divpos}>
          <button className={css.btn3}><img src={point1} alt="" />
            Habit drive
          </button>
          <button className={css.btn4}>View statistics</button>
        </div>
        <button className={css.btn5}>Personal rate setting</button>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
