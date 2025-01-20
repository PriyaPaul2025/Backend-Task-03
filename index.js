const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { name: 'Prem', email: 'prempaul@gmail.com', age: 25 },
    { name: 'Sujit', email: 'sujitmarcus@gmail.com', age: 26 }
];

app.post('/users', (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({ Error: 'name, email, and age are required' });
    }

    const newUser = { name, email, age };

    users.push(newUser);

    console.log('New user is created', newUser);
    

    res.status(201).json({
        Message: "User is created successfully",
        user: newUser
    });
});


app.get('/users',(req, res) =>{
    res.json(users);
});

app.listen(port, ()=>{
    console.log(`Server is working`);
    
});