"use strict"
//En el array nums = [6,13, 1, 15, 5 ] usando un for y un if muestra los elementos  impares
let nums = [6,13, 1, 15, 5 ];
for (let num of nums) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}

