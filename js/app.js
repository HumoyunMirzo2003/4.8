// OOP => Object Oriented Programming

// Spaghetti Code

// let userOneName = "John";
// let userOneEmail = "john@gmail.com";
// let userOneAge = 71;

// function logUserOneName() {
//   console.log(userOneName);
// }

// function logUserOneEmail() {
//   console.log(userOneEmail);
// }

// function logUserOneAge() {
//   console.log(userOneAge);
// }

// let userTwoName = "John";
// let userTwoEmail = "john@gmail.com";
// let userTwoAge = 71;

// function logUserTwoName() {
//   console.log(userTwoName);
// }

// function logUserTwoEmail() {
//   console.log(userTwoEmail);
// }

// function logUserTwoAge() {
//   console.log(userTwoAge);
// }

// let userThreeName = "John";
// let userThreeEmail = "john@gmail.com";
// let userThreeAge = 71;

// function logUserThreeName() {
//   console.log(userThreeName);
// }

// function logUserThreeEmail() {
//   console.log(userThreeEmail);
// }

// function logUserThreeAge() {
//   console.log(userThreeAge);
// }

// let userOne = {
//   name: "John",
//   email: "john@gmail.com",
//   age: 71,
//   logName: function () {
//     console.log(`Salom! Mening ismim ${this.name}`);
//   },
//   logEmail: function () {
//     console.log(`Mening emailim ${this.email}`);
//   },
//   logAge: function () {
//     console.log(`Mening yoshim ${this.age}da`);
//   },
//   address: {
//     city: "Tashkent",
//     district: "Olmazor",
//     logAddress: function () {
//       console.log(`${this.city} shahar, ${this.district} tumani`);
//     },
//   },
// };

// let userTwo = {
//   name: "Jane",
//   email: "jane@gmail.com",
//   age: 65,
//   logName: function () {
//     console.log(`Salom! Mening ismim ${this.name}`);
//   },
//   logEmail: function () {
//     console.log(`Mening emailim ${this.email}`);
//   },
//   logAge: function () {
//     console.log(`Mening yoshim ${this.age}da`);
//   },
//   address: {
//     city: "Tashkent",
//     district: "Olmazor",
//     logAddress: function () {
//       console.log(this);
//     },
//   },
// };

// let userThree = {
//   name: "Jack",
//   email: "jack@gmail.com",
//   age: 48,
//   logName: function () {
//     console.log(`Salom! Mening ismim ${this.name}`);
//   },
//   logEmail: function () {
//     console.log(`Mening emailim ${this.email}`);
//   },
//   logAge: function () {
//     console.log(`Mening yoshim ${this.age}da`);
//   },
//   address: {
//     city: "Tashkent",
//     district: "Olmazor",
//     logAddress: function () {
//       console.log(this);
//     },
//   },
// };

// Factory Functions

// function user(name, email, age, address) {
//   return {
//     name,
//     email,
//     age,
//     address,
//     logName: function () {
//       console.log(`Salom! Mening ismim ${this.name}`);
//     },
//     logEmail: function () {
//       console.log(`Mening email pochtam ${this.email}`);
//     },
//     logAge: function () {
//       console.log(`Mening yoshim ${this.age}da`);
//     },
//     logAddress: function () {
//       console.log(
//         `Mening Shahrim va Tumanim: ${this.address.city} shahar, ${this.address.district} tumani`
//       );
//     },
//   };
// }

// let userOne = user("John", "john@gmail.com", 71, {
//   city: "Toshkent",
//   district: "Olmazor",
// });

// userOne.logDetails = function () {
//   console.log(
//     `Mening ismim ${this.name}, email pochtam ${this.email}, yoshim ${this.age}, manzil: ${this.address.city} shahar ${this.address.district} tumani`
//   );
// };

// let userTwo = user("Jane", "jane@gmail.com", 68, {
//   city: "Toshkent",
//   district: "Olmazor",
// });

// Primitive => String, Number, Boolean, BigInt, Symbol, null, undefined

// Constructor Functions

// instance

// function User(name, email, age, address) {
//   this.name = name;
//   this.email = email;
//   this.age = age;
//   this.address = address;
// }

// User.prototype.logName = function () {
//   console.log(`Salom! Mening ismim ${this.name}`);
// };

// User.prototype.logAge = function () {
//   console.log(`Mening yoshim ${this.age}`);
// };

// User.prototype.logAddress = function () {
//   // ...
// };

// let userOne = new User("John", "john@gmail.com", 71, {
//   city: "Toshkent",
//   district: "Olmazor",
// });

// let userTwo = new User("Jane", "jane@gmail.com", 68, {
//   city: "Tashkent",
//   district: "Olmazor",
// });

// Prototypal Inheritance || Prototype chain

// Class => ES6 Syntactic Sugar

// class User {
//   constructor(name, email, age, address) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//   }

//   logAge() {
//     console.log(`Mening yoshim ${this.age}da`);
//   }
// }

// User.prototype.logAge = function () {
//   console.log(`Mening yoshim ${this.age}da`);
// };

// let userOne = new User("John", "john@gmail.com", 71, {
//   city: "Toshkent",
//   district: "Olmazor",
// });

// class Animal {
//   constructor(name, age, color, type) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
//     this.type = type;
//   }

//   run() {
//     console.log(`${this.name} yugurvotti`);
//   }

//   eat() {
//     console.log(`${this.name} oqatlanvotti`);
//   }

//   sleep() {
//     console.log(`${this.name} uxlavotti`);
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log(`${this.name} Akillavotti: VOF Vof Vof`);
//   }

//   save() {
//     console.log(`${this.name} uyyi qo'riqlavotti`);
//   }
// }

// class Cat extends Animal {
//   constructor(favItem, name, email, age, type) {
//     super(name, email, age, type);
//     this.favItem = favItem;
//   }

//   play() {
//     console.log(`${this.name} ${this.favItem} bilan mashg'ul: Meow Meow`);
//   }
// }

// let rex = new Dog("Rex", 3, "Black-Brown", "Ovcharka");
// let pluto = new Dog("Pluto", 3, "yellow", "Cartoon");

// let tom = new Cat("Tree", "Tom", 83, "Space grey", "Cartoon");

class Car {
  constructor(name, model, company, color) {
    this.name = name;
    this.model = model;
    this.company = company;
    this.color = color;
    this.gas = 30;
    this.isStarted = false;
    this.isMoving = false;
  }

  refill() {}

  move() {
    if (!this.isStarted) return console.log("Oldin Zavat qilish kere");
    if (this.isMoving) return console.log("Yaxshi ketvommizku ozi");

    this.isMoving = true;
    console.log(`${this.name} Xarakatlanvotti`);
  }

  startEngine() {
    if (this.isStarted)
      return console.log("Ozi zavat bopturibtiku: G'ig' g'ig' g'ig'...");

    this.isStarted = true;
    console.log(`${this.name} Zavat boldi`);
  }

  stopMoving() {
    if (!this.isMoving) return console.log("Ozi toxtab turimmizku");

    this.isMoving = false;
    console.log(`${this.name} yurishdan toxtadi`);
  }

  stopEngine() {
    if (!this.isStarted) return console.log("Ozi Zavat bomagan");
    this.isStarted = false;
    console.log(`${this.name} zavati ochdi`);
  }
}

let mers = new Car("Toychoq", "222", "Mercedes Benz", "Black");

let BMW = new Car("Pahlavon", "X5", "BMW", "White");
