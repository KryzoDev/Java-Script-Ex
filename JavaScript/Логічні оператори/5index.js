// 1
// const answer = prompt("Яка офіційна назва JavaScript?");

// if (answer === "ECMAScript") {
//     console.log("Правильно!");
// } else {
//     console.log("Ви не знаєте?. Відповідь: ECMAScript");
// }

// 2
// let num = prompt("Введіть число:");
// if (num > 0) {
//     console.log("1");
// } else if (num < 0) {
//     console.log("-1");
// } else {
//     console.log("0");
// }


// 3
// const a = 2;
// const b = 1;

// let result = (a + b < 4) ? "Нижче" : "Вище";
// console.log(result);

// 4
// const x1 = 10;
// const x2 = 30;
// const number = 45;

// if (number < x1) {
//   console.log(`Число ${number} — до x1`);
// } else if (number > x1 && number < x2) {
//   console.log(`Число ${number} — від x1 до x2`);
// } else if (number > x2) {
//   console.log(`Число ${number} — після x2`);
// } else if (number === x1) {
//   console.log(`Число ${number} — дорівнює x1`);
// } else if (number === x2) {
//   console.log(`Число ${number} — дорівнює x2`);
// }


// 5
// const isOnline = false;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;

// if (canOpenChat) {
//   console.log("Можна відкрити чат");
// }
// else {
//   console.log("Чат недоступний");
// }

// 6
// const subscription = "pro";

// if (subscription === "pro" || subscription === "vip") {
//   console.log("Доступ до контенту відкрито");
// } else {
//   console.log("Доступ до контенту обмежено");
// }

// 7
// const balence = Number(prompt("Введіть баланс:"));
// const payment = Number(prompt("Введіть суму покупки:"));
// console.log (`Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість коштів на рахунку...`);

// if (balence >= payment) {
//     console.log("На рахунку достатньо коштів. Оплата успішна!");
//     console.log(`Залишок на рахунку: ${balence - payment} кредитів`);
// }
// else {
//     console.log("На рахунку недостатньо коштів для проведення операції!");
// }

// console.log("Операція завершена");


// 8
// const totalSpent = Number(prompt("Введіть загальну суму витратрачених коштів:"));
// const payment = Number(prompt("Введіть суму покупки:"));
// let discount

// if (totalSpent >= 5000) {
//     discount = 0.1;
//     console.log("Золоттий рівень: Ви отримали 10% знижки!");
// }   else if (totalSpent >= 1000) {
//     discount = 0.05;
//     console.log("Срібний рівень: Ви отримали 5% знижки!");
// } else if (totalSpent >= 100) {
//     discount = 0.02;
//     console.log("Бронзовий рівень: Ви отримали 2% знижки!");
// } else {
//     discount = 0;
//     console.log("У вас ще немає партнерського рівня. Ви не отримали знижки!");
// }

// console.log(`Оформляємо замовлення на суму ${payment} зі знижкою ${discount}%...`);\

// 9
// const field1 = "Mellstroy";
// const field2 = "Burmaldun";

// if (field1 !== "" && field2 !== "") {
// console.log("Обидва поля заповнені");
// } else {
// console.log("Одне або обидва поля не заповнені");
// }

// 10
// const num1 = 5;
// const num2 = 10;
// const sum = num1 + num2;

// if (sum > 10) {
//     console.log("Сума більше 10");
// } else {

//     console.log("Сума менше або дорівнює 10");
// }

// 11
// const word = " i start learning JavaScript";

// if (word.includes("JavaScript")) {
//     console.log("Рядок містить слово 'JavaScript'");
// } else {
//     console.log("Рядок не містить слово 'JavaScript'");
// }

// 12

// const num = 16;

// if (num > 10 && num < 20) {
//     console.log("Число знаходиться в діапазоні від 10 до 20");
// } else {
//     console.log("Число не знаходиться в діапазоні від 10 до 20");
// }

// 13

// const name = "Sanya";
// const email = "sanyaburmaldun@gmail.com";
// const password = "67521488";

// const isNameValid = name.length >= 3;
// const isEmailValid = email.includes("@") && email.includes(".");
// const isPasswordValid = password.length >= 6;

// if (isNameValid && isEmailValid && isPasswordValid) {
//     console.log("Перенаправлення на іншу сторінку...");

// } else {
//     console.log("Помилка: Перевірте правильність введених даних.");
// }

// 14
