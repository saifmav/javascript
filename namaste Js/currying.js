// Noncurried version//
const add = (a, b, c)=>{
    return a+ b + c
}
console.log(add(2, 3, 5)) // 10

// Curried version//
const addCurry =(a) => {
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(addCurry(2)(3)(5))


//ES6
const sendRequest = greet => name => message =>
`${greet} ${name}, ${message}`
sendRequest('Hello')('John')('Please can you add me to your Linkedin network?')


//second way is bind
const addPartial=(x,y,z) => {
    return x+y+z 
}
var partialFunc= addPartial.bind(this,2,3);
partialFunc(5);
//ref https://blog.logrocket.com/understanding-javascript-currying/#:~:text=What%20is%20currying%20in%20JavaScript,functions%20with%20a%20single%20argument.