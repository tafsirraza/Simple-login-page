const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Dummy user data for demonstration
const users = {
    user1: "password1",
    user2: "password2"
};

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        res.send(`Welcome, ${username}!`);
    } else {
        res.send("Invalid credentials. Please try again.");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

