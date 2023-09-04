//Arro fuction
//ES5
var Box5={
    color:"green",
    postion:1,
    clickeMe:function(){
        // var self=this//This "this" is used  in self var because of it is pointing to window so  we have its solution 
        document.querySelector('.blue').addEventListener('click',function(){//or to solve proble with this you can use arro(=>)fuction use "this instead of self"
          var str =  'This is box number '+this.postion+' and its Color '+this.color;
            alert(str)
        })
    }
}
Box5.clickeMe();
//ES6
//same with ES6 if we used both arro(=>) function
// var Box5={
//     color:"green",
//     postion:1,
//     clickeMe:()=>{
//         var self=this//This "this" is used  in self var because of it is pointing to window so  we have its solution 
//         document.querySelector('.blue').addEventListener('click',()=>{//or to solve proble with this you can use arro(=>)fuction use "this instead of self"
//           var str =  'This is box number '+self.postion+' and its Color '+self.color;
//             alert(str)
//         })
//     }
// }
// Box5.clickeMe();

//ES5
function person(name) {
    this.name = name;
}
// person.prototype.Friends5 = function (frind) {
//     var arr = frind.map(function (el) {

//         return this.name +' is best with '+el
//     }.bind(this))
//     console.log(arr);
    
// }
//  var frind =['saif','rahul','vikas'];
// new person('saif').Friends5(frind);

  //ES6
person.prototype.Friends6 = function (frind) {
    let arr = frind.map(el=> 
        `${this.name}' is best with '${el}`
    )
    console.log(arr);
    
}
 let frind =['saif','rahul','vikas'];
 new person('rahul').Friends6(frind);



