# June 16th class note for BCA

Starting frontend project - https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w


If you want to sharpen your frontend skills, frontendmentor.io is a good website. 

If you want to see my frontend solution go to the [June 13th solve](../june13_mca_btech_full_stack/ticket-generator-project/)

## Required theory for backend

Client server architecture is the default archtecture used in backends

In client server architecture clients send requests and servers respond to those requests

We can send mainly 5 kind of requests that can be sent to the backend -

- *GET request* used to get resources from the server
- *POST request* used to send new entries to the server / database
- *PUT request* - patch/update entries; creates a new entry if the entry is not existing. 
- *PATCH request* - patch/update entries; does not create a new entry. 

## Different backend frameworks at your disposal

- If you like python you have 2 options
    - [Flask](https://flask.palletsprojects.com/en/stable/) - A very minimal python based backend framework.
    - [Django](https://www.djangoproject.com/) - More robust framework with user permission controls and a lot of features included

- If you are comfortable with javascript the option for you is [Express](https://expressjs.com/)

- If you want to learn a new programming language used for modern backends you can learn the [Go programming language](https://go.dev/) with the [gin framework](https://gin-gonic.com/)

## Database

- **Structured database** - SQL, SQLite and PostgreSQL
- **Unstructured database** - MongoDB

## Implementing a backend

The actionable steps for making the backend -

1. Submit the form with POST request to the backend (it can be either `<form method="post">` or `fetch` request from the JS)

2. Process the form body and store it in a database with an ID.

3. Return this ticket ID to the client.

4. When requested with the ID show the ticket in the frontend. 

So this backend will have 2 api routes,

1. Stores the data - POST request
2. Retrieves the data - GET request

*Task for you:* make this backend and make this application a full fledged application. 
