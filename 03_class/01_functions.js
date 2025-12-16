function java(){
    console.log("SUBHO")
}
let cpp=function(){
    console.log("cpp")
}
cpp()
java();
function sum(a,b){
    return a+b;
}
console.log("the sum is ",sum(1,2));

function str(myname="sam"){//myname="sam". make myname a initial value sam if we dont pass any parameter
    if(myname==undefined){
        return "please enter a user name"
    }
return `my name is ${myname}`
}
console.log(str("subho"))
console.log(str())
//undefiend ==false ""==false
//rest opperator
function calCulateCart(...num1){//...num1 that take all input and bind up
    return num1;
}
console.log(calCulateCart(1,2,3,4,5,6,7))
//function through object
let myObj={
    name: "subho",
    age: 23,
    marks: 45
}
function writeAbout(obj){
console.log(`my name is ${obj.name} and my age is ${obj.age} my marks is ${obj.marks}`)
}
 writeAbout(myObj)