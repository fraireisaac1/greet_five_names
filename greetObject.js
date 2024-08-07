const greet = require('./greet.js');
const bye = require('./goodbye.js');
const nameObj = {
    name1: "Jonathan",
    name2: "Marie",
    name3: "Jimbo",
    name4: "Oliver",
    name5: "Bort"
};

const nameObj2 = {
    name1: "Nightwing",
    name2: "Oracle",
    name3: "Red Robin"
}
// make a function that is reusable
// so you can pass in any object and have it greet
// and say goodbye to the names in that object
function saluteNames (obj) {
    for (let name in obj) {
        greet(obj[name]);
        bye(obj[name]);
    }
}
saluteNames(nameObj2);
saluteNames(nameObj);