const fs = require('fs');

const data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());
const data2 = fs.readFileSync('./readme.txt');
console.log('2번', data2.toString());
const data3 = fs.readFileSync('./readme.txt');
console.log('3번', data3.toString());