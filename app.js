const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const records = require('./records');


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/client', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/client.html'));
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

// Send a GET request to /api/emails/group/:group
app.get('/api/emails/group/:group', async (req, res) => {
  try {
    const email = await records.getEmailByGroup(req.params.group);
    if(email) {
      res.json(email);
    } else {
      res.status(404).json({message: "Email Not Found"});
    }
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});

// Send a GET request to /api/emails/campaign/:campaign
app.get('/api/emails/campaign/:campaign', async (req, res) => {
  try {
    const email = await records.getEmailByCampaign(req.params.campaign);
    if(email) {
      res.json(email);
    } else {
      res.status(404).json({message: "Email Not Found"});
    }
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});

app.use(express.static(path.join(__dirname, '/public')));
app.listen(3000, () => console.log('Quote API listening on port 3000!'));