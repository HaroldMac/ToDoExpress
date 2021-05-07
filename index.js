const express = require('express');
const app = express();

app.use(express.json());

const users = [
    { id: 1, pass: 'Password 1', email: 'Email 1' },
    { id: 2, pass: 'Password 2', email: 'Email 2' },
    { id: 3, pass: 'Password 3', email: 'Email 3' },
    { id: 4, pass: 'Password 4', email: 'Email 4' },
    { id: 5, pass: 'Password 5', email: 'Email 5' }
]

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id))
    if (!user) res.status(404).send('The user was not found.');
    res.send(user);
});

app.get('/users', (req, res) => {
    //req.params.id;
    res.send(req.params);
});


app.post('/user', (req, res) => {
    if (!req.body.pass || !req.body.email) {
        res.status(400).send("Password and email not sent.");
    }
    console.log(req.body.pass);
    const user = {
        id: users.length + 1,
        pass: req.body.pass,
        email: req.body.email
    };
    users.push(user);
    res.send(user);
});

//app.post();
//app.put();
//app.delete()
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));