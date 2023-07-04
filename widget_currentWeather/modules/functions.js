import { months, weekdays } from './constants.js'

const addZero = (num) => {
    if (num < 10) {
        num = `0${num}`;
    }
    return num;
}

export const getCurrentTime = () => {
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const dayOfWeek = weekdays[date.getDay()];
    const year = date.getFullYear();
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    return { month, day, year, hours, minutes, dayOfWeek }
};

export const convertPressure = (pressure) => {
    const mmHg = pressure * (1 / 1.33);
    return mmHg.toFixed(2);
}