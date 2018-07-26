const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Oi');
});

app.get('/api/courses', (req, res) => {
    res.send([{'course A': 'c#'}, {'course B': 'Java'}, {'course C': 'Angular' }])
});

//PORT
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Nodemon rodando na porta ${port}.`));