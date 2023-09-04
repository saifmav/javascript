console.log('Start');
setTimeout(()=>{
    console.log('callback');
}, 6000)
console.log('end')

//milli of code
const startDate = new Date().getTime()
let endDate = startDate
while(endDate < startDate + 10000){
    endDate = new Date().getTime
}
console.log('exprisation');