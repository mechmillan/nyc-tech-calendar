# How to run
- First, run ```npm install``` in both CalenderFrontEnd folder and root folder.
- Inside CalenderFrontEnd folder, run ```npm run start:dev``` in terminal.
- Inside CalenderBackEnd folder, run ```npm start``` in terminal to start-up back-end api.
- After, front-end available on: [localhost:8080](localhost:8080)
- After, back-end available on: [localhost:3000](localhost:3000)

## Web
There are two parts to this: a frontend and a backend. Feel free to use whatever frontend or backend framework you'd like (React/Ember/Rails etc.). It would take a long time to build a full featured calendar app, so we're going to focus on a few parts. Feel free to use any JavaScript library or framework, but don’t use something that builds the calendar for you. For example, jQuery or React would be fine; fullcalendar.io would not.

Please upload the answers to these questions in the same GitHub repo and name the folders CalendarFrontEnd and CalendarBackend.

## Specs
### FRONT END APP / MOBILE APP
While you start thinking about building the calendar app, you’ll probably start to ask how full featured it needs to be. Here’s our list of things it must do, as well as a list of things that you can consider but do not have to do.

#### Must Have Specs
- [x] The UI should have one month hard coded view (Pick any month)
- [x] Ignore users/login, just have one hardcoded user
- [x] Click on a day box, and be able to create a new event on that day which gets sent to the backend on clicking submit.
   - [x] The form should have start time, end time, description and submit.
   - [x] Once submit is clicked the form should disappear.
   - [x] Event should now appear in that day’s box.
   - [x] Events cannot span multiple days. Must start and end the same day.
- [x] Show all events the user has on their calendar.
- [x] The UI should have 4 rows of 7 boxes (simple case of a 28 day month).
- [x] The application should communicate with an API backend using JSON. Don’t spend a lot of time on the UI making it look beautiful; just make it functional.

#### Optional Specs (Not required; bonus points available for inclusion of one or more features)
- Switch between months
- Week or day view
- Handle events spanning multiple days
- Handle too many events to fit in your box UI on a given day.
- [x] You should be able to update/delete events. How you implement this UX is up to you.
- The UI should have 5 rows of 7 boxes with the correct date on the correct days.


### BACK END
Build the backend of the calendar application. The API for the calendar should be the following:

#### Events (Minimum Required API)
POST /events
- [x] Should create an event

GET /events
- [x] Should return all events

#### Events (Optional API. Not required; bonus points available)
DELETE /events/:id
- [x] Should delete an event

- PUT /events/:id
- Should update an existing event
