//type 1
// const FiboSeres = (num)=>{ 
//     let n1 = 0, n2 = 1 , nextTerm 
//     for(let i = 1 ; i <=num ;i++){
//         console.log(n1)
//         nextTerm = n1 + n2 
//         n1 = n2
//         n2 = nextTerm 
//     }
// }
// FiboSeres(5)

//type 2
const Fib = (num)=>{
    let fib = [0, 1]
    for(let i = 2 ; i<=num ; i++){
        fib.push(fib[i-2] + fib[i-1])
    }   
    console.log(fib);
}
Fib(5)
