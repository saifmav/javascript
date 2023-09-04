const GetId = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([111, 222, 333, 444]);
    }, 1000)
})

const GetRecipe = recipId => {
    return new Promise((resolve, reject) => {
        setTimeout(IDs => {
            let recipes = { Title: 'INDIAN FOOD', Publisher: 'SAIF' }
            resolve(`${IDs}:,${recipes.Title}`) 

        }, 1500, recipId)
    })
}

const GetRelated = Publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            let recipes = { Title: 'Italian FOOD', Publisher: 'SAIF' }
            resolve(`${pub}:,${recipes.Title}`)
        }, 2500, Publisher)
    })
}
// GetId
// .then(IDs=>{
//     console.log(IDs);
//     return GetRecipe(IDs[2]); 
// })//then chaining
// .then(recipe=>{
//     console.log(recipe);
//     return GetRelated('Saif')
// })
// .then(publis=>{
//     console.log(publis);

// })
// .catch(error=>{
//     console.log('Error!!!');
// })
async function GetDataAW() {
    const ID = await GetId
    console.log(ID);
    const list = await GetRecipe(ID[2])
    console.log(list);
    const publication = await GetRelated('saif')
    console.log(publication);
    return 2
}
// const lists = GetDataAW();
// console.log(lists,'================'); / it will give you pending result solution for this is given below

//soution forasyn using return is a chaining then
GetDataAW().then(results=>{console.log(`${results}`);
})