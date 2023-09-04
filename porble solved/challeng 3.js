var bills = [124, 48, 268]
tipCal = (bill) => {
    var percent;
    if (bill < 50) {
        percent = 0.2;
    }
    else if (bill < 50 && bill > 200) {
        percent = 0.15;
    } else {
        percent = .10
    }
    return bill * percent;
}

var tips=[tipCal(bills[0]),tipCal(bills[1]),tipCal(bills[2])]
var final=[tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]]
console.log(final);
// method 2
var billl = [124, 48, 268];
tipCal = () => {
    
    var final=[]
    
    for (var i = 0; i < billl.length; i++) {
        if (billl[i] > 0 && billl[i] <= 50) {
          let  tip = billl[i] *0.2 ;   
            final.push(billl[i] + tip);
        }

        else if (billl[i] > 50 && billl[i] <= 200) {
          let  tip = billl[i] * 0.15;
          final.push(billl[i] + tip);
        } else {
            let tip = billl[i] * 0.10;
            final.push(billl[i]+tip);

        }
    }
    return final;
    
}
tipCal();
//console.log(tipCal());



