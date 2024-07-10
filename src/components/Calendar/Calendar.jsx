import { useState } from 'react';
import css from './Calendar.module.css';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const renderDaysOfWeek = () => {
    return daysOfWeek.map(day => <div key={day} className={css.dayOfWeek}>{day}</div>);
  };

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
       <span>Month</span>
        <span>
          {currentDate.toLocaleString('en-US', { month: 'long' })} {currentDate.getFullYear()}
        </span>
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>Prev</button>
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>Next</button>
      </div>
      <div className={css.calendarDaysOfWeek}>
        {renderDaysOfWeek()}
      </div>
      <div className={css.calendarDays}>
        {renderDaysInMonth()}
      </div>
    </div>
  );
}

export default Calendar;
