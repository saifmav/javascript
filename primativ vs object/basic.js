// //primative
// var a = 20;
// var b = a;
// a = 22;
// console.log(a);
// console.log(b);
//  //object
//  var obj1={
//      name: 'saif',
//      age : 28,
//  };
//  var obj2 = obj1;//it take same ref mean both obj are same 
//  obj1.age = 24 
//  console.log(obj1.age);
//  console.log(obj2.age);
 
//  //function
//  var age = 30;
//  var obj={
//      name:'saifali',
//      age: 35
//  }
//   function change(a,b){
//      a = 32;
//      b.age= 36;//it effect  to og 
//  }
//  change(age,obj)
//  console.log(age);
//  console.log(obj.age); 
 /********************************************* fuction as argument and callback fuction**********/
 var year =[1995,1996,1997,1998,2000];
 function arrCal (arr,fu){
     var arrRes=[];
     for(var i=0;i<arr.length;i++){
        arrRes.push(fu(arr[i]));
        
     }
     //console.log(arrRes);
     return arrRes;
 }
  function calculAge(el){
     return 2019 -el;
 }
 function isFullAge(el){
     return el>=18
 }
 function heart(el){
     if(el>=18 && el<=81){
        return Math.round(206.9-(0.67*el))   ;
     } 
     else{
         return -1;
     }
 }
 var age1= arrCal(year,calculAge);// callback fuction
 console.log(age1);
var full =arrCal(year,isFullAge);
console.log(full);

var rates = arrCal(year ,heart)
   console.log(rates);
    

 
//extra

//  var i=0;//(it work as golbal )
//  function c (){
//     var j=0;
//     i++;
//     j++;
//     console.log("i= "+i+' and '+"j= "+j)
// }
    
// c();
// c();
// c();
