const somememe = require('./index.js');
const data = somememe.pokemon('pikachu')
 
data.then(function(result) {
    console.log(result)
})