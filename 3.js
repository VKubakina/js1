'use strict';
/* 1. 10+10=20
2. 2010 в result1
3. console.log выводим result1 в консоль*/
let result1 = 10 + 10 + "10";
/*1. 10+"10"=1010
2. "1010"+10=101010
3. 101010 в result2
4. console.log выводим result2 в консоль*/
let result2 = 10 + "10" + 10;
/*1. 10+10=20
2. 20+10=30
3. 30 в result3
4. console.log выводим result3 в консоль*/
let result3 = 10 + 10 + +"10";
/*1. 10/-0=-Infinity
2. -Infinity в result4
3. console.log выводим result4 в консоль*/
let result4 = 10 / -"";
/*1. 10/NaN=NaN
2. NaN в result5
3. console.log выводим result5 в консоль*/
let result5 = 10 / +"2,5";

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);