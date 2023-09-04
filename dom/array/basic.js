//declare array

var arr =['john',1998,'max','saif']
console.log(arr);
console.log(arr.length);

//mutated array
arr[1] = 'sid'
console.log(arr);
arr[arr.length]='ravi';
console.log(arr);
// diff data type

var difData =['saif',1884,'sid',false,'dubey'];

difData.push('blur');//at end push in array
difData.unshift('Mrs');//at start push in array
console.log(difData);

difData.pop();//pop from end 
difData.shift();//pop from first

    // difData.length
console.log(difData);
//spice logic
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = arr.splice(3,4);//(indexno,how much element you remove, to add )
 console.log(arr);
 




