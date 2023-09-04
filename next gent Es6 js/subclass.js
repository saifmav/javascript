var Person5=function(Name,Dob,Job){
    this.name=Name;
    this.dob=Dob;
    this.job=Job;
    
}
Person5.prototype.calAge5=function(){
    var age5=new Date().getFullYear()-this.dob
    console.log(age5);  
}
var Athlete5= function(Name,Dob,Job,Medal,Game){
    Person5.call(this,Name,Dob,Job);
    this.medal=Medal;
    this.game=Game;
}
Athlete5.prototype=Object.create(Person5.prototype)
Athlete5.prototype.wonGame=function(){
    this.medal++
    console.log(this.medal);
    
}

var Athlete=new Athlete5('saif',1995,'App',10,'olmpic');
Athlete.calAge5();
 Athlete.wonGame();

 //Es6
 class Person6
{
    constructor(Name,Dob,Job){
        this.name=Name;
        this.dob=Dob;
        this.job=Job;     
    }
    calAge6(){
        var age6=new Date().getFullYear()-this.dob
    console.log(age6);
    }
}
class Athlete6 extends Person6
{
    constructor(Name,Dob,Job,Medal,Game){
        super(Name,Dob,Job);
        this.medal=Medal;
        this.game=Game;
    }
     wonGame6(){
        this.medal++
      console.log(this.medal)     
     }
}
var Athlete2= new Athlete6('sid',1994,'student',12,'state')
Athlete2.calAge6()
Athlete2.wonGame6()