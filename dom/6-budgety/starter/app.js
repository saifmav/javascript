var Budgetcontroller = (function () {
    //some code
    var Expenses = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totols: {
            exp: 0,
            inc: 0

        }
    }
    return {
        addItem: function (type, des, val) {

            var newItem, ID;
            //create new ID
            //ID=lastid +1
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // create new items for inc and expo
            if (type === 'exp') {
                newItem = new Expenses(ID, des, val)
            }
            else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }
            //push into our data structure
            data.allItems[type].push(newItem);
            //return the new elemnt
            return newItem
        },
        testing: function () {
            console.log(data);

        }
    }

})()//IIFM//EndBudget controller

//UI 
var UiController = (function () {
    //some code 
    var DomString = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer:'.income__list',
        expenseContainer:'.expenses__list'
    };
    //get input filed
    return {
        getInput: function () {
            return {
                Type: document.querySelector(DomString.inputType).value,//will ether inc or exp
                Description: document.querySelector(DomString.inputDescription).value,
                Value: document.querySelector(DomString.inputValue).value
            };
        },
        addListItem: function (obj, type) {
            //console.log(obj,'=============================');
            


            //creat html with placeholder text 
            var html, newHtml, element;
            if (type === 'inc') {
                 
                element = DomString.incomeContainer;
                html = '<div class="item clearfix" id="'+ obj.id +'"><div class="item__description">'+ obj.description + '</div> <div class="right clearfix"><div class="item__value">'+ obj.value +'</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
           else if (type === 'exp') {
                element = DomString.expenseContainer;
                html = ` <div class="item clearfix" id="%id%"><div class="item__description">%description%</div><div class="right clearfix">
                     <div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">
                         <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
            }
            //replace placehoder text with actuly data
            // newHtml = html.replace('%id%', obj.id);
            // newHtml = html.replace('%description%', obj.description);
            // console.log(newHtml);
            
            // newHtml = html.replace('%value%', obj.value);
            console.log(html);
            
            //inseart html at dom 
            document.querySelector(element).insertAdjacentHTML('beforeend', html)
        },
        getDomString: function () {
            return DomString;
        }
    }
})()//End controller

// Golbal Appcontroller
var Controller = (function (Budgetctrl, Uictrl) { //connect two controller 
    //Eventheadler
    var SetupEventListerner = function () {
        var DOM = Uictrl.getDomString();

        document.querySelector(DOM.inputBtn).addEventListener('click', function () {
            ctrlAddItem();

        })
        document.addEventListener('keypress', function (event) {
            if (event.keyCode == 13 || event.which == 13) {
                // console.log('enter');
                ctrlAddItem();
            }
        })
    };

    //AddItem
    var ctrlAddItem = function () {
        var newItem, InputFiled;
        // 1 get input field
        InputFiled = Uictrl.getInput();
        //console.log(InputFiled);
        // 2 add items to budgetcontroller
        newItem = Budgetcontroller.addItem(InputFiled.Type, InputFiled.Description, InputFiled.Value);
        console.log(newItem);
        
        //3 . add item to ui
        Uictrl.addListItem(newItem,InputFiled.Type)
    };
    return {
        init: function () {
            console.log('Application has start:');
            SetupEventListerner();
        }
    };

})(Budgetcontroller, UiController)
Controller.init();