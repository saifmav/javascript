const getRecipe = () => {
    setTimeout(() => {
        let RecipeId = [222, 333, 444, 555, 666];
        console.log(RecipeId);
        setTimeout(id => {
            let recipe = { title: 'Indian Food', Publication: 'saif' }
            console.log(`${id} and best Order ${recipe.Publication}`)
        }, 1500, RecipeId[1]);
        setTimeout(Publication=>{
            let recipe2={title:'Italian Food',Publication:'saif'}
            console.log(recipe);         
        },1000,recipe.Publication)
    }, 1000) 
}
getRecipe()
// callback function means function that pass as agrument to other function example settime given one
//example
function createQuote(quote, callback){ 
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
  }
  
  function logQuote(quote){
    console.log(quote);
  }
  
  createQuote("eat your vegetables!", logQuote); // 1
  //please Free code camp for better understanding