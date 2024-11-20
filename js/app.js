// Arrays => Storage container that holds multiple pieces of data

/*
Syntax

let arrName =[item1, item2, item3, ..., itemN];

each item in an array is given an index value
items are zero-indexed

arrName[0] = first item
*/

let coder = 'Trelin';

let coders = ['Trelin', 'Josh', 'Connor', 'Charlie', 'Zeek', 'Janjala', 'Will', 'Chloe', 'Favor', 'Lana', 'Clint', 'Christopher', 'Darius', 'Lachelle'];

console.log(coders)

const josh = coders[1]

console.log(josh);

console.log(coders[7]);
console.log(coders[35/5]);

var seven = 7;

console.log(coders[seven]);

console.log(coders['7']);

console.log(coders[14]);
console.log(coders[coders.length - 1]);

// Type Coercion
console.log(1+1)
console.log('1' + '1')

console.clear()

coders[9] = 'Renee';
console.log(coders);

/*
    Build a random menu
    Write a program that will randomize an appetizer, entree, dessert, and drink. For each selection, build an array of 5 items. ex. ['calamari', 'spinach artichoke dip', 'wings', 'chips & queso', 'celery sticks']
    Return the menu as a string

    ex. "Yoday you will have wings, alfredo pasta, spice cake, and chocolate milk"

    Math.random()
    Slim chance to get 0, no chance for 1
*/

console.log(Math.random() * 10);

// Math.floor()
console.log(Math.floor(5.8));
console.log(Math.floor(5.3));

let apps = ['wings', 'moz sticks', 'fried mushrooms', 'fried pickles', 'chips and queso'];
let entrees = ['stromboli', 'manicotti', 'spaghetti', 'creamy chicken alfredo', 'pizza'];
let deserts = ['tiramisu', 'spice cake', 'brownie and icecream', 'giant cookie', 'cheff surprise desert'];
let drinks = ['water', 'Coke', 'root beer', 'lemonade', 'fruit punch'];

drinks.push('smoothie')

var app = Math.floor(Math.random() * apps.length);
var entree = Math.floor(Math.random() * entrees.length);
var desert = Math.floor(Math.random() * deserts.length);
var drink = Math.floor(Math.random() * drinks.length);


console.log('Today you will be having' + ' ' + apps[app] + ', ' + entrees[entree] + ', ' + deserts[desert] + ', and ' + drinks[drink])

/*
    let idx = math.floor(Math.random() * 5)

    let message = "Today you will have " + apps[idx] + ", " + "entrees[idx] . . ."

    Doesn't exactly work though
*/

/* 
    .push() => adds and item to the end of an array
    .pop() => removes last item in an array
*/

// drinks.push('smothie');
// console.log(drinks);
// drinks.pop();
// console.log(drinks);

/*
    .unshift() => adds an item to the beginning of an array
    .shift() => removes first item in an array
*/

// drinks.unshift('smothie')
// console.log(drinks);
// drinks.shift('smothie');
// console.log(drinks);

let message = `For your meal, you will have ${apps[app]}, ${entrees[entree]}, ${deserts[desert]} for dessert, and a tall glass of ${drinks[drink]} to wash it down. Your total is ${(30.99 + (30.99 * 0.07)) .toFixed(2)}`

console.log(message)
