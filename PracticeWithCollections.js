//Cтворити масив з цифрами [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9], 
//перебрати масив і до кожного числа додати 5 і вивести результат в консоль
let arr = [1, 1, 1, 2, 3, 4, 5, 5, 66, 6, 6, 7, 77, 8, 8, 8888, 9];
arr.forEach((value) => {
    console.log(value + 5);
});
//Створити на базі масиву Set унікальних значень, 
//ітерувати через сет і кожне число збільшити на 2, 
//далі вивести суму всіх елементів
let set = new Set(arr);
set.forEach((value) => {
    console.log(value + 2);
});

let sum = 0;
set.forEach(value => {
    sum += value;
})
console.log(sum)
// створити мапу з літерами алфівіту і значеннями з сету {"a" : 1, "b" : 2 ....}
// зробити конкатенацію ключів з мапи.
let lettersMap = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", 5],
    ["f", 6],
    ["g", 7],
    ["h", 8]
]);
console.log(lettersMap);

let text = "";
for (let x of lettersMap.keys()) {
    text += x;
}
console.log(text);