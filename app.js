const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(req);
});

app.get('/api/email', (req, res) => {
  res.json({email: "TEST123"});
});

app.listen(3000, () => console.log('Quote API listening on port 3000!'));
