function calAge(birthyear) {
    return 2019 -birthyear
}
var saifAge =calAge(1995);
var vikasAge =calAge(1996);
console.log(vikasAge,saifAge);


//adv
retirment=(year,name)=> {
    var age = calAge(year);
    
    var retiring = 60-age;
    if(retiring>0){
        console.log(name +' retirment in ' +retiring+' year ');
    } else{
        console.log('already retired');
        
    }
        
}

retirment(1995,'saif');
retirment(1994,'krish');
retirment(1955,'ateeq');

//function decleration
const  whatJobYouDo=(job,FirstName)=>{
    switch (job) {
        case 'teacher':
            return FirstName +' teach how to do code '
        case 'developer':
            return FirstName +'do coding what he learn'
    
        default:
            return FirstName + 'do somthing else'
    }
}
 console.log(whatJobYouDo('teacher',' rahul '));
 console.log(whatJobYouDo('developer',' sid  '));
 console.log(whatJobYouDo('nothing',' vikas  '));

 
//note funtion expression give you  result 
//eg 2+3  or you cal function
//5 and  type of 23 'nuumber ' in console //this given result
//note function statment doest give result

