// 1. Написать функцию, которая принимает 2 числа
// и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
// function compare2numbers(number1, number2) {
//   if (number1 > number2) {
//     return 1;
//   } else if (number1 < number2) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
// console.log(compare2numbers(173, 17));

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
// function calcFactorial(number) {
//   let i = number;
//   while (i !== 1) {
//     i--;
//     number = number * i;
//   }
//   return number;
// }
// console.log(calcFactorial(5));

// 3.Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
// function createNumber(digit1, digit2, digit3) {
//   return Number(`${digit1}${digit2}${digit3}`);
// }
// console.log(createNumber(1, 7, 8));

// 4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
// function countSquare(a, b) {
//   if (!b) {
//     return a * a;
//   } else {
//     return a * b;
//   }
// }
// console.log(countSquare(2));

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным.
// Совершенное число – это число, равное сумме всех своих собственных делителей.
// function checkIfPerfect(number) {
//   let i = 1;
//   let dividers = 0;
//   while (i < number) {
//     if (!(number % i)) {
//       dividers += i;
//     }
//     i++;
//   }
//   if (dividers === number) {
//     return "The number is perfect.";
//   } else {
//     return "The number is NOT perfect.";
//   }
// }
// console.log(checkIfPerfect(6));

// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
//  и выводит только те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
// WORKS ONLY IN CASE THE PREVIOUS TASK IS UNCOMMENTED
// function checkIfPerfectFromRange(min, max) {
//   let i = min;
//   let perfectNumbers = [];
//   while (i <= max) {
//     if (checkIfPerfect(i) === "The number is perfect.") {
//       perfectNumbers.push(i);
//     }
//     i++;
//   }
//   let perfectNumbersStr = perfectNumbers.join(", ");
//   return perfectNumbersStr;
// }
// console.log(checkIfPerfectFromRange(1, 10000));

// The undermentioned function is needed for tasks 7, 9, 10. It should stay uncommented.
function timeFormat(unit) {
  unit = String(unit);
  if (unit.length === 1) {
    unit = "0" + unit;
  }
  return unit;
}

// 7.Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
// function time(h, m, s) {
//   if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) {
//     return "Please enter valid time.";
//   }
//   if (!m) {
//     m = "00";
//   }
//   if (!s) {
//     s = "00";
//   }
//   h = timeFormat(h);
//   m = timeFormat(m);
//   s = timeFormat(s);
//   return `${h}:${m}:${s}`;
// }
// console.log(time(23, 1));

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function getSec(h, m, s) {
  return `${h * 3600 + m * 60 + s}`;
}
console.log(getSec(10, 10, 10));

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function getTime(s) {
  let h, m, sec;
  h = Math.floor(s / 3600);
  m = Math.floor((s % 3600) / 60);
  sec = s - h * 3600 - m * 60;
  h = timeFormat(h);
  m = timeFormat(m);
  sec = timeFormat(sec);
  return `${h}:${m}:${sec}`;
}
console.log(getTime(54485));

// 10. Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
// При выполнении задания используйте функции из предыдущих 2-х заданий:
// сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
// WORKS ONLY IN CASE 2 PREVIOUS TASKS ARE UNCOMMENTED

function timeDiff(h1, m1, s1, h2, m2, s2) {
  let diffInSec = Math.abs(getSec(h1, m1, s1) - getSec(h2, m2, s2));
  let diffInTime = getTime(diffInSec);
  return diffInTime;
}
console.log(timeDiff(10, 10, 10, 10, 10, 20));
