app.get('/patient', (req, res) => {
  const sql = `SELECT * FROM patients WHERE id = '${req.query.id}'`;
  db.query(sql);
});
