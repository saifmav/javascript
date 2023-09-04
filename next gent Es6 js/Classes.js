//Classes
//ES5
var Person5 = function (FirstName, LastName, Dob) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Dob = Dob;
}
Person5.prototype.CalAge = function () {
    var Age = new Date().getFullYear() - this.Dob
    console.log(Age);

}
var Dipti = new Person5('Dipti', 'Patil', 1990)
console.log(Dipti);
Dipti.CalAge()

//ES6// same way hoe you create constructor in Es5
class Person6 {
    constructor(FirstName, LastName, Dob) {//fuction constructor in ES5
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Dob = Dob;

    }
    CalAge(){//prototype type in ES5
        var age6=new Date().getFullYear()-this.Dob;
        console.log(age6);
        
    }
    static method(){
        console.log('this way you can make static method on ES6');
        
    }
    
}
var Saif=new Person6('saif','Mavani',1995);
console.log(Saif);
Saif.CalAge()
Person6.method()//for static method you have too  call class name not object which you  create 
//ES7 
class Person7 {
    FirstName = 'Saif';//constructor
    method = () => {//methods as arro function
        console.log(this.FirstName);

    }
}
const name=new Person7()
name.method()
