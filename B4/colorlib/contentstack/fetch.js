const axios = require('axios');
const fs = require('fs')
const getData = axios.create({
    headers:{
        'api_key':'blt8e85ea1bfd69986a',
        'access_token':'blt92d65180472a2d79',
        'Content-Type':'application/json'
    }
});
getData.get('https://cdn.contentstack.io/v3/content_types/summit_header/entries?environment=develop&locale=en-us')
.then((response)=>{
    console.log(response.data.entries);
     fs.writeFileSync('./header.json', JSON.stringify(response.data,null,2),(err)=>{
    })
})
.catch((err)=>{
    console.log(err);

})
