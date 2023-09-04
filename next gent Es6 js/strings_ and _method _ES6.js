// srtring for ES6 we are using  templet literial

let FirstName ='Saif Mavani';
let year = 1996
function CalculAge(){
    return (2020-year)
}
//ES5
//console.log(FirstName+' was born on '+year+' .His Age is Now '+CalculAge(1996));

//ES6
console.log(`${FirstName} was born on ${year} .His Age is Now ${CalculAge(1996)}`);//``backtide and ${} this is templet literal (templet sring)

//method to  use templet string 
const n =`${FirstName}` 
console.log(n.startsWith('S'));// o/p true ,this will give you start letter 
console.log(n.endsWith('i'));// o/p true ,this will give you end letter
console.log(n.includes(' '));// o/p true,this will give any middle letter
console.log(n.repeat(5));// o/p true this will repeat 

