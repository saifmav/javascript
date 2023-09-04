var year = [1995, 1996, 1994, 1993, 2012];
function arrCal(arr, fu) {
    var arrRes = [];
    for (i = 0; i <arr.length; i++) {
        arrRes.push(fu(arr[i]))//call fu(calage)
    }
    return arrRes;//this will push to empty arry 
}

function calAge(el) {
      return 2019-el   //aftear calulate go for push
}
function isFullAge(el) {
    return el>=18
}
 var ages=arrCal(year,calAge);//this call later
 var fullAge =arrCal(ages,isFullAge)
 console.log(ages);
 console.log(fullAge);
 
 

