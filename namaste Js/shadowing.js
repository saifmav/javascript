//example 1 with var
// var a = 100
// {
//     var a = 10
//     let b = 20
//     const c = 30
//     console.log(a)//10
//     console.log(b)//20
//     console.log(c)//30
// }
// console.log(a)//10 because it modified 
// console.log(b)

//example 2  with let 
// let b = 100
// {
//     var a = 10// thsi wiil be global memory
//     let b = 20
//     const c = 30
//     console.log(a)//10
//     console.log(b)//20 
//     console.log(c)//30
// }//this will be in block 
// console.log(b)//100 this will be in script

//example 3 lexical
const a = 10
{
    const a = 20
    {
        const a = 30
        console.log(a)// block 30
    }
    console.log(a)//block 20
}
console.log(a)// script //10
