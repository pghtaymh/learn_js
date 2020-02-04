/*
if (2*4 == 8) {
    console.log("True");
} else if (2 > 5){
    console.log("False");
}
*/
let num = 50;

switch (num) {
    case num < 49:
        console.log("Неверно!");
        break;
    case num < 100:
        console.log("Много!");
        break;
    case num < 180:
        console.log("Еще Много!");
        break;
    case 50:
        console.log("Верно");
        break;
    default:
        console.log("Smthng going wrong!");
        break;
}