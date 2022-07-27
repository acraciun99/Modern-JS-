// callbacks & foreach

// const myFunc = (callbackFunc) => {
//     //do smth
//     let value = 50
//     callbackFunc(value);
// }

// myFunc(value => {
//     // do smth
//     console.log(value)
// })

let people = ['alex', 'stefan', 'marcel', 'lucian', 'andrei'];

const logPerson = (person, index) =>{
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson)