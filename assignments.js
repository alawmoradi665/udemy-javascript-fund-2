// LECTURE - FUNCTIONS 

// function describeCountry(country, population, capitalCity) {
//     const sentence = `${country} has ${population} people and the capital is ${capitalCity}.`;
//     return sentence;
// }

// const firstCountry = describeCountry('Sweden', 10000000, 'Stockholm');
// console.log(firstCountry);

// const secondCountry = describeCountry('Finland', 6000000, 'Helsinki');
// console.log(secondCountry);

// const thirdCountry = describeCountry('Australia', 25000000, 'Adelaide');
// console.log(thirdCountry);

// function presentFamily(name, role, age) {
//     const conclusion = `${name} is the ${role} of the family and is ${age} year old.`;
//     return conclusion;
// }

// const person1 = presentFamily('Alaw', 'sister', 27);
// console.log(person1);

// const person2 = presentFamily('Diyar', 'brother', 24);
// console.log(person2);

// LECTURE FUNCTION DECLARATIONS VS. EXPRESSIONS
// FUNCTION DECLARATION
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// const sweden = percentageOfWorld1(10);
// console.log(sweden);

// // FUNCTION EXPRESSION
// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// }
// const land1 = percentageOfWorld2(10);
// console.log(land1);

// ARROW FUNCTION
// const percentageOfWorld3 = population => (population / 7900) * 100;

// console.log(percentageOfWorld3(10));

// CALLING FUNCTIONS
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// function describePopulation(country, population) {
//     const calcPercentage = percentageOfWorld1(population);

//     const countryDescription = `${country} has ${population} people, which is about ${calcPercentage} percent of the population.`;
//     return countryDescription;
// }

// console.log(describePopulation('Sweden', 10));