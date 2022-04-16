// complex version of readFileSync

const { readFileSync, writeFileSync } = require('fs');
const path = require('path')

const fixedPath = '/data/data/com.termux/files/home/storage/codeAddict';
const firstPath = path.join(fixedPath, '/data/first.txt');
const secondPath = path.join(fixedPath, '/data/second.txt');
// const filePath = path.resolve(__dirname, '/data/first.txt');
// console.log(filePath);
const firstFile = readFileSync(firstPath, 'utf-8');
const secondFile = readFileSync(secondPath, 'utf-8');
console.log(firstFile);
console.log(secondFile);
const writeFile = path.join(fixedPath, '/data/result-sync.txt');
writeFileSync(writeFile,
    `This is the result of file : ${firstFile}  
${secondFile}`, { flag: 'a' });

// Simple version of readFileSync
// const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./data/first.txt', 'utf-8');
const second = readFileSync('./data/second.txt', 'utf-8');
console.log(first);
console.log(second);

writeFileSync('./data/resultData.txt',
    `The result data is : ${first} ${second}`);

