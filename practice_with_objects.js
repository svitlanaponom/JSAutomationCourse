//створити 3 обʼєкти через {}
//First
let svitlana = {
    name: "Svitlana",
    age: 28,
    city: "Dnipro",
    occupation: "QA"
};

console.log(svitlana)

//Second
let anotherObject = { country: "Ukraine", city: "Dnipro", established: 1776 };

console.log(anotherObject)

//Third
let anotherSvitlana = {
    name: "Svitlana",
    age: 28,
    surname: "Ponomarenko",
    city: "Dnipro",
    occupation: "QA",
    fullName: function () {
        console.log("Hello! My full name is " + this.name + " " + this.surname);
    },
};

anotherSvitlana.fullName();
console.log(anotherSvitlana)

//створити 3 обʼєкти через Object()
//First
let appleTree = new Object();
appleTree.fruits = "Apples";
appleTree.height = 200;

console.log(appleTree);

//Second
let flowers = new Object();
flowers.species = ["roses", "dandelions", "sunflower"];
flowers.height = [30, 10, 50];
flowers.conditions = {
    water: "warm",
    sun: true,
    temperature: 20,
    bloom: "summer"
};

console.log(flowers);

//Third

let options = new Object();
options.city = "Dnipro";
options.age = 28;
options.true = true;
options.null = null;

console.log(options);

//створити обʼєкт на базі іншого обʼєкту (Object.create(інший_оʼєкт)

let names = {
    firstName: "Svitlana",
    lastName: "Ponomarenko"
};

let personalData = Object.create(names);
personalData.age = 28;
personalData.city = "Dnipro";

console.log(personalData.firstName);

//або через __prototype__), створити одному в кожному форматі

let namesV2 = {
    firstName: "Svitlana",
    lastName: "Ponomarenko"
};

let traits = {
    eyes: "brown",
    hair: "chestnut",
}

traits.__proto__ = namesV2;

console.log(traits.lastName);

//створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)

let engineer = {
    attributes: ["smart", "analythical thinking"],
    years: 40,
    tests: false
};

let QA_engineer = {
    attributes: "attention to details",
    years: 29,
    tests: true
};

QA_engineer.__proto__ = engineer;

console.log(Object.values(engineer));
console.log(Object.getPrototypeOf(QA_engineer));

//унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів

let person = {
    age: 29,
    height: 175,
    eyes: "brown"
}

engineer.__proto__ = person;

console.log(Object.getPrototypeOf(engineer));
