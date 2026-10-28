// // Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи


// const students = [
//   {
//     name: "Олександр",
//     age: 15,
//     gender: "male",
//     grade: 10,
//   },
//   {
//     name: "Марія",
//     age: 16,
//     gender: "female",
//     grade: 11,
//   },
//   {
//     name: "Андрій",
//     age: 14,
//     gender: "male",
//     grade: 9,
//   },
//   {
//     name: "Софія",
//     age: 15,
//     gender: "female",
//     grade: 10,
//   },
//   {
//     name: "Максим",
//     age: 17,
//     gender: "male",
//     grade: 11,
//   },
//   {
//     name: "Анна",
//     age: 14,
//     gender: "female",
//     grade: 9,
//   },
//   {
//     name: "Дмитро",
//     age: 16,
//     gender: "male",
//     grade: 10,
//   },
//   {
//     name: "Катерина",
//     age: 15,
//     gender: "female",
//     grade: 10,
//   },
//   {
//     name: "Владислав",
//     age: 17,
//     gender: "male",
//     grade: 19,
//   },
//   {
//     name: "Анастасія",
//     age: 14,
//     gender: "female",
//     grade: 5,
//   },
// ];

// function avargeGrade(aray){
//     let sum = 0;
//     for (let i = 0; i < aray.length; i++){
//         sum += aray[i].grade;


//     }
//     // return sum / aray.length;
//     return `Середній бал групи: ${sum / aray.length}`

// }
// console.log(avargeGrade(students));

// DZ
// 1

// const bankAccount = {
//     ownerName: "Іван",
//     accountNumber: "123456789",
//     balance: 1000,

//     deposit(amount) {
//         if (amount > 0) {
//             this.balance += amount;
//             console.log("Рахунок поповнено. Залишок:", this.balance);
//         } else {
//             console.log("Некоректна сума!");
//         }
//     },

//     withdraw(amount) {
//         if (amount <= 0) {
//             console.log("Некоректна сума!");
//         } else if (amount > this.balance) {
//             console.log("Недостатньо коштів!");
//         } else {
//             this.balance -= amount;
//             console.log("Гроші знято. Залишок:", this.balance);
//         }
//     }
// };

// const choice = confirm("Натисніть OK, щоб поповнити рахунок, або Cancel, щоб зняти гроші.");
// const amount = Number(prompt("Введіть суму:"));

// if (choice) {
//     bankAccount.deposit(amount);
// } else {
//     bankAccount.withdraw(amount);
// }


// 2

// const weather = {
//     temperature: Number(prompt("Введіть температуру в градусах Цельсія:")),
//     humidity: 60,
//     windSpeed: 10,

//     isFreezing() {
//         return this.temperature < 0;
//     }
// };

// if (weather.isFreezing()) {
//     console.log("Температура нижче 0 градусів Цельсія");
// } else {
//     console.log("Температура вище або рівна 0 градусів Цельсія");
// }


// / 3

// const user = {
//     name: "Іван",
//     email: "ivan@gmail.com",
//     password: "12345",

//     login() {
//         const email = prompt("Введіть email:");
//         const password = prompt("Введіть пароль:");

//         if (email === this.email && password === this.password) {
//             console.log("Вхід успішний!");
//         } else {
//             console.log("Неправильний email або пароль!");
//         }
//     }
// };

// user.login();


// / 4

// const movie = {
//     title: "Інтерстеллар",
//     director: "Крістофер Нолан",
//     year: 2014,
//     rating: 8.7,

//     isPopular() {
//         return this.rating > 8;
//     }
// };

// console.log("Назва:", movie.title);
// console.log("Режисер:", movie.director);
// console.log("Рік випуску:", movie.year);
// console.log("Рейтинг:", movie.rating);
// console.log("Рейтинг вище 8:", movie.isPopular());




        
        









