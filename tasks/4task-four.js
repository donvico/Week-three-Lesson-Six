// Use the delete keyword to remove a specific property from the object.
// Log the object to the console to see the updated properties.

// Created an object with multiple properties.
const Africa = {
    northAfrica: ': egypt, libya, morrocco, tunisia',
    westAfrica: ': nigeria, ghana, benin, togo',
    southAfrica: ': namibia, lesotho, southafrica, botswana',
} 

delete Africa.northAfrica //deleted the property northAfrica and its contents
console.log(Africa);