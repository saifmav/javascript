const factorial = (num)=>{
    if(num === 0){
        console.log(` number ${num} Factorial is 1`)
    }else if(num < 0){
        console.log(' negative number is not consider')
    }else{
        let fact = 1
        for(let i = 1 ; i<=num ; i++){
            fact *=i
        }
        console.log(fact)
    }
}
factorial(5)
