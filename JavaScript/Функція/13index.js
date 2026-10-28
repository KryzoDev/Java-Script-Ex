//  Напишіть функцію hello2(), яка при виклику буде приймати змінну name (наприклад, «Василь») і виводити рядок (в нашому випадку «Привіт, Василь»).
// 1
// function hello2(name){
//     return `Привіт,${name}`;






// }
// console.log(hello2("Василь"));


// Напиши функцію logItems(items) для перебора і логування массива
// 2
// function logItems(item){
//     for(const items of item){
//         console.log(items);





//     }







// }


// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы'])



// 3
// function divide(){
// const number1 = Number(prompt("Enter number"));
// const number2 = Number(prompt("Enter number"));
// if (number2 === 0){
//     console.log("Ділення на нуль не можливе");
//     return



// }
// console.log(number1/number2);







// }
// divide()






// DZ
// Завдання 1 
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// // Завдання 2 
// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(' ');
//   return words.length * pricePerWord;
// }

// // Завдання 3 
// function findLongestWord(string) {
//   const words = string.split(' ');
//   let longestWord = words[0];

//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

// // Завдання 4 
// function formatString(string) {
//   if (string.length <= 40) {
//     return string;
//   }
//   return string.slice(0, 40) + '...';
// }

// // Завдання 5 
// function checkForSpam(message) {
//   const lowerMessage = message.toLowerCase();
//   return lowerMessage.includes('spam') || lowerMessage.includes('sale');
// }

// // Завдання 6 
// let input;
// const numbers = [];

// while (true) {
//   input = prompt('Введіть число');
//   if (input === null) break; // натиснув Cancel
//   input = Number(input);
//   numbers.push(input);
// }

// if (numbers.length > 0) {
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   console.log(`Загальна сума чисел дорівнює ${total}`);
// }
