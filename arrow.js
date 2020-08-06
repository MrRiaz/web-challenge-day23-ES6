// old process function declare

// function doubleIt(num) {
//     return num * 2;
// }
// let result = doubleIt(5);
// console.log(result);


// const doubleIt = function(num) {
//     return num * 2;
// }

// const result = doubleIt(5);
// console.log(result);



//ES6 process function declare....
const doubleIt = num => num * 2;        //parameter 1ta hole () use na krleo hoy.
const result = doubleIt(10);
console.log(result);



const add = (x, y) => x + y;        // parameter multiple hole () ar moddhe parameter dite hoy.
const result2 = add(15, 18);
console.log(result2);



const giveMe = () => 5;
const result3 = giveMe();       // Parameter ar opor jokhon 
console.log(result3);



const extraWork = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const total = sum * diff;
    return total;                       //multi work takle {} ar moddhe likte hoy.
}
const result4 = extraWork(22, 20);
console.log(result4);
