# CRAMODORO
This is a fullstack flashcard and quiz application with a built-in pomodoro timer feature. The app is built using React and allows users to study flashcards or complete quizzes on various subjects. User details and scores are stored in a MongoDB database.

## Features 
- Flashcards: Users can create and study flashcards on different subjects.
- Quizzes: Users can take quizzes on selected subjects and test their knowledge.
- Pomodoro Timer: The app includes a pomodoro timer feature to help users manage their study sessions effectively.
- Subject Selection: Users can choose from a list of subjects to study or take quizzes on.
- Review Logs: The app tracks the user's progress in flashcards and quizzes, providing entry logs which can be viewed by filtering.

## Installation
- Git clone the repo on your local machine
- cd into `/backend` and run `npm i` to install dependencies
- create `.env` file in `/api` folder with the following environment variables: 

Environment variable | value
---|---
`PORT=` |server port (e.g. 3000)
`MONGO_URI=`| mongo DB URI 
`SALT=`  |
`SECRET=` |
`DB_USERNAME=` |mongo DB username
`DB__PASSWORD=`|mongo DB password
`DEV=` | `true`


- cd into `/frontend` and run `npm i` to install dependencies

## How to run the server

- cd into `/backend` 
- run the server with `npm run dev`

## How to run the client

- cd into `/frontend` and run `npm run dev`

## To do


# Usage #
1) Run npm run dev
2) Open the app in your browser at http://localhost:3000.