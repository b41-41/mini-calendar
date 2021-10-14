import React, { useState } from 'react';
import './calendar.css';

const Calendar = () => {

    const [month, setMonth] = useState();



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


    const inputPrevDaysArray = () => {
        for (let x = startDayIndex; x > 0; x--) {
            prevDays.push(<div className="day__prev">{(prevEndDay - x) + 1}</div>)
        }
    }

    const inputDaysArray = () => {
        for (let i = 1; i <= endDay; i++) {
            i === today ?
                days.push(<div className="day__today">{i}</div>)
                : days.push(<div>{i}</div>)
        };
    }

    const inputNextDaysArray = () => {
        const nextDaysLength = 6 - lastDayIndex;
        for (let j = 1; j <= nextDaysLength; j++) {
            nextDays.push(<div className="day__next">{j}</div>)
        }
    }

    const init = () => {
        inputDaysArray();
        inputPrevDaysArray();
        inputNextDaysArray();
    };

    init();

    return (
        <>
            <div className="calendar">
                <div className="month">
                    <div className="month__current">2021.10</div>
                    <div className="month__handle">{`<`}</div>
                    <div className="month__handle">{`>`}</div>
                    <div className="month__returnCurrent">이번달</div>
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
                    {/* <div className="day__prev">26</div>
                    <div className="day__prev">27</div>
                    <div className="day__prev">28</div>
                    <div className="day__prev">29</div>
                    <div className="day__prev">30</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                    <div>16</div>
                    <div>17</div>
                    <div>18</div>
                    <div>19</div>
                    <div>20</div>
                    <div>21</div>
                    <div>22</div>
                    <div className="day__select">23</div>
                    <div className="day__today">24</div>
                    <div>25</div>
                    <div>26</div>
                    <div>27</div>
                    <div>28</div>
                    <div>29</div>
                    <div>30</div>
                    <div>31</div>
                    <div className="day__next">1</div>
                    <div className="day__next">2</div>
                    <div className="day__next">3</div>
                    <div className="day__next">4</div>
                    <div className="day__next">5</div>
                    <div className="day__next">6</div> */}
                </div>

            </div>
        </>
    )
}

export default Calendar;