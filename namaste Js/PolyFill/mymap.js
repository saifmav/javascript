// array.map(callbac(currVal,index, arr)) but it new array

//polyfill of map
Array.prototype.myMap = function(callBack){
    let result = []
    for(let index = 0; index < this.length; index++){
        result.push(callBack(this[index], index, this))
    }
    return result
}

//example 
const arr = [1,2,3]
const ans = arr.myMap((ele, index)=> ele+1)
