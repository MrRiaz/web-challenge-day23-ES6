class student {
    constructor(sId, sName){
        this.id = sId;       //constructor ar mdde j kono property likher age this likte hoy.
        this.name = sName;
        this.School = 'RDA LAb School & college'
    }
}

const student1 = new student(12, 'Shuvo');
const student2 = new student(15, 'Mahiya');
// student1.id = 18;    akhane ager object ar moto value update, add, access sob kora jabe.

console.log(student1, student2);
// console.log(student1.name, student2.id);