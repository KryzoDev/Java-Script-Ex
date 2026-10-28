// 1
// let Arr1 = [1, 5, "4", "hello"];
//  let Arr2 = [true, 2, {}, ["a"], 222];
//  console.log(Arr1[2]);
//  console.log(Arr2[2]);
//  console.log(Arr1[2] + Arr2[2]);    

// 2
// let words = ["hello", "world", "javascript"];
// console.log(words[0]);

// words[0] = "shagur";
// console.log(words[0]);
// console.log(words);

// 3
//  const array = [10, 25, 13, 44, 15];
// // for
//  for (let i = 0; i < array.length; i++) {
//      console.log(array[i]);
//  }

// // for of
// for (let value of array) {
//     console.log(value);
// }

// 4
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (let value of cart) {
//     total += value;
// }
// console.log(total);

// 5
// let Arr1 = [2,26,67,52,1488];
// Arr1[5] = 100;
// console.log(Arr1);

// 6
// let Arr1 = [2,26,67,52,1488];
// for (let item of Arr1) {
//     console.log(item, typeof item);
// }

// 7
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let value of numbers) {
//     if (value % 2 === 0) {  
//         total += value;
//     }
// }
// console.log(total);

// 8
// const logings = ["admin", "eldar", "student", "user",];
// const login = "eldar";

// let found = false;
// for (let i = 0; i < logings.length; i++) {
//     if (logings.includes (login)) {
//         found = true;
//         break;
//     }
// }
// const message = found
//     ? `Користувач ${login} знайдений`
//     : `Користувач ${login} не знайдений`;
// console.log(message);

// 9
// const logings = ["admin", "eldar", "student", "user",];
// const login = "eldar";

// let found = false;
// for (let item of logings) {
//     if (item === login) {
//         found = true;
//         break;
//     }
// }
// const message = found
//     ? `Користувач ${login} знайдений`
//     : `Користувач ${login} не знайдений`;
// console.log(message);

// 10
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (let number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log("Найменше число:", smallestNumber);

// 11
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const combinedArray = [...array1, ...array2];
// let total = 0;
// for (const number of combinedArray) {
//     total += number;
// }
// console.log("Сума всіх чисел:", total);














// DZ (2)
// 1
// let numbers = [67,52,1488]
// numbers[1] = 10;
// console.log(numbers);


// 2
// let strings = ["hello", "world", "javascript"];
// strings[3] = "shagur";
// console.log(strings);


// 3
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for (let value of numbers) {
//      total += value;
// }
// console.log(total);




// 4
// const arr1 = [23,43,53,132,543];
// for (let i = 0; i < arr1.length; i += 1) {
//     console.log(arr1[i]);
// }

// 5
// const strings = ["hello", "world", "javascript"];
// for (let i = 0; i < strings.length; i += 1) {
//     if (strings[i].length > 5) {
//         continue;
//     }
//     console.log(strings[i]);
// }


// 6
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = numbers[0];
// for (let value of numbers) {
//     if (value > total) {
//         total = value;
//     }
// }
// console.log("Найбільше число:", total);

// // 7
// const array1 = [5, 10, 15, 20, 34, 50, 67, 55];

// for (const value of array1) {
//     if (value % 2 === 0) {
// console.log(" всі парні числа:", value);
//     }
// }



































































// DZ
// 1
// let numbers = 0;
// while (numbers < 10) {
//     numbers++;
//     console.log(numbers);
// }

// 2

// for (let i = 2; i <= 20; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// 3
// for (let i = 1; i <= 10; i++) {
//     let result = i * 7;
//     console.log(`7 * ${i} = ${result}`);
// }

// 4
// const arr = 16;
// for (let i = 1; i <= arr; i++) {
//     if (i >= arr) {
//         break;
//     }
//     console.log(i);
// }

// 5
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         continue;
//     }
//     console.log(i);
// }
