# CSCI 3172 Lab 3 – Furniture Inventory API

A REST API built with Node.js and Express to retrieve, create,
and delete fictional furniture records.

## Dates and Links

Date Created: 27 October 2026
Last Modified: 27 October 2026
Render URL: TO BE ADDED
GitLab URL: https://git.cs.dal.ca/mfarhan/csci-3172/-/tree/main/labs/lab3

## Author

Name: MD SANIM FARHAN
Email: md254274@dal.ca
ID: B00906667

## Built With

- Node.js: https://nodejs.org/
- Express: https://expressjs.com/
- JavaScript

## Run Locally

Install dependencies: npm install
Start server: npm start

Local URL: http://localhost:3000/api/items

## API Endpoints

- GET /api/items – Retrieve all items.
- GET /api/items/:id – Retrieve one item.
- POST /api/items – Create an item.
- DELETE /api/items/:id – Delete an item.

POST requires a non-empty name and category, a non-negative
numeric price, and a boolean available field.

## Middleware and Errors

Custom middleware logs the request method, path, and timestamp.
Validation rejects invalid payloads. Centralized error handling
returns JSON responses with HTTP status codes 400, 404, and 500.

Routes and middleware are separated for clear organization.
Data is stored in memory and resets when the server restarts.

## Sources and AI Use

The furniture records are fictional. No external images or
datasets were used.

ChatGPT assisted with furniture details 