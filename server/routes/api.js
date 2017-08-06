const express = require('express');
const router = express.Router();
var nforce = require('nforce');

var org = nforce.createConnection({
  clientId: process.env['CLIENT_ID'],
  clientSecret: process.env['CLIENT_SECRET'],
  redirectUri: 'http://localhost:3000/oauth/_callback',
  mode: 'single'
});


router.get('/events', (req, res) => {
  org.authenticate({ username: process.env['SF_USER'], password: process.env['SF_PASS']}, (err, resp) => {
    if(!err) {
      let q = 'SELECT Title__c, Description__c, Start_Time__c, End_Time__c, Available_Seats__c, Registration_Limit__c, Status__c FROM App_Event__c';
      org.query({ query: q }, (err, resp) => {
        if(!err && resp.records) {
          var acc = resp.records;
          console.log(acc);
          res.status(200).json(resp.records);
        } else {
          console.error(err);
        }
      });
    }
    if(err) console.error(err)
  });
});

module.exports = router;
