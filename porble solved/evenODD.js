const arr = [2,3,5,6,8,11,13]
const even = []
const odd = []
for(let i=0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        even.push(arr[i])
    }else{
        odd.push(arr[i])
    }
}
console.log(even,"=========",odd)