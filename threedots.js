// old process for add multiple array..
const num1 = [12, 14, 13, 18, 17];
const num2 = [13, 15, 19, 18, 16];
const allNum = num1.concat(num2).concat([5]);
console.log(allNum);



//ES6 process for sum of all arrays.
const ages = [18, 19, 21, 20, 18];
const ages2 = [30, 29, 33, 28, 31];
const ages3 = [25, 28, 22, 26, 24];
const allAges = [...ages, ...ages2, 5, ...ages3];
console.log(allAges);   // akhane ... dile array er value gulo normal value hoye jai.



//ES6 process for Array Max..
const business = 650;
const minister = 450;
const sochib = 780;
const bigger = Math.max(business, minister, sochib);
console.log(bigger);    //jokhon different variable ar moddhe max ber kora hoy..



const takaPoisha = [650, 450, 780, 999];
const maxNum = Math.max(...takaPoisha);
console.log(maxNum);    // akhane array ar moddhe value gulo ... diye normal value kora hoice.

