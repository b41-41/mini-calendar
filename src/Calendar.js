import React, { useState, useEffect } from 'react';
import './calendar.css';

const Calendar = () => {

    const [dateValue, setDateValue] = useState({
        year: new Date().getFullYear(),
        month: (new Date().getMonth() + 1)
    });

    const date = new Date();
    const prevEndDay = new Date(dateValue.year, dateValue.month - 1, 0).getDate();
    const today = date.getDate();
    const endDay = new Date(dateValue.year, dateValue.month, 0).getDate();

    date.setDate(1);
    const startDayIndex = new Date(dateValue.year, dateValue.month - 1, 1).getDay();
    const lastDayIndex = new Date(dateValue.year, dateValue.month, 0).getDay();

    const prevMonth = () => {
        if (dateValue.month === 0) {
            return 11;
        }
        return dateValue.month - 1;
    };

    const nextMonth = () => {
        if (dateValue.month === 12) {
            return 0;
        }
        return dateValue.month + 1;
    };

    const returnPrevDaysArray = (year, month) => {
        let prevDaysArray = [];
        for (let x = startDayIndex; x > 0; x--) {
            prevDaysArray.push(<div date={`${year}.${month}.${x}`} className="day__prev">{(prevEndDay - x) + 1}</div>);
        };
        return prevDaysArray;
    };

    const returnDaysArray = (year, month) => {
        let daysArray = [];
        for (let i = 1; i <= endDay; i++) {
            if (month === new Date().getMonth() + 1 && year === new Date().getFullYear()) {
                i === today ?
                    daysArray.push(<div date={`${year}.${month + 1}.${i}`} className="day__today">{i}</div>)
                    : daysArray.push(<div date={`${year}.${month + 1}.${i}`}>{i}</div>)
            } else {
                daysArray.push(<div date={`${year}.${month + 1}.${i}`}>{i}</div>)
            }
        };
        return daysArray;
    };

    const returnNextDaysArray = (year, month) => {
        const nextDaysLength = 6 - lastDayIndex;
        let nextDaysArray = [];
        for (let j = 1; j <= nextDaysLength; j++) {
            nextDaysArray.push(<div date={`${year}.${month}.${j}`} className="day__next">{j}</div>)
        };
        return nextDaysArray;
    };

    const switchPrevMonth = () => {
        if (dateValue.month === 1) {
            setDateValue({ ...dateValue, month: 12, year: dateValue.year - 1 });
        } else {
            setDateValue({ ...dateValue, month: dateValue.month - 1 });
        };
    };

    const switchNextMonth = () => {
        if (dateValue.month === 12) {
            setDateValue({ ...dateValue, month: 1, year: dateValue.year + 1 });
        } else {
            setDateValue({ ...dateValue, month: dateValue.month + 1 });
        };
    };

    const switchCurrentMonth = () => {
        setDateValue({ ...dateValue, year: new Date().getFullYear(), month: (new Date().getMonth()) + 1 });
    }

    return (
        <>
            <div className="calendar">
                <div className="month">
                    <div className="month__current">{`${dateValue.year}.${dateValue.month}`}</div>
                    <div className="month__handle" onClick={switchPrevMonth}>{`<`}</div>
                    <div className="month__handle" onClick={switchNextMonth}>{`>`}</div>
                    <div className="month__returnCurrent" onClick={switchCurrentMonth}>이번달</div>
                </div>
                <div className="week">
                    <div>월</div>
                    <div>화</div>
                    <div>수</div>
                    <div>목</div>
                    <div>금</div>
                    <div>토</div>
                    <div>일</div>
                </div>
                <div className="day">
                    {returnPrevDaysArray(dateValue.year, prevMonth())}
                    {returnDaysArray(dateValue.year, dateValue.month)}
                    {returnNextDaysArray(dateValue.year, nextMonth())}
                </div>

            </div>
        </>
    )
}

export default Calendar;