//http is native to NodeJS. We jus have to ask for it
const http = require('http');

// fs = file system module! fs is built into Node. see above
// fs gives node access to THIS computers file system.
const fs = require('fs');

//the http module has a createServer method
//takes 1 arg:
//1. callback, callback has 2 args: req, res
const server = http.createServer((req, res) => {
    console.log(`A request was made to ${req.url}`)
    if (req.url === '/') {
        //the user wants the home page! we know, because the req object has / in the url
        //console.log(req)
        //res = our way of responding to requester
        //http message
        //1. start-line - CHECK
        //2. header
        //3.body
        //writeHead takes 2 args:
        //1. status code
        //2. object for the mime-type
        res.writeHead(200, {'contect-type': 'text/html'});
        res.write(homePageHTML);
        res.end();
    } else if (req.url === '/node.png') {
        res.writeHead(200, {'contet-type': 'image/png'});
        const img = fs.readFileSync('node.png');
        res.write(img);
        res.end()
    } else if (req.url === '/style.css') {
        res.writeHead(200, {'contet-type': 'text/css'});
        const css = fs.readFileSync('node.png');
        res.write(css);
        res.end()
    } else {
        res.writeHead(404, {'contet-type': 'text/html'});
        res.write(`<h4>Sorry, this isn't the page you are looking for!</h4>`);
        res.end()
    }
});
//createServer returns an object with listen method
//listen takes 1 arg:
//1. port to listen fot http traffic on
server.lister(3000);