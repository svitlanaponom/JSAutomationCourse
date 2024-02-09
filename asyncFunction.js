//First async function
async function arrayNames() {
    return ["Svitlana", "Anton"]
}
arrayNames().then((names) => {
    console.log(names);
})

//Second async function
async function moreMath() {
    return 5 / 2 * 11;
}
moreMath().then((res) => {
    console.log(res);
})

//Third async function
async function mathCalculations() {
    return 5 * 2;
}
mathCalculations().then((result) => {
    console.log(result);
    return result
}).then((result1) => {
    console.log(result1 + 2);
})