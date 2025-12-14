const arr1=[1,2,3,4,5,6,7,8]
const arr2=new Array(1,2,3,4,5,6,7)
arr1.push(2)
console.log(arr1)
arr1.pop()
console.log(arr1)
arr1.unshift(5)
console.log(arr1)
arr1.shift()
console.log(arr1)
console.log(arr1[0])
console.log(arr1.indexOf(6))
const newarr=arr1.join();
console.log(newarr)
console.log(typeof newarr)
//slice and splice
const myArray=[9,8,7,6,5,4,3,3,2,1]
console.log("1st",myArray)
const myArray2=myArray.slice(1,3)
console.log(myArray2)
console.log("2nd",myArray)
const myArray3=myArray.splice(1,3)
console.log("3rd",myArray)//splice can chang inb original array they remove splice range from original array
//splice contain last element
console.log(myArray3)