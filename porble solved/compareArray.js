const a =[1,2,3,4,5,6,7]
const b = [4,7,2]
const repeated = []
for(let  i=0;i < a.length ;i++){
    for(let j=0;j<b.length; j++){
        if(a[i] == b[j]){
            repeated.push(a[i])
            a.splice(i,1)
        }
    }
}
console.log(a);


  
console.log("🚀 ~ file: compareArray.js ~ line 6 ~ repeated", repeated)
