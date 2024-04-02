const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Online");
    res.end();
});

const server1 = http.createServer((req, res) => {
    res.write("Online");
    res.end();
});

server.listen(8080);
server1.listen(3500);

module.exports = server1;
module.exports = server;
