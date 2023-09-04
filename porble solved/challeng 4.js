var Mark = {
    fullName : 'Mark_jan',
    mass : 195 ,//kg
    height : 2, //meter
    calBmi : function() {
        return this.BMI = this.mass/this.height^2;
    }
}

console.log(Mark);
 Mark.calBmi();


var john ={
    fullName :'john_das',
    mass: 198,//kg
    height : 2.2,//meter
    calBmi :function(){
         return this.BMI =this.mass/this.height^2
        
    }
}
console.log(john);


if (Mark.calBmi() >  john.calBmi()){
    console.log(Mark.fullName +' bmi is higher ');   
}else if(john.calBmi() > Mark.calBmi() ){
    console.log(john.fullName +' bmi is higher ');  
}else{
    console.log('both bmi are same'); 
}
