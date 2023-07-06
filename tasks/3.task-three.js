
// Created an object with multiple properties.
const Africa = {
    northAfrica: ': egypt, libya, morrocco, tunisia',
    westAfrica: ': nigeria, ghana, benin, togo',
    southAfrica: ': namibia, lesotho, southafrica, botswana',
} 
// used the for...in loop to iterate over the object 
for(let output in Africa){
    console.log(`countries in ${output} ${Africa[output]}`);
}
