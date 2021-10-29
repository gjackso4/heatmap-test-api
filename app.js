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

// Send a GET request to /api/emails/:id
app.get('/api/emails/:id', async (req, res) => {
  try {
    const email = await records.getEmail(req.params.id);
    if(email) {
      res.json(email);
    } else {
      res.status(404).json({message: "Email Not Found"});
    }
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});

// Send a GET request to /api/emails/:id
app.get('/api/emails/:id', async (req, res) => {
  try {
    const email = await records.getEmail(req.params.id);
    if(email) {
      res.json(email);
    } else {
      res.status(404).json({message: "Email Not Found"});
    }
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});

// Send a GET request to /api/emails/:id
app.get('/api/emails/group/:group', async (req, res) => {
  try {
    const email = await records.getEmail(req.params.group);
    if(email) {
      res.json(email);
    } else {
      res.status(404).json({message: "Email Not Found"});
    }
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});

app.listen(3000, () => console.log('Quote API listening on port 3000!'));