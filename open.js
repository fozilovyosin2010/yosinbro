// 1 ARRAY_day

//TASK#1

// function getFirst(e) {
//   return e.shift();
// }
// console.log(getFirst([2, 3, 4]));

//TASK#2

// let makePair = function (a, b) {
//   return [a, b];
// };
// console.log(makePair(1,2));

//TASK#3

// let reverse = (array) => {
//   return array.reverse();
// };
// console.log(reverse(["hello", "world"]));

//TASK#4

// function incrementArray(e) {
//   e.forEach((element, i, a) => {
//     a[i] = element + 1;
//   });
//   return e;
// }
// console.log(incrementArray([1, 3, 4]));

//TASK#5

// let getLastItem = (arr) => {
//   return arr.pop();
// };
// console.log(getLastItem(["Fozilov", "Yosin"]));

//TASK#6

// let arrtoString = function (value) {

// with forEach method

//   value.forEach((element, i, a) => {
//     a[i] = typeof element.toString();
//   });
// with forEach method

//   let value_2 = value.map((e) => {
//     return typeof e.toString();
//   });
//   return value;
// };
// console.log(arrtoString([1, true, "5", false, "my name"]));

//TASK#7

// function check(arr, arr2) {
//   return arr.includes(arr2);
// }
// console.log(check([2, 4, 3], 2));

//TASK#8

// let findIndex = (arr, str) => {
//   return arr.indexOf(str);
// };
// console.log(findIndex(["i", "love", "you"], "you"));

//TASK#9

// let concatArrays = function (arr, arr2) {
//   return arr.concat(arr2);
// };
// console.log(concatArrays([1, 2, 3], [4, 5, 6]));

//TASK#10

// function toNumArray(arr) {
//forEach
// arr.forEach((element, i, a) => {
//   a[i] = typeof Number(element);
// });
// return arr;
//map
// let arr2 = arr.map((e) => {
//   return typeof Number(e);
// });
// return arr2;
// }
// console.log(toNumArray(["1", "2", "4", "5"]));

// TASK#11

// let parseArray = function (arr) {
//   let arr2 = arr.map((e) => {
//     return typeof e.toString();
//   });
//   return arr2;
// };
// console.log(parseArray([1, 2, "a", "b"]));

//TASK#12

// let sumArr = (num) => {
//   return num.reduce((a, b) => {
//     return a + b;
//   });
// };
// console.log(sumArr([0, 4, 8, 12]));

//TASK#13

// function arrValueType(arg) {
//   let arg_2 = arg.map((e) => {
//     return typeof e;
//   });
//   return arg_2;
// }
// console.log(arrValueType([1,2,null,[]]));

//TASK#14
// let wordLength = (arr) => {
//   arr.forEach((element, i, a) => {
//     a[i] = element.length;
//   });
//   return arr;
// };
// console.log(wordLength(["hello", "world"]));
//TASK#15

//unsolved

//TASK#16

// function invertArray(arr) {
//   arr.forEach((element, i, a) => {
//     a[i] = element * -1;
//   });
//   return arr;

// }
// console.log(invertArray([1, 2, 3, 4]));

//TASK#17

// let getMultiplied = (arr) => {
//   arr.forEach((element, i, a) => {
//     a[i] = element * 2;
//   });
//   return arr;
// };
// console.log(getMultiplied([1, 2, 3]));

//TASK#18

// let getSum = function (arr) {
//   return arr.reduce((sum, element) => {
//     return sum + element;
//   });
// };
// console.log(getSum([45, 3, 0]));

//TASK#19

// function forBiddenLetters(letter, str) {
//   str.forEach((e, i, a) => {
//     a[i] = e.includes(letter);
//   });
//   return str.includes(true);
// }
// console.log(forBiddenLetters("a", ["spoon", "fork", "knife"]));

//TASK#20

// let sumFive = (arr) => {
//   let arg_2 = arr.filter((e) => {
//     return e >= 5;
//   });
//   return arg_2.reduce((sum, e) => {
//     return sum + e;
//   });
// };
// console.log(sumFive([1, 2, 3, 4, 5, 6]));

//TASK#21

// let filterArr = function (arr) {
//   let newArr = arr.filter((e) => {
//     return typeof e === "number";
//   });
//   return newArr;
// };
// console.log(filterArr([1, "2", true, "yosin", 21,null,0]));

//TASK#22

// function evenOrodd(arr) {
//   if (arr.length == 0) {
//     return "even";
//   }
//   return arr.reduce((a, b) => {
//     return a + b;
//   }) %
//     2 ==
//     0
//     ? "even"
//     : "odd";
// }
// console.log(evenOrodd([]));

//TASK#23

// let rangeOfNum = (arr, arr2) => {
//   let newArr = [];
//   for (let i = arr; i < arr2; i++) {
//     newArr.push(i);
//   }
//   newArr.shift();
//   return newArr;
// };
// console.log(rangeOfNum(2, 11));

//ARRAY#2

//TASK#1

// function longestWord(arr) {
//   let arr2 = arr.toSorted((a, b) => {
//     return b.length - a.length;
//   });

//   return arr.find((e) => {
//     return e.length >= arr2[0].length;
//   });
// }
// console.log(longestWord(["hello", "woldbtervioerhoiergb", "rrfeogoeroojo"]));

//TASK#2

// let superHeroes = (arr) => {
//   let arr2 = arr.filter((e) => {
//     return e.includes("man");
//   });
//   return arr2.sort();
// };
// console.log(
//   superHeroes(["Winx", "Wonderwoman", "Hulk", "Spider-man", "Batman"])
// );

//TASK#3

// let squarePatch = function (arr) {
//   let arr2 = [];
//   for (let i = 1; i <= arr; i++) {
//     arr2.push(arr);
//   }
//   let arr3 = [];
//   for (let i = 1; i <= arr; i++) {
//     arr3.push(arr2);
//   }
//   return arr3;
// };
// console.log(squarePatch([5]));

//TASK#4

// function removeTheSmallest(arr) {
//   if (arr.length == 0) {
//     return [];
//   }
//   let small = Math.min(...arr);
//   let arr2 = arr.find((e) => {
//     return e == small;
//   });
//   arr.splice(arr.indexOf(arr2), 1);
//   return arr;
// }
// console.log(removeTheSmallest([15, 1, 12, 6, 1]));

//TASK#5

// let isSpecialArr = (arr) => {
//   let even = [];
//   let odd = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       even.push(arr[i]);
//     } else if (i % 2 == 1) {
//       odd.push(arr[i]);
//     }
//   }
//   let even_2 = even.find((e) => {
//     return e % 2 !== 0;
//   });
//   let odd_2 = odd.find((e) => {
//     return e % 2 !== 1;
//   });
//   return even.includes(even_2) || odd.includes(odd_2) ? false : true;
// };
// console.log(isSpecialArr([2, 3, 4, 5, 0]));

//TASK#6

// let isFitch = function (arr) {
//   let arr2 = [];
//   let check = arr.find((e) => {
//     return e === "flick";
//   });

//   for (let i = 0; i < arr.length; i++) {
//     if (i > arr.indexOf(check)) {
//       if (arr[i] === check) {
//         arr2.push(!false);
//       } else {
//         arr2.push(!i);
//       }
//     } else if (i <= arr.indexOf(check)) {
//       if (arr[i] === check) {
//         arr2.push(false);
//       } else {
//         arr2.push(!false);
//       }
//     }
//   }
//   return arr2;
//   //   return arr.indexOf(check);
// };
// console.log(isFitch(["edabit", "flick", "eda", "bit"]));

//TASK#7

// function sumOfTwoSmallestNums(arr) {
//   let arg_2 = arr.toSorted((a, b) => {
//     return a - b;
//   });
//   return arg_2[0] + arg_2[1];
// }
// console.log(sumOfTwoSmallestNums([19, 5, 42, 2, 77]));
// console.log(sumOfTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));
// console.log(sumOfTwoSmallestNums([2, 9, 6, -1]));

//TASK#8

// let jazzify = function (arr) {
//   let arr2 = arr.map((e) => {
//     return e.includes(7, e.length - 1) ? e : e.concat(7);
//   });
//   return arr2;
// };
// console.log(jazzify(["Dm", "G", "E", "A"]));

//TASK#9

// let capMe = (arr) => {
//   let arr2 = arr.map((e) => {
//     return e.at(0).toUpperCase() + e.slice(1);
//   });
//   return arr2;
// };
// console.log(capMe(["mavis", "senaida", "letty"]));

//TASK#10

// function countAll(arr) {
//   return arr.map((e) => {
//     let str = 0;
//     let num = 0;
//     for (let i = 0; i < e.length; i++) {
//       if (!Number(e[i])) {
//         str++;
//       } else if (Number(e[i])) {
//         num++;
//       }
//     }
//     return `LETTERS: ${str}, DIGITS: ${num}`;
//   });
// }
// console.log(countAll(["12helloWorld"]));

//TASK#11

// let numInStr = function (arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes(1) || arr[i].includes(2) || arr[i].includes(3)) {
//       arr[i].includes(4) ||
//         arr[i].includes(5) ||
//         arr[i].includes(6) ||
//         arr[i].includes(7) ||
//         arr[i].includes(8) ||
//         arr[i].includes(9);
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// };
// console.log(numInStr(["ariej2", "2b", "b", "2gtrgr"]));

//TASK#12

// let uniqueSort = (arr) => {
//   let arr2 = arr.toSorted((a, b) => {
//     return a - b;
//   });
//   let arr3 = arr.reduce((a, b) => {
//     return (a = b);
//   });
//   let arr4 = arr.filter((e) => {
//     return e == arr3;
//   });
//   arr2.splice(arr2.indexOf(arr3), arr4.length - 1);
//   return arr2;
// };

// console.log(uniqueSort([1221, 1, 43, 2, 435, 2, 2, 2, 2]));

//TASK#13

// function sevenBoom(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toString().includes(7)) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }
// console.log(sevenBoom([172, 4, 47]));

//TASK#14

// let filterOddorEven = function (arr, param) {
//   if (param % 2 == 0) {
//     return arr.filter((e) => {
//       return e % 2 == 0;
//     });
//   } else if (param % 2 == 1) {
//     return arr.filter((e) => {
//       return e % 2 == 1;
//     });
//   }
// };
// console.log(filterOddorEven([1, 2, 3, 4, 5, 5, 6], 2));

