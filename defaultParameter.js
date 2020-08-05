function add(num1, num2){
    return num1 + num2;
}

let result = add(15, 17);
console.log(result);



// parameter 1 ta dile error asbe. solve korar way 3 ti.
// function add(num1, num2){
//     return num1 + num2;
// }
    
// let result = add(15);   
// console.log(result);


// Solve no. 1
function add(num1, num2) {
    if(num2 == undefined){
        num2 = 0
    }
    return num1 + num2;
}

let sum = add(17);
console.log(sum);


//Solve no. 2
function add(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}

let solve2 = add(19);
console.log(solve2);



// ES6 default parameter New Method
function add(num1, num2 = 20) {
    return num1 + num2;
}       // akhene parameter na dile default value bosbe, r parameter dile oi value bosbe.

let defaults = add(20, 1);
console.log(defaults);