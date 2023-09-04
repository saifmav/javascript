/*
   *
  **
 ***
****
i = 1,2,3,4
j = 3>=2
k = 1    
*/
 for(let i=1;i<=4;i++){
     for(let j=3; j>=i;j--){
         document.write('&nbsp;&nbsp;')
     }
     for(let k=1; k<=i;k++ ){
         document.write("*")
     }
     document.write("<br>")
 }
 