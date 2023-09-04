var john = {
    bill: [124, 48, 268, 180, 42],
    tip: [],
    amount: [],
    tipCal: function(){
        for (var i = 0; i < this.bill.length; i++) {
            if (this.bill[i] > 0 && this.bill[i] < 50) {
                this.tip.push(this.bill[i] * 0.2);
                this.amount.push(this.bill[i] + this.tip[i]);

          } else if (this.bill[i] > 50 && this.bill[i] < 200) {
                this.tip.push(this.bill[i] * .15);
                this.amount.push(this.bill[i] + this.tip[i])
            } else if (this.bill[i] > 200) {
               this.tip.push(this.bill[i] * .10);
               this.amount.push(this.bill[i] +  this.tip[i]);

            } else {

                console.log('no tip');
            }
        }
    }
}
john.tipCal()
console.log(john);

//dout tip[i]
