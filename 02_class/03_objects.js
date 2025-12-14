const myKey=Symbol("sp")

const myObj={
    name:"subho",
    email:"cgvhbjnk@123",
    "phno":"9732639581",
    [myKey]:"fgyu"//key is defiend that way
}
//console.log(myObj.phno). not occur because cxannot wright that way
//console.log(myObj.myKey)
console.log(myObj["phno"])
console.log(myObj[myKey])
// Object.freeze(myObj);//freesz the obj not change support
myObj.name="sp"
console.log(myObj)
//add function in obj
myObj.greeding=function(){
    console.log(`hi js user ${this.name}`)
}
myObj.greeding();
console.log(myObj)
