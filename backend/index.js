const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api', (req, res) => res.send('API is working!'));

app.listen(port, () => console.log(`Backend running on port ${port}`));
