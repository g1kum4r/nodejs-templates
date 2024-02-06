const http = require("http");
const { homedir } = require("os");
const { parse } = require("url");

const home = (request, response) => {
    const obj = {
        title: "HOME"
    }
    response.write(JSON.stringify(obj))
}

const contact = (request, response) => {
    const obj = {
        title: "CONTACT"
    }
    response.write(JSON.stringify(obj))
}

const router = [
    { path: '/home', controller: home },
    { path: '/contact', controller: contact }
]


const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "application/json")
    const url = parse(request.url)
    const route = router.find(r => r.path === url.path)
    if(route)
        route.controller(request, response)
    else
        response.writeHead(404, "not found")
    response.end();
})

const port = 3000
server.listen(port)
console.log(`application is started on ${port}`)