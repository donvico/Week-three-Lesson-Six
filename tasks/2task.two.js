

//created an object with multiple arrays
const Africa = {
    northAfrica: 'egypt, libya, morrocco, tunisia',
    westAfrica: 'nigeria, ghana, benin, togo',
    southAfrica: 'namibia, lesotho, southafrica, botswana',
} 
console.log(Africa.southAfrica); //logged contents of southAfrica to the console

Africa.northAfrica = 'algeria, sudan, southSudan'
console.log(Africa);    //modified northAfrica by modifying its contents 
