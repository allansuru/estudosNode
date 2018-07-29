const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());


const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

// GET


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

  // POST
app.post('/api/courses', (req, res) => {


    const { error } = validateCourse(req); // result.error
    
    if(error)  return res.status(400).send(error.details[0].message);
    

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

// PUT
app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
 if (!course) return res.status(404).send('The course with the given id was not found.');
 
    //Validate 
    // If invalid, retunr 400

    const { error } = validateCourse(req); // result.error

    if(error) return res.status(400).send(error.details[0].message);
    // Update course
    // Return the updated course
    course.name = req.body.name;
    res.send(course);
});

//DELETE

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id was not found.');
    
    let index = courses.indexOf(course);
    courses.splice(index,1);

    res.send('Deleted!');
});

//PORT
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Nodemon rodando na porta ${port}.`));

function validateCourse(req) {
    const schema = {
        name: Joi.string().min(3).max(30).required()
    };
    return Joi.validate(req.body, schema);
}
