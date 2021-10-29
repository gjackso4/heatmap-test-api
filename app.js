const express = require('express');
const app = express();

const records = require('./records');


app.get('/', (req, res) => {
  res.json({message: "Thinkiry API"});
});


// Send a GET request to /api/emails to READ a list of emails
app.get('/api/emails', async (req, res) => {
  const emails = await records.getEmails();
  res.json(emails);
});

//Send a GET request to /api/emails/:id
// app.get('/api/emails/:id', (req, res) => {
//   const email = data.emails.find(quote => quote.id == req.params.id);
//   res.json({email});
// });

app.listen(3000, () => console.log('Quote API listening on port 3000!'));