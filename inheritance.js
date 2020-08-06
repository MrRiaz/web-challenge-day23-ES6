class Parent{
    constructor(){
        this.fatherName = 'Schwerznegger';
    }
}

class Child extends Parent{
    constructor(cldName){
        super();
        this.name = cldName;
    }
    getFullName(){    // getFullName ekti function, kintu class e function keyword likte hoy na.
        return this.name + ' ' + this.fatherName;
    }
}

const baby1 = new Child('Arnold');
const baby2 = new Child('Tom');

console.log(baby1.getFullName(), baby2.getFullName());