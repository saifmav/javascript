const isPrime = (num) =>{
    let isPrime = true
    if(num == 1){
        console.log('1 is neither prime not composit number')
    }else if(num > 1){
        for (let i = 2; i < num ; i++){
            if(num % i == 0){
                isPrime = false
                break
            }   
        }
        if(isPrime){
            console.log('Is prime Number')
        }else{
            console.log('Is not Prime Number');
        }
    }else{
        console.log('Is not Prime');
    }
    
}
const test = isPrime(15)
