import { useState } from 'react';
import css from './Calendar.module.css';
import left from '../../image/left.png';
import right from '../../image/right.png'

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className={css.emptyDay}></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          className={`${css.day} ${day === selectedDate.getDate() ? css.selected : ''}`}
          onClick={() => setSelectedDate(new Date(year, month, day))}
        >
          <span>{day}</span>
        </div>
      );
    }

    return days;
  };

  return (
    <div className={css.customCalendar}>
      <div className={css.calendarHeader}>
        <button  onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}><img src={left} alt="" /></button>
        <span>
          {currentDate.toLocaleString('en-US', { month: 'long' })} {currentDate.getFullYear()}
        </span>
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}> <img src={right} alt="" /></button>
      </div>
      <div className={css.calendarDays}>
        {renderDaysInMonth()}
      </div>
    </div>
  );
}

export default Calendar;
