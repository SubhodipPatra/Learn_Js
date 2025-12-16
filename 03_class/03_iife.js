(function invoke(){//name iffe
    console.log("sp")
})();//that will be ececute emedeately
//from safe to global scope polution
//after imideate fuction we alawes add cemicolone  to stope the invoke

//for arrow function
((a,b)=>console.log(a+b))(1,2)//unname effie