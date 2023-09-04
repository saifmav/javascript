const  checkPalidrom = (str)=>{
//  const strlen = str.length
//  for(let i = 0; i < strlen/2; i++){
//      if(str[i] !== str[strlen-1-i]){
//          console.log("Not Palidrom")
//      }
//     }
//     console.log('Palidrom')
const reverseStr = str.split('').reverse().join('')
if(str === reverseStr){
    console.log('palidrom')
}
else{
    console.log('Not Palidrom')
}
}
checkPalidrom('madem')