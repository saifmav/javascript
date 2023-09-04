// var  key = 30;
// var a=[10,20,30,40,50];
// var found;
// for(var i=0;i<5;i++){
//     if(a[i]==key){
//     console.log("found@location"+i);
//      found=1;
//     break;
//     }
//  found=0;
// if(!found){
//     console.log("not found");

// }
// }
//========================================================================method 2============
/*function linearSearch(arr, item) {
    // Go through all the elements of arr to look for item.
    arr=[10,20,30,40,50];
    for (var i = 0; i < arr.length; i++) {     
      if (arr[i] === item) { // Found it!
        console.log("found");
        
        return i;
      }
    }
    
    // Item not found in the array.
    return null;
  }
 var ar= linearSearch(30,30)
 console.log(ar)*/
 //====================================================binary search================================
var i, key=25, low = 0, high = 10, mid,found;
var a = [10, 20, 25, 42, 45, 48, 78];
while (low <= high) {
    mid = low + high / 2
    console.log(mid);
    
    if (key < a[mid]) {
        high = mid - 1
        console.log(high);
        
    }
    else if (key > a[mid]) {
        low = mid + 1
        console.log(low);
        
    }
    else {
        if (key == a[mid]) {
            console.log('found');
            break;
        }

    }
}















