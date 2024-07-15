import css from "../Batle/Batle.module.css";
import foto from "../../image/foto.png";
import vector1 from "../../image/vector1.png";
import plusik from "../../image/plusik.png";
import kor from "../../image/kor.png";
import water from "../../image/water.png";
import pan from "../../image/pan.png";
import left from "../../image/left.png";
import right from "../../image/right.png";
import pie from "../../image/pie.png";
import { useState } from "react";

const Batle = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(new Date());

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
        <button className={css.btn}>
          <img src={plusik} alt="" />
        </button>
        <p className={css.add}>Add water</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <img src={water} width={44} height={45} alt="" />
          <div className={css.div7}>
            <span className={css.spamli}>250 ml</span>
            <span className={css.spamlii}>7:00 AM</span>
          </div>
          <div className={css.div6}>
            <img src={pan} width={16} height={16} alt="" />
            <img src={kor} width={16} height={16} alt="" />
          </div>
        </li>
        <li className={css.item}>
          <img src={water} width={44} height={45} alt="" />
          <div className={css.div7}>
            <span className={css.spamli}>250 ml</span>
            <span className={css.spamlii}>11:00 AM</span>
          </div>
          <div className={css.div6}>
            <img src={pan} width={16} height={16} alt="" />
            <img src={kor} width={16} height={16} alt="" />
          </div>
        </li>
        <li className={css.item}>
          <img src={water} width={44} height={45} alt="" />
          <div className={css.div7}>
            <span className={css.spamli}>250 ml</span>
            <span className={css.spamlii}>14:00 AM</span>
          </div>
          <div className={css.div6}>
            <img src={pan} width={16} height={16} alt="" />
            <img src={kor} width={16} height={16} alt="" />
          </div>
        </li>
      </ul>
      <hr className={css.line} />
      <div className={css.customCalendar}>
        <div className={css.calendarHeader}>
          <div className={css.divmoth1}>
            <h2 className={css.stata}>Statistics</h2>
            <button
              className={css.button}
              onClick={() =>
                setCurrentDate(
                  new Date(currentDate.setMonth(currentDate.getMonth() - 1))
                )
              }
            >
              <img src={left} alt="Previous month" />
            </button>
            <span>
              {currentDate.toLocaleString("en-US", { month: "long" })},{" "}
              {currentDate.getFullYear()}
            </span>
            <button
              className={css.button}
              onClick={() =>
                setCurrentDate(
                  new Date(currentDate.setMonth(currentDate.getMonth() + 1))
                )
              }
            >
              <img src={right} alt="Next month" />
            </button>
          </div>
          <img className={css.pie} src={pie} alt="Pie chart" />
          
        </div>
      </div>
    </div>
  );
};

export default Batle;
