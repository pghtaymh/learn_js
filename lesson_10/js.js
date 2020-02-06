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
*/