const arr = [2,4,6,0,8,3,5,0 ]

const data = [
{firstName : 'saifali', lastName: 'mavani', age: 26 },
{firstName : 'ravi', lastName: 'pandey', age: 29 },
{firstName : 'vikas', lastName: 'pawar', age: 56 },
{firstName : 'sid', lastName: 'sankhe', age: 26 }
]
//Basic transform  of map
//double
const double = (x) => x *2
const res = arr.map(double)
//triple
const triple = arr.map((x)=>x *3)
//binary
const binary = arr.map((x)=> x.toString(2))
//Basic transform  of filter

const isOdd =  arr.filter((x)=> x%2)
//all 0 is false
const isEvent = arr.filter((x)=> x%2 === 0)

const greaterThen =  arr.filter((x) => x > 4)
 
const lessThen  = arr.filter(x => x < 8)

const eliminateZero = arr.filter( x => x !==0) 

//example 2 :- filter name whose age is less then 30

const lessAgeThen30 = data.filter((x)=>x.age < 30).map( x => x.firstName) 
console.log("🚀 ~ file: map-filter-reduce.js ~ line 36 ~ lessAgeThen30 ~ lessAgeThen30", lessAgeThen30)
//[ 'saifali', 'ravi', 'sid' ]

//sort

const arr1 = [2,4,6]


////Basic transform  of reduce
const findSum = (arr1) => {
    let sum = 0
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i]
    }
    return sum
}

// console.log(findSum(arr1))
//with reduce 
const sum = arr1.reduce((acc, cur)=> acc +=cur ,0)


const FindMax = (arr1) => {
    let max = 0
    for(let i = 0; i < arr1.length ; i++){
        if(arr1[i] > max){
            max = arr1[i]
        }
    }
    return max
}
// console.log(FindMax(arr1))
//with reduce 

const max = arr1.reduce((max, cur)=>{
    if (cur > max){
        max = cur
    }
    return max
},0)

//{ 26: 2 , 29: 1, 56: 1}
const  challege =  data.reduce((acu, curr)=> {
    if(acu[curr.age]){
     acu[curr.age] = ++acu[curr.age]

 }else{
    acu[curr.age] = 1
 }
 return acu
},{})
console.log("🚀 ~ file: map-filter-reduce.js ~ line 83 ~ challege ~ challege", challege)


// with reduce []
const less30 = data.reduce((acu, curr)=> {
if(curr.age < 30){
    acu.push(curr.firstName)
}
return acu
},[])
console.log("🚀 ~ file: map-filter-reduce.js ~ line 80 ~ less30 ~ less30", less30)
