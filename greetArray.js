const namesArr = [
    "Jonathan", "Marie", "Jimbo", "Oliver", "Bort"
];
const namesArr2 = [
    "Goku", "Gohan", "Vegeta", "Krillin", "Piccolo"
];
/*for (let i = 0; i < namesArr.length - 1; i++) {
    console.log(`Hello ${namesArr[i]}!`);
}*/
// wrap this forEach in a funcion
function greetNames (arr) {
    arr.forEach((name) => {
        console.log(`Hello ${name}!`);
    });
}

// listNames(namesArr);
// listNames(namesArr2);
global.namesArr = namesArr;
global.greetNames = greetNames;
global.namesArr2 = namesArr2;