const express = require('express');
const app = express();
const db = require('../db');

app.get('/patient', (req, res) => {
  db.query('SELECT * FROM patients WHERE id = ?', [req.query.id], (err, rows) => {
    if (err) return res.status(500).json({ error: 'error interno' });
    res.json(rows);
  });
});

module.exports = app;
