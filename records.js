const fs = require('fs');

/**
 * Gets all links
 * @param None
 */
function getLinks(){
  return new Promise((resolve, reject) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });
}

/**
 * Gets a specific link by ID
 * @param {number} id - Accepts the ID of the specified link.
 */
async function getLink(id){
  const links = await getLinks();
  return links.links.find(link => link.id == id);
}


function getEmails(){
  return new Promise((resolve, reject) => {
    fs.readFile('emails.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });
}

module.exports = {
  getLinks,
  getLink,
  getEmails
}
