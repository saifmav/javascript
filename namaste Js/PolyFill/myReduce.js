//array.reduce(callback(accum, currval, index, arr),initialVal)

const { loadPromise } = require("npm/lib/npm")

//polyfill of reduce 

Array.prototype.myReduce = function(callback, initialval){
    let accum = initialval
    for (let index = 0; index < this.length; index++) {
        accum = callback(accum,this[index],index, this) 
    }
    return accum
}

//example
const arr = [2,3,4,5]
const res = arr.myReduce((accum, val)=> accum += val, 1)


// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();  


//bind
// let obj={
//     name:"aalekh",
//     age:24
// }

// let printNamePlace=function(place){
//     console.log(this.name+" is from  "+ place)
// }

// let answer=printNamePlace.bind(obj,"Mumbai");
// console.log("Welcome to Programiz!",answer);


//
// How to find the largest duplicates of item in an array.
// Example:
// let arr=[1,2,2,6,4,4,7]  
// ANS 4


// event bubbling
//event capturing
//scop
//inline-block
// overflow : hidden

//frame and library diff 
//Inversion Of Control
//single page it rout

// useEffect(()=>())
//error bondary
// method 
// static getDerivedStateFromError
// componentDidCtach()


//code splilting codeEvolution

//renderProp

//portial
// .creatPortial

//Idempotent is the difference between POST and PUT method
//pure function and impure function

//rudex 
// 1.Data flow in redux
// 2. Store/reducer/action/dispatch
// 3.Middleware(examples.thunk,saga etc)
// 4.Features of Redux

// react reconfig
//virtail
//real 
//shado dom
