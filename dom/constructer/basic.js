//function contructo
var Person = function(name,age,lastName,dob){
    this.name=name,
    this.age=age,
    this.lastName=lastName,
    this.dob=dob
   
}
Person.prototype.calAge=function(){
    console.log(2019- this.dob);
    
}//inheatance this will prototype of person construstor instead of func using in every obje once create
var john = new Person("john",26,"mav",1995);//instance of constructor
var sam = new Person('sam',25,"pan",1996);//instance of constructor
john.calAge();
sam.calAge();
//console.log(john);

