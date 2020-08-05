const numbers = [12, 85]
console.log(numbers);
numbers[1] = 44;        // const diye kono array declare korleo array er value update kora jabe.
console.log(numbers);
numbers.push(12);       // const diye kono array declare korleo array er moddhe value add kora jabe.
console.log(numbers);


// numbers = ['Rahim', 'Karim', 'Jihat'];  // const diye kono array declare korle array er value change kora jabe na.
// console.log(numbers);

let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum = sum + i;
}
// console.log(i); // let diye kono variable declare korle sei variable area ar baire access kora jai na. atai var r let er moddhe different.

console.log(sum);