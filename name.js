// const array = ["a", "b", "c"]

//Without Method
// for (let i = 0; i < array.length; i++) {
//   console.log(i);
// }

//With Method

// push method

// let numbers = [1, 2, 3, 4, 5]; --> 1, 2, 3, 4, 5,6, 7, 8, 9, 10
// numbers.push(6, 7, 8, 9, 10);
// console.log(numbers); --> adding one or more elements in the end of the array

//pop method

// let numbers = [1, 2, 3, 4, 5];
// numbers.pop();
// console.log(numbers); -->delete the last element

// unshift method

// let fruits = ["apple", "banana", "apricot"]; --> "coconut", "orange","apple", "banana", "apricot"
// fruits.unshift("coconut", "orange");
// console.log(fruits); -->adding one or more elements in the begining of the array

// shift method

// let fruits = ["apple", "banana", "apricot"]; -->"banana", "apricot"
// fruits.shift();
// console.log(fruits); --> removes the last element from the array

//toString method

// function toString(array) {
//   array.forEach((element, i, a) => {
//     a[i] = typeof element.toString();
//   });
//   return array;
// }
// console.log(toString([1, 2, 3]));

//indexOf method

// let names = ["Yosin", "Nilufar", "Samiya"];
// console.log(names.indexOf("Yosin"));

//includes method

// let fruits = ["banana", "apple", "coconut"];
// let out = fruits.includes("coconut");
// console.log(out);

//slice method

// let numbers = [1, 2, 3, 4, 5];
// let devide = numbers.slice(0, -2);
// console.log(devide);

//concat method

// let array = ["Fozilov"];
// let array_2 = ["Yosin"];
// let conect = array.concat(array_2);
// console.log(conect);

//splice method

// let numbers = ["Odil", "Samiya"];
// numbers.splice(1, 0, "Madina", "Nilufar", "Yosin");
// console.log(numbers);

// Method or function

// function add(user) {
//   return user();
// }

// //Callback
// function user() {
//   return "usergergk";
// }

// console.log(add(user));

//Callback methods

//forEach()
// const array = [23, 2, 3, 2, 3, 23];
// array.forEach((e, i, arr) => {
//   console.log(i); || arr[i]=e;
// });

//map

// const array = [23, 2, 3, 2, 3, 23];
// let arr2 = array.map((e, i, arr) => {
//   return e * 10;
// });

// console.log(arr2);

//example of forEach() method

// let fruit = ["yosin", "olim", "abubakr"];
// fruit.forEach((e, i, a) => {
//   a[i] = e.at(0).toUpperCase() + e.slice(1);
// });
// console.log(fruit);

//example of map() method

// let names = ["yosin", "olim", "abubakr"];
// let names_2 = names.map((e, i, a) => {
//   return e.charAt(0).toUpperCase() + e.slice(1);
// });
// console.log(names_2);

//find method

// function CheckAge(age) {
//   return age.find((e) => {
//     return e > 18;
//   });
// }
// console.log(CheckAge([18, 19, 10, 20]));

//reduce method

// let add = function (arr) {
//   return arr.reduce((prev, next) => {
//     return prev * next;
//   });
// }; // reduce arrays elment and return a new one

// console.log(add([1, 2, 3, 4])); //1+2+3+4=10

//filter method

// function getLongWords(str) {
//   let str_2 = str.filter((e) => {
//     return e.length >= 6;
//   });
//   return str_2;
// }
// console.log(getLongWords(["orange", "apple", "muhammad"]));

//toSorted method

// sort from (prev) till (next)

// function toSort(arr) {
//   let arr2 = arr.toSorted((prev, next) => {
//     return prev - next;
//   });
//   return arr2;
// }
// console.log(toSort([1, 10, 4, 39])); output: 1, 4, 10, 39

//sort method

//for string in alphebit order

// function alphebit(str) {
//   return str.sort();
// }
// console.log(alphebit(["apple", "coconut", "banana", "dog"]));

//and

// function toSort(arr) {
//   let arr2 = arr.toSorted((prev, next) => {
//     return next - prev;
//   });
//   return arr2;
// } //output:39,10,4,1

// console.log(toSort([1, 10, 4, 39]));

//destruckturing method

//example(1) swap elements of the array

// function destruck(str) {
//   [str[0], str[1]] = [str[1], str[0]];
//   return str;
// }
// console.log(destruck(["hello", "world"]));

//example(2) swap variables

// function destruck(a, b) {
//   [a, b] = [b, a];
//   return b;
// }
// console.log(destruck(["hello"], ["world"]));

//example(3) assign elements to variables

// function destruck(arr) {
//   let [a, b, c, d, ...rest] = arr;
//   return rest;
// }
// console.log(destruck([1, 2, 455, 3, 4, null, true, "Yosin"]));

//spread method

//example(1)
// let fruit_2 = [...fruit, ...num];
// console.log(fruit_2);

// let fruits = ["apple", "orange", "banana", "coconuts"];
// let num = [1, 2, 433, 54];
// function fruit(arr) {
//   return arr;
// }
// console.log(fruit([...fruits, ...num]));

//example(2)
// let fruit_2 = ["apple", "orange"];
// function fruits(arr) {
//   return arr;
// }
// console.log(fruits([23, ...fruit_2]));

//example(3)
// let sum = [1, 3, 5];
// function num(x, y, z) {
//   return x + y + z;
// }
// console.log(num(...sum));
