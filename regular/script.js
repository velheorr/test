'use strict'

// new RegExp('pattern', 'flags')
// /pattern/f


/*const ans = prompt('Enter your name');

const reg = /n/ig;*/
// флаги
// i - без учета регистра
// g - все вхождения
// m - когда много строк

/*
console.log(ans.search(reg))*/
/*

console.log(ans.match(reg))
*/

const pass = prompt('Password');

console.log(pass.replace(/./g, '*'))

// а если экранировать точку тогда написать /\./g

// Есть классы
//  \d  все цифры
// \w  все буквы
// \s все пробелы