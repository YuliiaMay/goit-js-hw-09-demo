// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";



const refs = {
    input: document.querySelector('#datetime-picker'),
    button: document.querySelector('[data-start]'),
    timer: document.querySelector('.timer'),
    field: document.querySelectorAll('.field'),
    label: document.querySelectorAll('.label'),
    // test: document.querySelector('.timer').children,
    // text: document.querySelectorAll('.label'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

let timerId = 

console.log(refs.field);
// console.log(refs.text);

// // markut
refs.timer.style.paddingTop = "15px";
// // refs.timer.style.width = "240px";
refs.timer.style.display = "flex";
refs.timer.style.flexDirection = "row";
// refs.timer.style.gap = "10px";
// // refs.timer.style.justifyContent = "center";
// // refs.timer.style.alignItem = "center";
// // refs.field.style.flexDirection = "column";

// refs.field.style.display = "flex";
// refs.field.style.flexDirection = "column";


refs.timer.style.fontSize = "8px";
refs.timer.style.textTransform = "uppercase";


refs.days.style.fontSize = "20px";
refs.days.style.fontWeight = "600";
refs.hours.style.fontSize = "20px";
refs.hours.style.fontWeight = "600";
refs.minutes.style.fontSize = "20px";
refs.minutes.style.fontWeight = "600";
refs.seconds.style.fontSize = "20px";
refs.seconds.style.fontWeight = "600";
refs.seconds.style.fontSize = "20px";



// =================================================


const options = {
    enableTime: true,
    // dateFormat: "Y-m-d H:i",
    minDate: "today",

    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
};

console.log(options);
console.log(options.defaultDate);

const currentDate = new Date();
console.log(currentDate);