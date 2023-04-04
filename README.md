# UTA-Bootcamp-Challenge18
## NoSQL Challenge: Social Network API
----------------------------------------------------------------------
## Description

Many social networks favor MongoDB because of its ability to handle large amounts of data quickly and its flexibility with unstructured data. The task at hand was to create an API for a social network web application that enables users to share their thoughts, respond to their friends' thoughts, and build a list of friends.

----------------------------------------------------------------------

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
* "User Story" & "Acceptance Criteria" listed above have been provided by the UTA Bootcamp Program 2022.
----------------------------------------------------------------------

## Table of Contents

- [Installation](#installation)
- [Built Using](#built-using)
- [Preview](#preview)
- [Links](#links)
- [License](#license)

----------------------------------------------------------------------

## Installation

1. Clone/download git repository.
2. Run command "npm i"
3. Run command "npm run start" to open app on live server.

## Built Using

- Node.js
- MongoDB
- Express.js
- Mongoose
- NPM Packages:
- npm i mongoose
- npm i express
- npm i dotenv

#

## Preview

<img src= "assets/images/title.jpg"/>

#

## Links

- GitHub Repository Link: https://github.com/khevb27/UTA-Bootcamp-Challenge18

----------------------------------------------------------------------
## License

Please refer to licensing documentation in the project repository.

<img src="https://img.shields.io/badge/license-MIT License-blue.svg" alt="GitHub License">

----------------------------------------------------------------------