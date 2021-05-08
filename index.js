const express = require('express');
const app = express();

app.use(express.json());

const tasks = [
    { id: 1, description: "todo 1", status: "In Progress", dueDate: "05 May 2021" },
    { id: 2, description: "todo 2", status: "In Progress", dueDate: "05 May 2021" },
    { id: 3, description: "todo 3", status: "In Progress", dueDate: "05 May 2021" },
    { id: 4, description: "todo 4", status: "In Progress", dueDate: "05 May 2021" },
    { id: 5, description: "todo 5", status: "In Progress", dueDate: "05 May 2021" },
    { id: 6, description: "todo 6", status: "In Progress", dueDate: "05 May 2021" },
    { id: 7, description: "todo 7", status: "In Progress", dueDate: "05 May 2021" },
]

app.get('/', (req, res) => {
    res.send('Welcome to the ToDo App Api');
});

//Read
app.get('/tasks', (req, res) => {
    res.send(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(c => c.id === parseInt(req.params.id))
    if (!tasks) return res.status(404).send('The task was not found.');
    res.send(user);
});


//Write
app.post('/task', (req, res) => {
    if (!req.body.description || !req.body.status || !req.body.dueDate) {
        return res.status(400).send("Description, status, or due date was not sent.");
    }
    console.log(req.body.description);
    const task = {
        id: task.length + 1,
        description: req.body.description,
        status: req.body.status,
        dueDate: req.body.dueDate
    };
    tasks.push(task);
    res.send(task);
});


//Update
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(c => c.id === parseInt(req.params.id))
    if (!tasks) return res.status(404).send('The task was not found.');
    task.description = req.body.description;
    task.status = req.body.status;
    task.dueDate = req.body.dueDate;
    res.send(task);
});



//Delete
app.delete('/tasks/:id', (req, res) => {
    const task = tasks.find(c => c.id === parseInt(req.params.id))
    if (!tasks) return res.status(404).send('The task was not found.');
    task.delete;
    
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));