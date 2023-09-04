//Map similar as object literal but advance it work on primative data type
const questions = new Map();
questions.set('question','what version do you used for JavaScript ');//string
questions.set(1,'JSES5');//number
questions.set(2,'JSE2015');
questions.set(3,'JSES7');
questions.set('correct',2);
questions.set(true,'correct answear');//boolen
questions.set(false,'wrong Answear Please try it again');
//console.log(questions);
console.log(questions.get('question'));
console.log(questions.size);

//if you want delete any particular element
//questions.delete(3);
if(questions.has(3)){
   // questions.delete(1);
}
//questions.clear()//it wil clear whole maps

//forloop for map

for(const [key,value] of questions.entries()){
    console.log([key,value]);
    
}
questions.forEach((key,value)=>{
    console.log(`this is ${key}and set ${value}`);
    
})
const ans =parseInt(prompt('wrong Answear Please try it again'));
console.log(questions.get(ans===questions.get('correct')));
