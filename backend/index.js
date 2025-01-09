const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 5000;

// Налаштування підключення до бази даних
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

// Маршрути
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
