document.querySelector('#grandparent')
    .addEventListener('click',()=>{
        console.log('GrandParent Clicked !');
    },true)

document.querySelector('#parent')
    .addEventListener('click',()=>{
        console.log('Parent Clicked !');
    },true) 

document.querySelector('#child')
    .addEventListener('click',()=>{
        console.log('child Clicked !');
    },true)    

//(false):- by default bubbling   
//true : event capaturing
//cycle of this first will capaturing and bubble if grandparent(true)and parent(false) and child (true) 
//so o/p  GrandParent Clicked !-> child Clicked ! -> Parent Clicked !
//e.stopPropagation