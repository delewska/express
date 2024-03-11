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
        //res = our way of responting to requester
        //http message
        //1. start-line - CHECK
        //2. header
        //3.body
        //writeHead takses 2 args:
        //1. status code
        //2. object for the mime-type
        res.writeHead(200, {'contect-type': 'text/html'});
        res.write(homePageHTML);
        res.end();
    }
})