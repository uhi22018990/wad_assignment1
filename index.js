const data = require('./data.js');

console.log('Explore first level properties')
for (let index in data) {
  console.log(index)
}
