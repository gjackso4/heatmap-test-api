const fs = require('fs');

/**
 * Gets all emails
 * @param None
 */
function getEmails(){
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
 * Gets a specific email by ID
 * @param {number} id - Accepts the ID of the specified email.
 */
async function getEmail(id){
  const emails = await getEmails();
  return emails.records.find(record => record.id == id);
}

module.exports = {
  getEmails,
  getEmail
}
