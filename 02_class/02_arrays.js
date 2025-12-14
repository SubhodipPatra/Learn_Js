const marvel=["srk","superman","spiderman","hulk"]
const dc=["ironman","sp"]
const suerheros=marvel.concat(dc);
const all=[...suerheros,...marvel]
console.log(suerheros);
console.log(marvel)
console.log(all)
//flat use to convert the 2d array into one d array
const myArray=[1,1,2,3,[3,4,5],4,[2,3,4,[3,2,1]],7]
const myArray2=myArray.flat(Infinity);
console.log(myArray2)
//from convert the value in to array
console.log(Array.isArray("subho"))
const ar=Array.from("subho");
console.log(ar);
//of make the array from entity
const num1=12
const num2=13
const num3=67
console.log(Array.of(num1,num2,num3))