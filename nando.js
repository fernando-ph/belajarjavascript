//var adalah tempat penampaung data yang dapat dikelarasikan ulang dan juga dapat diubah nilainya
//example var 
var a=12;
var a=14;
console.log(a);

//let tidak dapat di deklarasikan ulang tapi dapat diubah nilaiya
//example let
let b=12;
//let b=14;tidak dapat dideklari ulang tapi bisa mengubah nilai 
b=14;
console.log(b)
//const tidak dapat di deklarasikan ulang dan tidak dapat mengubah nilainya 
const c=13;
//cons c=16; tidak dapat di deklarasikan 
//c=19;tidak dapat mengubah nilai
console.log(c)

//tapi const dapat menambah atau mengapus sebuah nilai nya
//mengubah objek
const aw={a:1,bana:"as"}
aw.age=13
//mengubah array 
console.log(aw)
const aws=[1,2,3,4]
aws.push=(13)
console.log(aws)