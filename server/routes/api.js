const express = require('express');
const router = express.Router();
const nforce = require('nforce');


const org = nforce.createConnection({
  clientId: process.env['CLIENT_ID'],
  clientSecret: process.env['CLIENT_SECRET'],
  redirectUri: 'http://localhost:3000/oauth/_callback',
  mode: 'single'
});

router.get('/events', (req, res) => {
  org.authenticate({ username: process.env['SF_USER'], password: process.env['SF_PASS']}, (err, resp) => {
    if(!err) {
      let q = 'SELECT id, Name, Description__c, Start_Time__c, End_Time__c, Available_Seats__c, Seat_Limit__c, Status__c, id__c FROM App_Event__c ORDER BY Start_Time__c';
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

router.get('/details/:id', (req, res) => {
  org.authenticate({ username: process.env['SF_USER'], password: process.env['SF_PASS']}, (err, resp) => {
    if(!err) {
      let event = req.params.id;
      let q = `SELECT id, Name, Description__c, Start_Time__c, End_Time__c, Available_Seats__c, Seat_Limit__c, Status__c FROM App_Event__c WHERE id = '${event}'`;
      org.query({ query: q }, (err, resp) => {
        if(!err && resp.records) {
          res.status(200).json(resp.records);
        } else {
          console.error(err);
        }
      });
    }
    if(err) console.error(err)
  });
});

router.get('/sessions/:id', (req, res) => {
  org.authenticate({ username: process.env['SF_USER'], password: process.env['SF_PASS']}, (err, resp) => {
    if(!err) {
      let event = req.params.id;
      let q = `SELECT id, Name, Start_Time__c, End_Time__c, id__c, Available_Seats__c, Registration_Limit__c, Status__c FROM App_Seesion__c WHERE App_Event__r.id = '${event}'`;
      org.query({ query: q }, (err, resp) => {
        if(!err && resp.records) {
          console.log(resp.records);
          res.status(200).json(resp.records);
        } else {
          console.error(err);
        }
      });
    }
    if(err) console.error(err)
  });
});

router.post('/register', (req, res) => {
  console.log(req.body);

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var phoneNumber = req.body.phoneNumber;
  var companyName = req.body.companyName;
  var id = req.body.id;
  var sessions = req.body.sessions;

  org.authenticate({ username: process.env['SF_USER'], password: process.env['SF_PASS']}, (err, resp) => {
    if(!err) {
      let event = req.params.id;
      let acc = nforce.createSObject('App_Attendee__c');
      acc.set('Name', `${firstName} ${lastName}`);
      acc.set('App_Event__c', id);
      acc.set('Email__c', email);
      acc.set('Phone__c', phoneNumber);
      acc.set('Company_Name__c', companyName);

      org.insert({ sobject: acc }, function(err, resp){
        if(!err) {
          console.log(resp);
          let attendeeId = resp.id;
          for(let i = 0; i<sessions.length; i++) {
            let sessionPick = nforce.createSObject('SessionAttendeeAssociation__c');
            sessionPick.set('App_Attendee__c', attendeeId);
            sessionPick.set('App_Session__c', sessions[i]);
            org.insert({ sobject: sessionPick }, function(err, resp) {
              if(!err && i == (sessions.length-1)) res.status(200).json('success!');
            })
          }
        } else {
          console.error(err)
        }
      });
    }
    if(err) console.error(err)
  });
});

module.exports = router;
