/*function showFirstMessage(text) {
    alert(text);
    let num = 20;
}

showFirstMessage("ww");
*/

/*
let calc = function (a, b) {
    return a + b;
}
console.log(calc(3,2));
*/
let calc = (a, b) => {
    a + b
};
console.log(calc(5, 5));

function retVar() {
    let num = 50;
    return num;
}
let gg = retVar();
console.log(gg);

let str = "test";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

let twelve = "12.2px";
//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

function ucFirst(str) {
    if (str.length == 0) {
        return '';
    } else 
    return str[0].toUpperCase() + str.slice(1);
  }

let strs = ucFirst("john");
console.log(strs);

function checkSpam(str) {
    str = str.toUpperCase();
    if (str.includes("XXX".toUpperCase()) || str.includes("viagra".toUpperCase())) {
        return true;

    } else return false;
}

function truncate (str, maxlength) {
    if (str.length > maxlength) {
        let tmpStr = str.slice(0,maxlength-1);
        return tmpStr+'\u2026';
    } else return str;
}
var example = truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
console.log(example);

function extractCurrencyValue(str) {
    return +str.slice(1);
}
let tmpin = extractCurrencyValue("$120");
console.log(tmpin);
/*
1: let a = 3
2: function addTwo(x) {
3:   let ret = x + 2
4:   return ret
5: }
6: let b = addTwo(a)
7: console.log(b)



1: let val1 = 2
2: function multiplyThis(n) {
3:   let ret = n * val1
4:   return ret
5: }
6: let multiplied = multiplyThis(6)
7: console.log('example of scope:', multiplied)


1: let val = 7
 2: function createAdder() {
 3:   function addNumbers(a, b) {
 4:     let ret = a + b
 5:     return ret
 6:   }
 7:   return addNumbers
 8: }
 9: let adder = createAdder()
10: let sum = adder(val, 8)
11: console.log('example of function returning a function: ', sum)


1: function createCounter() {
 2:   let counter = 0
 3:   const myFunction = function() {
 4:     counter = counter + 1
 5:     return counter
 6:   }
 7:   return myFunction
 8: }
 9: const increment = createCounter()
10: const c1 = increment()
11: const c2 = increment()
12: const c3 = increment()
13: console.log('example increment', c1, c2, c3)

*/