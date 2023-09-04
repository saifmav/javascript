// Arro Function 
//ES5
const year=[1995,1996,1997,1998];
var age5=year.map(function(el,index,){
   // console.log(el);
    return 2019-el
})
console.log(age5)

//ES6
let age6=year.map(el =>2019-el )// '=>' is a function and 'el' is parameter or arg 
console.log(age6);
//ES6 with mutation for more agrument 
 age6 = year.map((el,index)=>`This is age ${index + 1}: ${2019-el}`)
console.log(age6);

//practice with current date 
age6 =year.map((el,index)=>{    
    let now =new Date().getFullYear();// Date is method to displaye current name
    let  age = now-el
     return `This is age ${index +1}: ${age}`  

})
console.log(age6);


