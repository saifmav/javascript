function a(){
    var b =10
    c()
    function c(){
        console.log(b);
    }
}
a()

console.log(b)//error not defined in memory