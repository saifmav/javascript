// function square(num){     //function with agrument
//     console.log(num*num);
// }
// square(10);
// square(2);

//u can give multyple argument

function name(person1,person2,person3)
{
    console.log('hii'+person1);
    console.log('hello'+person2);
    console.log('hey'+person3);
}
name(' saif ',' SID ',' vikas ');



//execise
/*function math(x,y){
    return y - x;
}
math(10,40);*/

/*function math(x)
{
    return x*2;
    console.log(x)// after thie ir not reachable  to anthor return
    return x/2;
}
math(30)*/


//problem done by me 

function isEven(n){
    if(n%2===0)
    {
     return true;
    }else{
        return false;
    }
}/*isEven(4)
true
isEven(5)
false*/

//problem based on factoral
function fact(num)
{
    //declare result in variable
    var result = 1;
    //cal fact and store the value in result
    for(var i = 2;i<=num;i++)
    {
        result *= i;
    }//return result variable
    console.log(result);
    return result;
    //1*2*3*4
}