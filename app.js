const http = require('http');
const port=process.env.PORT || 3000
const fs = require('fs');
var rawObj = fs.readFileSync('dept_manager.json') //import the raw JSON table
var parsObj = JSON.parse(rawObj); // parse the data to key value pairs

var stringObj = JSON.stringify(parsObj); // stringify the object

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello World</h1>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
