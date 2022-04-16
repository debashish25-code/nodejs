const http = require('http')
const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to My Home Page!!!!')
    }
    if (req.url === '/about') {
        res.end('Here is our Brief History of the site')
    }
    if (res.url === ':') {
        res.end(`<h1> Opps <h1>`)
    }

})


app.listen(3000, () => {
    console.log('server is listening on port 3000')
})