const os = require('os')

const usr = os.userInfo();

// console.dir(os);
console.log(usr);

console.log(os.uptime());

const info = {
    os: os.hosename,
    relsase: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(info);