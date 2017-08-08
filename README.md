# EventWorks
EventWorks is an event management application that integrates the Salesforce REST API for database management and administration with a Angular frontend through a Node.js backend built on Express. Event planners can add events to be displayed on this app along with details such as event descriptions, event sessions, start/end times, seat availability, and more through the Salesforce website. Event goers can use the UI (https://eventworks.herokuapp.com/) to browse through events that are listed and register for events and sessions by providing a name, email address, phone number, and company name. Once registered, an email will be sent to event goers via Salesforce to confirm registration.

<img src="./eventworks_registration.png" width="1000">

## Built with
* Angular - Client-side
* Express - Server-side
* Salesforce - Database
* Heroku - Deployment

## MVP
- [x] Potential attendees can see a list of events on the homepage along with basic details for the event such as title, start time, end time, status, registration limits, and remaining seats
- [x] Potential attendees can click on an event to view an event details page that includes an event description and event sessions
- [x] Potential attendees can click on a registration button on the events detail page that forwards them to a form that allows input of basic attendee information including name, email, phone number, company name, and the sessions that the attendee wants to attend
- [x] Only open events have registration features
- [x] Attendee receives a confirmation email after registration
- [x] Salesforce users can create events
- [x] Salesforce users can create sessions under an event
- [x] Salesforce users can create attendees under an event and add them to multiple event sessions
- [x] The application is responsive
- [x] The application is deployed on Heroku (https://eventworks.herokuapp.com/)

## Stretch Goals
- [ ] Add error handling
- [ ] Add sorting features to the homepage
- [ ] Add account creation to save user profiles and manage attending events
- [ ] Automate testing and deployment
- [ ] Add animations on load
- [ ] Reconfigure server-side API with promises instead of callbacks

## Database Schema
<img src="./eventworksschema.png" width="1000">

### Summary
* App_Event stores each individual event - One to Many Master Detail relationship with App_Session and App_Attendee where App_Event is the Parent object for both
* App_Session stores each individual session - Many to One relationship with App_Event where App_Session is the Child object - Many to Many relationship with App_Attendee via SessionAttendeeAssociation Junction object
* App_Attendee stores each individual attendee - Many to One relationship with App_Event where App_Attendee is the Child object - Many to Many relationship with App_Session via SessionAttendeeAssociation Junction object

## Challenges

### Angular
* This was my first time building an app from scratch using Angular. It felt foreign to me at first since I was so used to React. But Angular grew on me as I built more components. I might even enjoy using Angular more than React now... The only trouble I had was differentiating between AngularJS and Angular 2/4 when I would use google to find answers to my problems.

### Salesforce
* Salesforce took some getting used to. I'm glad there's a lot of documentation available, but I think there might be TOO MUCH documentation available. It took forever to learn how to build my first custom object because their UI wasn't very intuitive. For example, every documentation page refers to a setup console that isn't explicitly displayed anywhere. I couldn't find the link to the setup page until I noticed a gear icon on the top of the page that had a link to Setup.
* Fortunately for me, someone built [nforce](https://github.com/kevinohara80/nforce), a Node.js wrapper for Salesforce's REST API. The nforce package helped me tremendously for EventWorks' server-side API. 
