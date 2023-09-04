function interviewQues(job){
    if(job==='designer'){
        return function(name){
            console.log(name + "what is ui and ux design?");
            
        }
    }
    else{
        return function(name){
            console.log("hello"+name+"what do you do");
            
        }
    }
  
}
var designerQuestion = interviewQues('designer');
designerQuestion(' Saif ');
//simple way to right this
interviewQues('designer')('ravi')
//saif_mavani_Az6CkLK