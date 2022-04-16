const { readFile, writeFile } = require('fs');
const path = require('path');
const firstFilePath = path.resolve(__dirname, './data/first.txt');
const secondFilePath = path.resolve(__dirname, './data/second.txt');

console.log(firstFilePath);
console.log(secondFilePath);
readFile(firstFilePath, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(`The result of the file is : ${result}`);
    const first = result;

    readFile(secondFilePath, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./data/resultFile.txt',
            `The result is : ${first} ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                readFile('./data/resultFile.txt', 'utf-8',
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        console.log(result);
                    })
            })
    })

})