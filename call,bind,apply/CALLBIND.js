var saif={
    name:' saif ',
    age:24,
    presentation:function(style,timeOfDay){
        if(style==='formal'){
            console.log(' Good '+ timeOfDay + this.name +'How Was your Day ?');
            
        }else if(style==='friendly'){
            console.log('how old your'+ this.name+' \n I\'am '+this.age+' year old');
            
        }    
    }
}
var ashish={
    name:' Ashish ',
    age: 22
}
saif.presentation('formal','Morning');
//saif.presentation.call(ashish,'friendly');//in this .call will have all this. (properties)in ashish arguments
//so that is call methods
saif.presentation.apply(ashish,['friendly'])

//bind

