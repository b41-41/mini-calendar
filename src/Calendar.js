import React, { useState, useEffect } from 'react';
import './calendar.css';

const Calendar = () => {

    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState((new Date().getMonth()) + 1);

    const date = new Date();
    const today = date.getDate();
    const endDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevEndDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    date.setDate(1);
    const startDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    let days = [];
    let prevDays = [];
    let nextDays = [];

    const prevMonth = () => {
        if (month === 1) {
            return 12;
        }
        return month - 1;
    }

    const nextMonth = () => {
        if (month === 12) {
            return 1;
        }
        return month + 1;
    }

    const inputPrevDaysArray = () => {
        for (let x = startDayIndex; x > 0; x--) {
            prevDays.push(<div date={`${year}.${prevMonth()}.${x}`} className="day__prev">{(prevEndDay - x) + 1}</div>)
        }
    };

    const inputDaysArray = () => {
        for (let i = 1; i <= endDay; i++) {
            i === today ?
                days.push(<div date={`${year}.${month}.${i}`} className="day__today">{i}</div>)
                : days.push(<div date={`${year}.${month}.${i}`}>{i}</div>)
        };
    };

    const inputNextDaysArray = () => {
        const nextDaysLength = 6 - lastDayIndex;
        for (let j = 1; j <= nextDaysLength; j++) {
            nextDays.push(<div date={`${year}.${nextMonth()}.${j}`} className="day__next">{j}</div>)
        }
    };

    const switchPrevMonth = () => {
        month === 1 ?
            setMonth(12) :
            setMonth(month - 1);
    };

    const switchNextMonth = () => {
        month === 12 ?
            setMonth(0) :
            setMonth(month + 1);
    };

    const switchCurrentMonth = () => {
        setMonth((new Date().getMonth()) + 1);
    }

    const init = () => {
        inputDaysArray();
        inputPrevDaysArray();
        inputNextDaysArray();
    };

    init()

    useEffect(() => {
        console.log(`month`)
        console.log(month)
    }, [month])

    return (
        <>
            <div className="calendar">
                <div className="month">
                    <div className="month__current">2021.10</div>
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
                    {prevDays.map(prevDay => prevDay)}
                    {days.map(day => day)}
                    {nextDays.map(nextDay => nextDay)}
                </div>

            </div>
        </>
    )
}

export default Calendar;