const path = require('path');

console.log(path.sep);

const filePath = path.join('/subfolder', 'context', 'data.txt');

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolutePath = path.resolve(__dirname,
    '/subfolder', 'content', 'data.txt');
console.log(absolutePath);