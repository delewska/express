// NODEJS IS the language
// express is node, a node module

// http is a  natvie module
// const htt = require('http');
// express is a 3rd party module
const express = require('express');
// An 'app' is the express function ( createApplication inside the Express module)
// invoked adn is an Express application
const app = express();

// all is a method, and takes 2 args:
// 1.route
// 2. callback to run if the route is requested
app.all('*', (req, res) => {
    // Express handles the basic headers(status code, mime-type)! Awesome!
    res.send(`<h1>This is the home page</h1>`)
    //   Express handles the end! Awesome
})

app.listen(3000);
console.log("The server is listening on port 3000...")