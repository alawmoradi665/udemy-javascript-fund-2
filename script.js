// 'use strict';
// // forbids us to do certain things, and will show visible errors so this allows us to write code with less errors

// // let hasDriversLicense = false;
// // const passTest = true;

// // if(passTest) hasDriversLicense = true;
// // if(hasDriversLicense) console.log('I can drive');

// // funkar ej som variable bc the word is a reserved word, som key words, for upcoming features
// // const interface = 'Audio';
// // const private = 1;
// // const if = 33;



// function logger() {
//     console.log('My name is Alaw');
// }

// // calling / invoking / running the function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// // passing 5 and 8 as params - they get added to juice. To save that information, create a variable
// const appleJuice = fruitProcessor(5, 8);
// // to show in the console, log the function and its args
// console.log(fruitProcessor(5,8));

// // using the function to create a new variable, another juice with different args - different numbers of the same recipe basically
// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// // function greeting(alias, town){
// //     const message = `Hello ${alias}, what's up in ${town}?`;
// //     return message;
// // }

// // console.log(greeting('Alaw', 'Bondi'));


// // Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1994);

// // Function expression
// // Anonymous function
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1994);
// console.log(age1,age2);

// ARROW FUNCTION
// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1994);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} will retire in ${retirement} years!`
// }

// console.log(yearsUntilRetirement(1994, 'Alaw'));
// console.log(yearsUntilRetirement(1987, 'Jacob'));



// CALLBACK FUNCTIONS
// function cutFruitPieces(fruit) {
//     return fruit * 4 
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));
// no need to store it in a variable because what we are calling will be stored in the applePieces and orangePieces

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} will retire in ${retirement} years!`);
//         return retirement
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1994, 'Alaw'));
// console.log(yearsUntilRetirement(1970, 'Jacob'));
