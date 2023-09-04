const arr = [4, 3, 1, 2]

const area = function(radius){
    return Math.PI * radius * radius
}
//genric function
const calculate =  function(nums,logic){
    const output = []
    for(let i=0; i < nums.length; i++){
        output.push(logic(nums[i]))
    }
    return output
}

// const test = calculate(arr, area)
console.log("🚀 ~ file: poliyfill.js ~ line 18 ~ test", calculate(arr, area))
