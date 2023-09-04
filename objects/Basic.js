//object and method

var saif = {//object literals                   //object is like container in that u store all typr  datatype and variable
    firstName : 'saifali',
    lastName :'Mavani',
    birthyear : 1995,
    arr : ['Rahul',1996,'sid',],
    ravi :{
        job :'aplication eng'
    },
    calAge : function(){//function expression and method of object (saif)
        this.age = 2019 - this.birthyear// this is like saif .birthyear //  this calling current  object 
        //this.age is store in saif object  
    }
}
console.log(saif.lastName); // in this dot(.) is used to travse in data 
console.log(saif.arr[0]);//with index u can travs in arr
console.log(saif.calAge(1997));//
saif.calAge()
console.log(saif);
 

