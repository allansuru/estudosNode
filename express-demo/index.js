const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());


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

app.post('/api/courses', (req, res) => {

    const schema = {
        name: Joi.string().min(3).max(30).required()    
    };
    
    const result = Joi.validate(req.body, schema);
    console.log(result.error)
    //400 Bad request
    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

//PORT
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Nodemon rodando na porta ${port}.`));