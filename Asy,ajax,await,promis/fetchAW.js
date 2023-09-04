// function weather() {

//     fetch(`http://api.weatherstack.com/current?access_key=f525f7abfc00dd7c96c83e046ab3d5ae&query='New York`)
//         .then(result => {
//              return result.json()
//         })
//         .then(data => {
//             // console.log(data);
//             const today = data.current.humidity;
//             console.log(today);
//             // console.log(`Todays Temperture in ${today.weather_state_name} min-temp ${today.min_temp}  max-temp ${today.max_temp}`);

//         })
//         .catch(Error => {
//             console.log(Error);
//         })
// }
// weather()
//Asyn And wait also to handle error we can us try and catch 
async function weather2() {
    try { 

        const data = await fetch(`http://api.weatherstack.com/current?access_key=f525f7abfc00dd7c96c83e046ab3d5ae&query='New York`)
        const result = await data.json()
        const tommorro = result.consolidated_weather[0];
        //console.log(today);
        console.log(`Todays Temperture in ${tommorro.weather_state_name} min-temp ${tommorro.min_temp}  max-temp ${tommorro.max_temp}`);
        return data
    }
    catch{
        Error => {
            console.error(Error);
        }

    }
}
weather2()
