[Check out the app!](https://inky-tweet.herokuapp.com/)
# InkyTweet

## Project Proposal


## Wireframes


## Instructions


## Technologies and Tools
* Sublime
* Git & Github
* HTML5 & CSS3
* JavaScript
* Node.js
* Express
* MongoDB
* Mongoose
* Materialize
* oAuth
* React

## Routes
| CRUD          | Route             | Functionality                      |
|:--------------|:------------------|:-----------------------------------|
| GET           | /auth/user        | Gets currently logged in user info |
| GET           | /auth/logout      | logs out user                      |
| GET           | /auth/login       | Redirects user to login through Twitter  |
| GET           | /auth/return      | Redirects user back to app after login |
| GET           | /profile/:id      | view my purchased and written tweets |
| DELETE        | /profile/:id      | Delete tweet from user's db        |
| POST          | /profile/         | Post new InkyTweet                 |
| GET           | /users            | Sends a list of users              |
| GET           | /users/:id        | Sends user's info                  |
| PUT           | /users/tweets/:id | Add tweet to user's db             |
| PUT           | /users/:id        | Subscribe to user's store          |

## Models
User Schema

| Key            | Type        |
|:---------------|:------------|
| twitterId      | String      | 
| handle         | String      | 
| pic            | String      | 
| reputation     | Number      | 
| subscriptions  | [String]    | 
| writtenTweets  | [String]    | 
| purchasedTweets| [String]    | 

 
Tweet Schema

| Key           | Type         |
|:--------------|:-------------|
| tweet_id            | String | 
| creator           | String | 
| reserved          | Number | 
| body         | String | 
| categories | Number | 


## Workflow
1. Created the backend routes.
1. Set up react frontend.
1. Set up frontend functionality for interacting with info fetched from backend.
1. Styled the app.
1. Fixed bugs.

## How to Improve
1. Improve the design.