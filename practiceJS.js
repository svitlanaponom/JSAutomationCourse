// String

name = "Svitlana Ponomarenko"
console.log("Hello! My name is " + name)

//Number

year = 1995
console.log("I was born in " + year)

//Boolean

doLiveInDnipro = true
console.log("Do I live in Dnipro? " + doLiveInDnipro)

//Undefined
//Calling some non-existent variable to get undefined

console.log(typeof doesntExist)

//Null

future = null
console.log(future)

//NaN
//Making mathematical calculations on string to get Not a Number

age = "twenty nine"
console.log(age * 8)

//Infinity
//Dividing a number by 0 which is impossible to get Infinity

unreal = 29/0
console.log(unreal)

//Bigint
//Variable that represents very large numeric value. Can be made by adding 'n' to any number

veryBigNumber = 2n
console.log(typeof veryBigNumber)

//Symbol

someSymbol = Symbol('love')
console.log(someSymbol)

//Object
//Just playing with some simple object because we will learn it later

firstObject = {
    color : "purple",
    flower : "Orchid",
    beautifulFlower : function() {
        return this.color + " blooming " + this.flower;
    }
}

console.log(firstObject.beautifulFlower())