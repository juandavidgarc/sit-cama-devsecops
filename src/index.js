const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('SIT-Cama OK'));
app.listen(3000, () => console.log('up'));
