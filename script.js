/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

'use strict';

// if (4 == 9) {
//     console.log('OK!');
// } else {
//     console.log('Error');
// }



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Many');
// } else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('OK!'): console.log('Error'); 

// const num = 50;

// switch (num) {
//     case 49:
//         console.log("False");
//         break;
//     case 100:
//         console.log("False");
//         break;
//     case 51:
//         console.log("True");
//         break;
//     default:
//         console.log("Not this time");
//         break; 
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries ===3 && nuggets) {
//     console.log('I am full');
// } else {
//     console.log('Go away!');
// }

// console.log(hamburger || fries || cola);

// let johnReport, alexReport, samReport = 'done';

// console.log(johnReport || alexReport || samReport);

// console.log(hamburger === 3 && cola === 2 || fries ===3 && nuggets);

// console.log(!0);


let num = 50; // цикли  

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++; 
// }
// while (num <55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }  

// for (let i= 0; i < 3; i++) { // вложенный цикл
//     console.log(i);
//     for (let j= 0; j < 3; j++)
//         console.log(j);
// }

let result = '';
const length = 7;

for (let i = 1; i < length; i++){

    for(let j = 0; j < i; j++){
        result += '*';
    }

    result += '\n';
}

console.log(result);

for (let i= 0; i < 3; i++) { 
    console.log('First level: ${i}');
    for (let j= 0; j < 3; j++) {
        console.log('Second level: ${j}');
        for (let k= 0; k < 3; k++) {
            if (k === 2) continue
            console.log('Third level: {k}');
        }
    }    
}