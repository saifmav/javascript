//array.ForEach(callBack(currVal, index, array))

//polyFill of ForEach
Array.prototype.myforEach = function(callBack){
    for(let index = 0; index < this.length; index++){
        callBack(this[index],index,this )
    }
}

// Example of myforEach 
// const arr = [1,2,3,4]
// arr.myforEach((val,indx,arr)=>{
//     console.log(val,indx,arr)
// })

