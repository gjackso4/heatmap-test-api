const express = require('express');
const app = express();

app.get('/api/email', (req, res) => {
  res.json({email: "TEST123"});
});

app.listen(3001, () => console.log('Quote API listening on port 3001!'));
