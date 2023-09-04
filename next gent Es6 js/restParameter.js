//Rest Parameter
//ES5
// function age() {
//     //console.log(arguments);
//     var ArrayAge=Array.prototype.slice.call(arguments);
//     ArrayAge.forEach(function(ele){
//         console.log((new Date().getFullYear()-ele)>=18);   
//     });  
// }
// age(1991,1992,1993,1994);
//ES6
// function age6() {
//     let Arr=Array.from(arguments);
//     Arr.forEach(ele => {
//         console.log(2020-ele);
        
//         console.log((new Date().getFullYear()-ele)>18);
           
//     })        
// }
// age6(1990,1994,1995,2000,2015);
//optimaze
function age6(limit,...year) {//Rest parameter
    year.forEach(ele => {        
        console.log((new Date().getFullYear()-ele)>limit)
           
    })        
}
age6(20,1990,1994,1995,2000,2015);
