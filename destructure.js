//destructure object
const person = {name: 'Jack William', age: 22, job: 'Facebooker', gfName: 'Ema Watson', address: 'Kochu khet', phone: '01717112211', friends: ['rahim', 'karim', 'sumon']}

const { phone, name, friends} = person;
console.log(name, phone, friends[1]);


//complex object.

const complexObject = {
    name: 'Riaz',
    info: {
        address: 'mohakhali',
        phone: '017111155544'
    }
}

const {address} = complexObject.info;
console.log(address);


// array object

const friends_name = ['Sakib Khan', 'Arman Khan', 'Salman Khan', 'Sharuk Khan', 'Rana Khan'];
const [first, nextFriend, ...remainingFriends] = friends_name;
console.log(remainingFriends);


// ai video bar bar dekte hobe.