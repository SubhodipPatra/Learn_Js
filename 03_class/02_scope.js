if(true){
    let a=10
    const b=30
    var c=7
}
// console.log(a)
// console.log(b)
console.log(c)
//scope
{var t=9}
console.log(t)
f1();
function f1(){
    console.log("subho1")
}
//f2() we cannort call f2 because that is not working because that function store in avariable
const f2=function(){
    console.log("subho2")
}
//this function only work in obj not function
let obj={
    uname: "subho",
    roll:67,
    class:5,
    chai:  function(){
     console.log(this.uname)
     console.log(this)
    }
}
obj.chai();
let two=function(){
    const name="subho"
    console.log(this.name);
}
two()//that not work in function scope
//arrowfunction
let two1=()=>{
    const name="subho"
    console.log(this.name);
}//that make the arrow fuction
const sum2=(a,b)=>{
    return a+b;//explecite return
}
console.log(sum2(2,3));
const sum3=(a,b)=>(a+b)//implecite return
console.log(sum3(2,3))
//for return obj ({obj})
const sum4=(a,b)=>({name:"subho",
    age:a
})
console.log(sum4(2,4))
