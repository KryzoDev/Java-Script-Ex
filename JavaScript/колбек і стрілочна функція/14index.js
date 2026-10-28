// Напишіть функцію greet(name, callback), яка приймає ім'я та колбек-функцію.
// Функція повинна сформувати привітання "Привіт, Оля!" і передати його в колбек.
// 1
// function greet(name, callback) {
//   const text = `helo,${name}` 
//   callback(text);
// }
// greet("Оля", (message) => {
//   console.log(message);
// });



// 2
// Математична дія
// Напишіть функцію calculate(a, b, callback), яка приймає два числа та колбек. Передайте результат додавання чисел у колбек.
// function calculate(a, b, callback) {
//   const rest = a + b;
//   callback(rest);
// }
// calculate(5, 3, (result) => {
//   console.log(result);
// });
// Очікуваний результат: 8



// DZ

// 1

// const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
// const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// function countItems(array, condition) {
//     let count = 0;

//     for (const element of array) {
//         if (condition(element)) {
//             count++;
//         }
//     }

//     return count;
// }

// const isEven = num => num % 2 === 0;
// const isLarge = num => num > 10;
// const isShort = word => word.length <= 3;

// console.log('Парних чисел:', countItems(numbers, isEven));
// console.log('Чисел більше 10:', countItems(numbers, isLarge));
// console.log('Коротких слів:', countItems(words, isShort));


//  2

// const calculate = (a, b, operation) => operation(a, b);

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;

// const divide = (a, b) => {
//     if (b === 0) {
//         return 'Помилка: ділення на нуль!';
//     }

//     return a / b;
// };

// console.log(calculate(10, 5, add));
// console.log(calculate(10, 5, subtract));
// console.log(calculate(10, 5, multiply));
// console.log(calculate(10, 5, divide));
// console.log(calculate(10, 0, divide));


// 3

// function repeatMessage(times, messageCreator) {
//     for (let i = 0; i < times; i++) {
//         console.log(messageCreator(i));
//     }
// }

// repeatMessage(3, i => `Повідомлення №${i + 1}`);

// repeatMessage(5, i => `Я вивчаю JavaScript! Ітерація ${i + 1}`);

// repeatMessage(3, i => `Привіт! Це повторення ${i + 1}`);


//  4

// const movies = [
//     'Аватар',
//     'Титанік',
//     'Інтерстеллар',
//     'Матриця',
//     'Сам удома'
// ];

// function processMovies(movies, action) {
//     for (let i = 0; i < movies.length; i++) {
//         action(movies[i], i);
//     }
// }

// // Колбек 1
// const showMovies = (movie, index) => {
//     console.log(`${index + 1}. ${movie}`);
// };

// // Колбек 2
// const watchMovies = (movie, index) => {
//     console.log(`Переглядаємо фільм: ${movie}`);
// };

// Колбек 3
// const uppercaseMovies = (movie, index) => {
//     console.log(`${index + 1}. ${movie.toUpperCase()}`);
// };


// console.log('Список фільмів:');
// processMovies(movies, showMovies);

// console.log('Перегляд фільмів:');
// processMovies(movies, watchMovies);

// console.log('Назви великими літерами:');
// processMovies(movies, uppercaseMovies);



