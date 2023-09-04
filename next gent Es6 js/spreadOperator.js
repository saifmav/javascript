// spreadOpeartor

//ES5
function add(a,b,c,d,e){
    return a+b+c+d+e;
}
//  var added=add(10,20,4,7,4);
//  console.log(added);

//same this by using apply method 
var sum1=[10,20,4,7,5];
// var  added=add.apply(null,sum1);
// console.log(added);

//ES6 
let sum2=add(...sum1); //when fuction is call then spreadopeartor are used
console.log(sum2);

//spreadOpeartor to expand array
const oldFriends=['vikas','sid','ravi'];
const newFriends=['rahul','anand','rishab'];
const Friends=[...newFriends,'mukesh'];
const friends=[...oldFriends,...Friends];
console.log(friends);


const header=document.querySelectorAll('h1');
const text=document.querySelectorAll('.box');
const all=[...header,...text];
Array.from(all).forEach(ele=>ele.style.color='purple')

//for Object 
const Person={
    name:"saif",
    Age:"24"
}
const Person2={
    ...Person,
    Address:"boisar"
}
console.log(Person2);


