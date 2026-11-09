const express = require('express');
const app = express();
const db = require('../db');

app.get('/patient', (req, res) => {
  const sql = `SELECT * FROM patients WHERE id = '${req.query.id}'`;
  db.query(sql);
});

module.exports = app;
