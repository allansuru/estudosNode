const express = require('express');
const app = express();

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];


app.get('/', (req, res) => {
    res.send('Oi');
});

app.get('/api/courses', (req, res) => {
    //res.send([{'course A': 'c#'}, {'course B': 'Java'}, {'course C': 'Angular' }])

    res.send(courses);
});

//com parametros

app.get('/api/courses/:id', (req, res) => {
 // res.send(req.params.id); 
 const course = courses.find(c => c.id === parseInt(req.params.id));
 if (!course) res.status(404).send('The course with the given id was not found.')
 res.send(course);
});

app.get('/api/posts/:year/:day', (req, res) => {
    //res.send(req.params); 
    res.send(req.query); 
  });

//PORT
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Nodemon rodando na porta ${port}.`));