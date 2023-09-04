var boxes=document.querySelectorAll('.box');
console.log(boxes);//nodelist (collection)

// ES5 for and nodList to convert in array
var boxes5= Array.prototype.slice.call(boxes);
console.log(boxes5);
boxes5.forEach(function(ele) {
    //console.log(ele);
    ele.style.backgroundColor='green'    
});


//Same in ES6
var boxes6= Array.from(boxes);
boxes6.forEach(ele=>ele.style.backgroundColor='red')

//Continue and break statment in ES5
// for (var i=0;i<boxes5.length;i++){
//     if(boxes5[i].className==='box blue'){
//         break;//try continue
//     }
//     else
//     {
//         boxes5[i].textContent='hello guys'
//     }
// }
//ES6
for(const ele of boxes6){
    if(ele.className ==='box blue'){
        continue;
    }
    ele.textContent='hello ES6'

}

//more in pratices
//ES6 
var age=[12,23,6,7,13];
var full=age.map(function(ele){
    return ele>=18
})
console.log(full);
console.log(full.indexOf(true));//index no in array
console.log(age[full.indexOf(true)]);//particular element

//ES6
console.log(age.findIndex(cur => cur>=18));
console.log(age.find(cur => cur>=18 ));



