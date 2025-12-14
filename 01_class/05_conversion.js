console.log(1>2)
console.log("02">1)
console.log(null==0)
console.log(null>=0)
console.log(null<0)//we avoid conversoion of null, undefiend
console.log(1==="1")//strict check data type and value
//primitative datatype 7=>string,number,boolean,null,undefiend,symbol
//ref type Arrays,Object,Function
//array
const hero=["spiderman","superman"]
//obj
const myObj={
    name1:"subho",
    roll:12
}
//big int
let big=4567890456789456789456784567

//fun
const fun=function(){
console.log("SUBHO");
}

/************************************************/
//stack(primitative) get copy
//  Heap(Non-primitative) get reference
let another="subho"
let name=another
another="dip"
console.log(another)
console.log(name)

let user={
    name: "subho@123",
    url: "der@1234"
}
let user2=user;
user2.name="dip";
console.log(user.name)

