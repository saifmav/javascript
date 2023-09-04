function x (callback){
console.log('first');
const add = callback(10, 20)
console.log(add)
}
function callme (a,b){
    return a + b
}
x(callme)