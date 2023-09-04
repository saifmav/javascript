
var name1=['saif','ashish'];
console.log(name1[0]);
console.log(name1);

//ES6
const [name,age]=['saif',26]
console.log(name);
console.log(age);
// object
const Name={
    FirstName:'saif',
    LastName:'Mavani'
}
//assigin
const {FirstName:a,LastName:b}=Name
console.log(a);
console.log(b);
//In function Destructing
let Retirement = (year)=>{
    
    let age1=new Date().getFullYear()-year;
    return [age1,65-age1] 
}
console.log(Retirement);
let [age1,retering]=Retirement(1995);
console.log(age1);
console.log(retering);







