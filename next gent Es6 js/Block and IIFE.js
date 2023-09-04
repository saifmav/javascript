//ES6 IIFE (for data-privacy)
{
    const a = 10;
    let b = 20;
    console.log(a + b);
}
//this same as IIFE if you log outside 
// try if you will give var inside this {} and log outside  
//ES5
(function(){
    var c =3;
    console.log(c);
})()
//IIFE
function ab (a){
    let b = 'some'
    return function (){
        console.log(a + b)
    }
}
let abc = ab('saif')
abc()