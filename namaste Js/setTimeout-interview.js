//example
// function x(){
//     for(let i = 1; i <=3 ; i++){
//         setTimeout(()=>{
//             console.log(i)
//         }, i*1000)
//     }
// }
// x()
//output i = 4(closure) itera 3 time 4 4 4
// solution to  this use let instead of var with work in block
//example 2 solution of this 
// without let
function z (){
    for(var i = 1; i <=3 ; i++){
        function close(c){
            setTimeout(()=>{
                console.log(c)
            }, i*1000)
        } 
        close(i)
    }
}
z()

 