// basic exmple 1
// function x(){
//     var a =10
//     function y(){
//         console.log(a)
//     }
//     return y
// }
// var d = x()
// d()

//example 2 
// const x = () =>{
//     var c = 10
//     return  function y(){
//         console.log(c)
//     }
//     c = 100
// }
// const d = x()
// d()// 10 
// this case your return function y before it modefied c value

// example 3
// const x = () =>{
//     var c = 10
//      function y(){
//         console.log(c)
//     }
//     c = 100
//     return y
// }
// const d = x()
// d()// 100 

//example 4
// function z (){
//     let a = 100
//     function x(){
//         let a =10
//         function y(){
//             console.log(a)
//         }
//         y()
//     }
//     x()
// }
// z()
