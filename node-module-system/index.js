const firstModule = require('./first-module');

console.log(firstModule.add(10, 20));

try {
    console.log('Trying to divide by zero');
    let result = firstModule.divide(0,100);
    console.log(result);
    
} catch (error) {
    console.log('Caught error:', error.message);
}