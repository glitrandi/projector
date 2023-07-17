"use strict"
// 1

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
var sortedNames = userNames.filter(function(name) {if (typeof name === "string") {
  return true;
} return false;}).sort();

const initials = sortedNames.map(function(name) {
    const nameParts = name.split(' ');
    const firstNameInitial = nameParts[0][0];
    const middleNameInitial = nameParts[1][0];
    const lastNameInitial = nameParts[2][0];
    return `${firstNameInitial.toUpperCase}.${middleNameInitial.toUpperCase}.${lastNameInitial.toUpperCase}.`;
  });

console.log(initials);


// 2

const userName = ["Петро", "Емма", "Юстин", "Ілля", "Марта", "Яна", "Василь", "Антон", "Олена"];
const vowels = ["а", "о", "у", "и", "і", "е", "ю", "я", "є"];

const filteredNames = [];

for (let i = 0; userName.length > i; i++) {
const word = userName[i];
if (typeof word !== "string") {
    continue;
};
const lowerCase = word.toLowerCase();
const firstLetter = lowerCase[0];
if (vowels.includes(firstLetter)) {
    filteredNames.push(word);
};
};
console.log(filteredNames);

// Using .filter() method

const filteredNames2 = userName.filter(function (word) {
    if (typeof word !== 'string') {
    return false;
  }
  const lowerCase = word.toLowerCase();
    const firstLetter = lowerCase[0];
    if (vowels.includes(firstLetter)) {
    return true;
    };
    });
    console.log(filteredNames2)
// 3

const currentMaxValue = 4567;
let reversedMaxValue = parseInt(currentMaxValue.toString().split('').reverse().join(''));
console.log(reversedMaxValue);

// 4
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;
const array = resultsArray.flat(Infinity);
productOfArray = array.reduce(function(result, multiplier) {
return result * multiplier;
});
console.log(productOfArray); 
