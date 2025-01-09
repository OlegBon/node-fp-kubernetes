const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const session = require('cookie-session');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Database connection
const db = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: 'rootpassword',
    database: 'myapp'
});

// Register route
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, results) => {
        if (err) throw err;
        res.send('User registered');
    });
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            req.session.user = results[0];
            res.send('Login successful');
        } else {
            res.send('Invalid credentials');
        }
    });
});

// Users route
app.get('/users', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('Not authorized');
    }
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Logout route
app.post('/logout', (req, res) => {
    req.session = null;
    res.send('Logged out');
});

// Error route
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
