const http = require('http');

const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.write('Hello World');
            res.end();
        }

        if (req.url === '/api/courses') {
            res.write(JSON.stringify(['course 1', 'course 2', 'course 3']));
            res.end();
        }
});


server.listen(3000);

console.log('Servidor subiu na porta 3000');

