//task 1

// const porschebtn = document.getElementById(carbtn)
// const porscheMath = document.getElementById(carMath)
// const carobj = {
//     manufacturer: 'Porsche',
//     model: '911 turbo s',
//     year: '2013',
//     averagespeed: '80'
// }

// carbtn.addEventListener("click", () => {
//     alert('Марка: ' + carobj.manufacturer)
//     alert('Модель: ' + carobj.model)
//     alert('Год: ' + carobj.year)
//     alert('Средняя скорость: ' + carobj.averagespeed + 'км/ч')
//   });
// carMath.addEventListener("click", () => {
//     let distnum = +prompt('Введите расстояние')
//     let resttime = (distnum / 5);
//     let fulltime = ((distnum + resttime) / 100);
//    alert("За " + fulltime + " часа или часов, опять тимур мяллим играется с кодом 😡") 
//   });

// task 2


// const DrobBtn = document.getElementById(drobbtn1)
// const plusBtn = document.getElementById(plusMath)
// const minusrBtn = document.getElementById(minusMath)
// const multiplyBtn = document.getElementById(multiplyMath)
// const divideBtn = document.getElementById(divideMath)
// const reduceBtn = document.getElementById(reduceMath)

// const chislitelObj = {
//   chis: 12
// }
// const znamenatelObj = {
//   znam: 48
// }

// drobbtn1.addEventListener("click", () => {
//   alert(chislitelObj.chis + "/" + znamenatelObj.znam)
//   });
// plusMath.addEventListener("click", () => {
//   alert(chislitelObj.chis + znamenatelObj.znam)
//   });
// minusMath.addEventListener("click", () => {
//   alert(chislitelObj.chis - znamenatelObj.znam)
//   });
// multiplyMath.addEventListener("click", () => {
//   alert(chislitelObj.chis * znamenatelObj.znam)
//   });
// divideMath.addEventListener("click", () => {
//   alert(chislitelObj.chis / znamenatelObj.znam)
//   });
// reduceMath.addEventListener("click", () => {
//   alert(chislitelObj.chis / 12 + "/" + znamenatelObj.znam / 24 )
//   });

//task 3

// const obj3 = {
//     hour: 19,
//     minute: 59,
//     second: 12,
// }


// document.getElementById("spanHour").innerHTML = obj3.hour;
// document.getElementById("spanMinute").innerHTML = obj3.minute;
// document.getElementById("spanSecond").innerHTML = obj3.second;

// let inpHour = document.getElementById('inpHour');
// let inpMinute = document.getElementById('inpMinute');
// let inpSecond = document.getElementById('inpSecond');

// let spanHour = document.getElementById('spanHour');
// let spanMinute = document.getElementById('spanMinute');
// let spanSecond = document.getElementById('spanSecond');

// document.getElementById("btnHour").addEventListener("click", () => {
//     obj3.hour = obj3.hour + (+inpHour.value);
//     if (obj3.hour  > 23) {
//         obj3.hour  = obj3.hour  - 24;
//     }
//     spanHour.innerHTML = obj3.hour;
// });

// document.getElementById("btnMinute").addEventListener("click", () => {

//     obj3.minute = obj3.minute + (+inpMin.value);
//     if (obj3.minute  > 59) {
//         obj3.minute  = obj3.minute  - 60;
//         obj3.hour = obj3.hour + 1;
//     }
//     if (obj3.hour  > 23) {
//         obj3.hour  = obj3.hour  - 24;
//     }

//     spanMinute.innerHTML = obj3.minute;
//     spanHour.innerHTML = obj3.hour;
// });

// document.getElementById("btnSecond").addEventListener("click", () => {

//     obj3.second = obj3.second + (+inpSec.value);
//     if (obj3.second  > 59) {
//         obj3.second  = obj3.second  - 60;
//         obj3.minute = obj3.minute + 1;
//     }
//     if (obj.minute > 59) {
//         obj3.minute  = obj3.minute  - 60;
//         obj3.hour = obj3.hour + 1;
//     }
//     if (obj3.hour  > 23) {
//         obj3.hour  = obj3.hour  - 24;
//     }
//     if(obj3.minute == 60) {
//         obj3.minute = 0
//     }
//     spanMinute.innerHTML = obj3.minute;
//     spanHour.innerHTML = obj3.hour;
//     spanSecond.innerHTML = obj3.second;
// });