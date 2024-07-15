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
import graf from '../../image/graf.png'
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
        <img className={css.foto} src={foto} alt="Profile" />
        <button className={css.btn}>
          <img src={vector1} alt="Menu" />
        </button>
      </div>
    </div>
    <div className={css.head}>
      <h2 className={css.tet}>Today</h2>
      <button className={css.btn}>
        <img src={plusik} alt="Add" />
      </button>
      <p className={css.add}>Add water</p>
    </div>
    <ul className={css.list}>
      {[
        { time: '7:00 AM', volume: '250 ml' },
        { time: '11:00 AM', volume: '250 ml' },
        { time: '14:00 PM', volume: '250 ml' }
      ].map((item, index) => (
        <li className={css.item} key={index}>
          <img src={water} width={44} height={45} alt="Water" />
          <div className={css.div7}>
            <span className={css.spamli}>{item.volume}</span>
            <span className={css.spamlii}>{item.time}</span>
          </div>
          <div className={css.div6}>
            <img src={pan} width={16} height={16} alt="Edit" />
            <img src={kor} width={16} height={16} alt="Delete" />
          </div>
        </li>
      ))}
    </ul>
    <hr className={css.line} />
    <div className={css.customCalendar}>
      <div className={css.calendarHeader}>
        <div className={css.divmoth1}>
          <h2 className={css.stata}>Statistics</h2>
          <div className={css.monthWrapper}>
            <button
              className={`${css.button} ${css.leftButton}`}
              onClick={() =>
                setCurrentDate(
                  new Date(currentDate.setMonth(currentDate.getMonth() - 1))
                )
              }
            >
              <img src={left} alt="Previous month" />
            </button>
            <span className={css.monthText}>
              {currentDate.toLocaleString("en-US", { month: "long" })},{" "}
              {currentDate.getFullYear()}
            </span>
            <button
              className={`${css.button} ${css.rightButton}`}
              onClick={() =>
                setCurrentDate(
                  new Date(currentDate.setMonth(currentDate.getMonth() + 1))
                )
              }
            >
              <img src={right} alt="Next month" />
            </button>
          </div>
        </div>
        <img className={css.pie} src={pie} alt="Pie chart" />
      </div>
    </div>
   <div className={css.static}>
   <ul className={css.list1}>
      <li> 2.5 L</li>
      <li>2 L</li>
      <li>1.5L</li>
      <li> 1 L</li>
      <li>0.5 L</li>
      <li>0%</li>
    </ul>
    <ul className={css.list2}>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
    </ul>
    <img className={css.graf} src={graf} alt="" />
   </div>
  </div>
  
  
  );
};

export default Batle;
