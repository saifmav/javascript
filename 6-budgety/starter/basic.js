var Budgetcontroller = (function () {
    var x = 23;
    var add = function (a) {
        return (x + a);
    }
    return {
        publicTest: function (b) {
            return (add(b));

        }//beceause of publc method it is acceesable outer
    }
})()//IIFM

//UI 
var UiController = (function () {
    //some code 
})()

//Appcontroller
var Controller = (function (Budgetctrl, Uictrl) { //connect two controller 
    var z = Budgetctrl.publicTest(10);
    return {
        anthor_public: function () {           //public
            console.log(z);

        }
    }

})(Budgetcontroller, UiController)
