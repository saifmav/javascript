var request = require("request"),
    fs = require('fs'),
var Entries = () => {
    var options = {
        method: 'GET',
        url: 'https://api.contentstack.io/v3/content_types/product/entries?locale=en-us&include_workflow=false&include_publish_details=true',
        Headers:
        {
            api_key: 'bltc4fcf46d6e95a95c',
            Access_Token: 'bltf8ff057adc7df4377530293c'

        },
    }
 request(options, function (err, respose, body) {
    if (err) {
        return reject(err)
    }
    var data = JSON.parse(body);
    var AllEntries = [];
    body.content_types.map(function (ele) {
        data.entries.map(function (ele) {
            AllEntries.push({ 'url': ele.url })
        })
    }) 
})
}
Entries()

