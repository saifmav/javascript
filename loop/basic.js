
//loop
var john =['sid','rahul',1995,false,'salim','deepak']
// for(var i =0;i<john.length;i++){
//     console.log(john[i]);
    
// }
//same with while loop
// var i=john.length-1;
// while(i<john.length)
// {
//     console.log(john[i]);
//     i--
// }

//continue and break
for(var i =4;i<john.length;i++){
    if(typeof john[i]!== 'string')continue //break will stop if string is not there in arry
    {
        console.log(john[i]);
        
    }
    
}
