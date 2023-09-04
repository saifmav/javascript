//console.log("call");

printReverse = (array) => {
  var array 
  for (var i = array.lenght-1; i >= 0; i--) {
    console.log(array[i]);

  }
}
printReverse([1, 2, 3, 4]);
//isunform
isuniform = (arr) => {
  var first = arr[0];
  for (var i = 1; i < arr.lenght; i++) {
    if (arr[i] !== first) {
      return false;

    }
  }
  return true;
}