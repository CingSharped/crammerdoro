# CRAMODORO
This is a fullstack flashcard and quiz application with a built-in pomodoro timer feature. The app is built using React and allows users to study flashcards or complete quizzes on various subjects. User details and scores are stored in a MongoDB database. Created to [this brief](https://gist.github.com/rom-30/d1a5665ecffb47c3ce7e1c4756271517)

## Features 
- Flashcards: Users can create and study flashcards on different subjects.
- Quizzes: Users can take quizzes on selected subjects and test their knowledge.
- Pomodoro Timer: The app includes a pomodoro timer feature to help users manage their study sessions effectively.
- Subject Selection: Users can choose from a list of subjects to study or take quizzes on.
- Review Logs: at the end of every quiz users right a quick review about how they performed in the quiz and what they need to study on to improve

# Contributors
- [Gi Ho](https://github.com/ThegeralbeanQD)
- [Daniel Ogunsanya](https://github.com/danteoguns11)
- [Alina Hafeez](https://github.com/Linaintech)
- [Joao Patacas](https://github.com/jpatacas)
- [Christopher Sharpe](https://github.com/CingSharped)

# Installation & Usage
1. Open a ```GitBash``` terminal and navigate to the directory you wish to store the project in.

2. clone the repo using the below command
```
git clone git@github.com:CingSharped/crammerdoro.git
```
3. Navigate into the ```frontend/``` folder using the below command
```
cd crammerdoro && cd frontend/
```
4. Install the required packages using the below command
```
npm install
```
5. The code for the frontend uses a deployed version of the API, however the server may be idle, visit [the api](https://crammerdoro-backend.onrender.com/) to wake it up

6. Back in your GitBash terminal in the ```fontend/``` folder, start the frontend with the below command
```
npm run dev
```
7. Your GitBash terminal should now display a link, visit the [link](http://localhost:5173/) in your browser and you should be able to see the website

## Running the server locally
Note this can only be used to test endpoints locally through your web browser or hopscotch, the front end will not connect to your local version of the server without modifications to the frontend requests.

1. Open the ```backend/``` folder of the code in your code editor and create a ```.env``` file with the below information. you will need to create your own mongodb database to get your own URI refer to their [Docs](https://www.mongodb.com/docs/drivers/node/current/)

```js .env
PORT=3000
MONGO_URI="mongodb+srv://username:password@crammerdoro.9hxrsow.mongodb.net/database?retryWrites=true&w=majority"  
SALT=10
SECRET=somesecretstring
DEV=true
```

2. Open a GitBash terminal and navigate into the ```backend/``` folder and run the below code to install required packages
```
npm install
```
3. Run the server with the below command
```
npm run dev
```
4. You can now test the API locally at ```http://localhost:<Port from .env>```



## API Endpoints
Endpoint|Required body|Function
---|---|---
/users | | 
POST- ```/users/signup``` | body: {username, password} | Signs up a user with username and password
POST- ```/users/login``` | body: {username, password} | logs in the user
/reviews | |
GET- ```/review/:_id``` | none required | returns all reviews associated with users _id
POST- ```/reviews``` | body: {subject, score, log, createdBy} | creates review
/flashcards
GET- ```/flashcards/:_id``` | none required | returns all flashcards associated with users _id
POST- ```/flashcards``` | body: {subject, question, answer, createdBy} | creates flashcard

# Technologies
## Frontend
- Vite
- React
- Bootstrap
- Axios
- React router dom
- Vitest
- Jest
- Jsdom

## Backend
- Express
- Cors
- BCrypt
- Jsonwebtoken
- Morgan
- Mongoose
- MongoDB


# Known bugs
- Following a suggestion link as soon as you log in will not work, it will work if the flashcards page has been visited prior to using a suggestion link