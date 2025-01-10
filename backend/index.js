const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const session = require('cookie-session');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // URL вашого фронтенду
    credentials: true
}));
app.use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000 // 24 години
}));

// Підключення до бази даних
const db = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: 'rootpassword',
    database: 'myapp'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

// Маршрут для реєстрації
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ? OR name = ?', [email, name], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.send('User already exists');
        } else {
            db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, results) => {
                if (err) throw err;
                res.send('User registered');
            });
        }
    });
});

// Маршрут для логіну
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

// Маршрут для отримання користувачів
app.get('/users', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('Not authorized');
    }
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Маршрут для очищення бази даних
app.post('/clear', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('Not authorized');
    }
    db.query('DELETE FROM users', (err, results) => {
        if (err) throw err;
        res.send('Database cleared');
    });
});

// Маршрут для виходу
app.post('/logout', (req, res) => {
    req.session = null;
    res.send('Logged out');
});

// Маршрут для помилок
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
