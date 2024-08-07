// make a file calle goodbye.js
// make a goodbye function that says goodbye
// to a passed name.
// export the goodbye function
// require it in greetObject.js
// say goodbye to your object of names
function bye(name) {
    console.log(`Goodbye, ${name}.`);
}
module.exports = bye;