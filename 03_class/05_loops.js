//same as java
//for-of
let m=new Map()
let arr=[1,2,3,4,5,6,7];
for(let num of arr){
    console.log(num);
}

m.set(1,"subho1");
m.set(2,"subho2");
m.set(3,"subho3");
m.set(3,"subho4");
for(let [key,val] of m){
    console.log(key,"->",val);
}
arr.forEach(function (val){
    console.log(val)
})
arr.forEach((data)=>{
    console.log(data)
})
arr.forEach((data,idx,arr)=>{
    console.log(data),idx,arr
})
let objArr=[
    {name:"subho1",
     skill:"java1"
    },
     {name:"subho2",
     skill:"java2"
    },
     {name:"subho3",
     skill:"java3"
    }
]
objArr.forEach((obj)=>{
console.log(`my name is ${obj.name},my skill is ${obj.skill}`)
})
//for each not return value
//for that problem we solve with filter
const newNum=arr.filter((num)=>{
 return num>5;
})
console.log(newNum)
const newNum2=arr.map((num)=>num*2);
console.log(newNum2)

//chaining 
const newNum3=arr
.map((num)=>num*2)
.map((num)=>num+3)
.filter((num)=>num%2==0)

console.log(newNum3)
//reduce
const newNum4=arr.reduce((a,b)=>a+b,0)
console.log(newNum4)