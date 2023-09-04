const avge=(scores)=>{
    var total =0;
    scores.forEach((score)=>{
        total +=score
    })
    var avg = total/scores.length
    return Math.ceil(avg)
}
var  score=[90,98,89,100,100,86,94];
console.log( avge(score));
var  s=[40,65,77,82,80,73,63,95,49];
console.log( avge(s));
 

