# Gotta Have Goals...

Create a fullstack app that allows users to track their goals.

## App

### Routes

The App should offer the following routes:

* `/` (home) - Landing page with explanation and "sign up now!"
* `/auth` - subroutes for `/signup` and `/signin` - Sign Up/In
* `/goals`
    * List of users own goals
        * User can mark goal complete
    * Form to add a new goal
* `/users` - List of all users and their goals (BONUS: change to be goals complete and total goals)

Also include a header on App with Navigation links to other routes

### Auth

Implement auth goodies:
* sign in and sign up components
* api auth services
* save token
* check for token on load
* add token to api requests
* sign out
* private routes that redirect to auth, and then redirect to route


## Server

### Sever Routes

* `POST` `/api/auth/signup`
* `POST` `/api/auth/signin`
* `GET` `/api/auth/verify`
* `GET` `/api/me/goals` - implicit use of `req.user.id`
* `POST` `/api/me/goals` - use `req.user.id` to enforce user
* `PUT` `/api/me/goals` - use `req.user.id` to enforce user
* `GET` `/api/users` - return list of all users and their goals (user name, goal name, goal complete)

## Bonus

* Change `GET` `/api/users` to aggregate count of goals per user and count of completed goals

## Rubric

* Setup server auth **2pts**
* Add Signup and Signin Components **3pts**
* Token Management **3pts**
* Private Routes **2pts**
