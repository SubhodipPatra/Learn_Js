const score=100
console.log(score);
const bal=new Number(1002.9679)
console.log(bal);
console.log(bal.toFixed(2))//used for decimalvalue
console.log(bal.toPrecision(4))//we focus on 4 digit
let number2=100000000

console.log(number2.toLocaleString('en-IN'))//return string indian formate

/****************************/
//Math
console.log(Math)
console.log(Math.abs(-3))
console.log(Math.round(4.3))//make roundofff
console.log(Math.ceil(3.6))//make it upper vale 4
console.log(Math.floor(3.4))//make lower bound 3
//Random
console.log(Math.random());
console.log(((Math.random())+1).toPrecision(1));
console.log(Math.floor((Math.random()*10)+1))
//using max,min
const max=10
const min=20

console.log(Math.floor(Math.random() *(max-min+1))+min)//max-min+1=10
