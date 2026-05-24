const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Endpoint untuk cek status server
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Endpoint login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.json({ success: true, message: 'Login berhasil', user: { username } });
  } else {
    res.status(400).json({ success: false, message: 'Username dan password wajib diisi' });
  }
});

// Endpoint daftar user
app.get('/api/users', (req, res) => {
  res.json({ users: ['user1', 'user2', 'user3'] });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

module.exports = app;
