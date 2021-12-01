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
  const emails = await records.getEmails('emails.json');
  res.json(emails);
});



app.get('/api/emails/B2000003805_2111_GMC_RET_RRGM01_Hummer_EV_Em1', async (req, res) => {
  const emails = await records.getEmails('B2000003805_2111_GMC_RET_RRGM01_Hummer_EV_Em1.json');
  res.json(emails);
});

app.get('/api/emails/B2000003805_2111_GMC_RET_RRGM02_Hummer_EV_Em1', async (req, res) => {
  const emails = await records.getEmails('B2000003805_2111_GMC_RET_RRGM02_Hummer_EV_Em1.json');
  res.json(emails);
});

app.get('/api/emails/B200004043_2111_GMCNovOwner_eNews', async (req, res) => {
  const emails = await records.getEmails('B200004043_2111_GMCNovOwner_eNews.json');
  res.json(emails);
});




app.use(express.static(path.join(__dirname, '/public')));
app.listen(3000, () => console.log('Quote API listening on port 3000!'));