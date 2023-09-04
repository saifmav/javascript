//ES5 and ES6 difference are given below for let and const

//ES5
// var name5 ='saif';
// var age5 =23;
// name5 ='rahul';//mutation for ES5
// console.log(name5);

// //ES6
// let Name6 ='saifali';
// const age6 = 24;
// Name6 = 'Rahul';
// console.log(Name6,"+++++++++");

// ES5
function DriverLicence(PassTest)  {
    if(PassTest){
         var name5 = 'Ravi';
         var age5 = 22;
         //console.log(name5+ " "+'is ready for test and he is eligible '+" "+age5);//
         
    }   
    console.log(name5+ " "+'is ready for test and he is eligible '+" "+age5);//this will work because var are function-scop in ES5
}
DriverLicence(true);
//but outside of function it will not because  var are specified  under function -scop

// ES6 
function DriverLicence6(PassTest)  {
    // let name6;
    // const age6;//this will give you  error because const will on block-scop so wiil have declare it properly
    if(PassTest){
          name6 = 'rahul';
          const age6 = 22;
         console.log(name6+ " "+'is ready for test and he is eligible '+" "+age6);//block-scop no errror
         }
        //console.log(name6+ " "+'is ready for test and he is eligible '+" "+age6);//thie will give err not define because it in block-scop in Es6
   
}
DriverLicence6(true)
  //practies
  var i=23;
  for (var i = 0; i < 5 ;i++) {
      console.log(i);
           
  }
  console.log(i);// this because it increment please look output //try let and const 
  





