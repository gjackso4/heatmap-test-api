const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const records = require('./records');


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/sample-email', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/sample-email.html'));
});

// Send a GET request to /api/links to READ a list of links
app.get('/api/links', async (req, res) => {
  const links = await records.getLinks();
  res.json(links);
});

// Send a GET request to /api/links/:id
app.get('/api/links/:id', async (req, res) => {
  try {
    const link = await records.getLink(req.params.id);
    if(link) {
      res.json(link);
    } else {
      res.status(404).json({message: "Link Not Found"});
    }
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});

// Send a GET request to /api/links to READ a list of links
app.get('/api/emails', async (req, res) => {
  const emails = await records.getEmails();
  res.json(emails);
});



app.use(express.static(path.join(__dirname, '/public')));
app.listen(3000, () => console.log('Quote API listening on port 3000!'));