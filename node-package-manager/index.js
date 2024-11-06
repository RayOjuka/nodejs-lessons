const lodash = require('lodash');

const names = ["samson", "hadi", "derrick", "martin", "andrew"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
