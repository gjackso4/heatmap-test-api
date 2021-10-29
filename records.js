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
  return emails.emails.find(email => email.id == id);
}

/**
 * Gets list of emails by Group
 * @param {string} group - Accepts the Group of the specified email.
 */
async function getEmailByGroup(group){
  const emails = await getEmails();
  return emails.emails.filter(email => email.creativeGroup == group);
}

/**
 * Gets list of emails by Campaign
 * @param {string} campaign - Accepts the Campaign of the specified email.
 */
async function getEmailByCampaign(campaign){
  const emails = await getEmails();
  return emails.emails.filter(email => email.campaignName == campaign);
}


module.exports = {
  getEmails,
  getEmail,
  getEmailByGroup,
  getEmailByCampaign
}
