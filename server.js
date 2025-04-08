const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

const users = []; 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to log all incoming requests
app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
});

// Register user
app.post('/api/register', (req, res) => {
  console.log('Register Request Body:', req.body); // Log the request body
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  users.push({ username, password });
  res.status(200).json({ message: 'Registered successfully' });
});

// Login
app.post('/api/login', (req, res) => {
  console.log('Login Request Body:', req.body); // Log the request body
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.status(200).json({ message: 'Login successful' });
});

// Example GET request
app.get('/api/users', (req, res) => {
  console.log('Get Users Request'); // Log the GET request
  res.status(200).json(users);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
