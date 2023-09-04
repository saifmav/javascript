//array.find(callback ) but it check condition and return according  to that but first value not whole array or object

Array.prototype.myFind = function(callBack){
    for(let index = 0 ; index < this.length; index ++ ){
        if(callBack(this[index], index,this)){
            return this[index]
        }
    }
}
//example
const arr = [1,2,3,4]
const res = arr.myFind((ele)=>ele>3)
console.log("🚀 ~ file: myFind.js ~ line 12 ~ res", res)