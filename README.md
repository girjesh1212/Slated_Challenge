# Slated Backend Development Challenge
This repository contains the code for Slated backend development challenge. 
Following is the guide to the questions and the solutions associated with them.

## Getting started
- Clone the repository to your device.
- Run "npm install" in the cloned directory. It will install the necessary packages. 
- Run "npm update". It will update packages to latest available versions.
- Run "node app.js" to start the server.

## Basic Q1: External API call
- **Problem:** predict the gender of a person based on a name
- Build an API that captures the name and returns the prediction back to browser:
- API to use: "https://api.genderize.io/?name=luc"

### API for testing Basic Q1
- On local machine, the baseUrl is "localhost:3000", we will use this for referencing here.
- Call the api "localhost:3000/gender/" and input "name" parameter in req body (or form body).
- This API returns the input name and gender based on the output of API given in the ques.


## Basic Q2: Logic
- Create an API that takes date as string (“e.g. 1 May 2021”) and returns an array of all
dates in that week (Sunday to Saturday).
- Demo the API in on browser or postman or any similar tool.

### API for testing Basic Q2
- Call the api "localhost:3000/date/" and input "date" parameter in req body (or form body).
- The date should be "DD MM YYYY" (space separated) as mentioned in the question.
- It returns an array in JSON format that contains all dates in that week.