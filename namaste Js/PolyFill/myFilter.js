//arra.filter(callback) but it will return new arrat as per condition
 
//polyFill of filter

Array.prototype.myFilter = function(callBack){
    let result = []
    for (let index = 0; index < this.length; index++) {
        if(callBack(this[index],index, this)){
            result.push(this[index])
        }
    }
    return result
}

//example 

const arr = [1,2,3,4,6,]
const res = arr.myFilter((val)=> val%2==0 )
console.log(res,"==========");