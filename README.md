# Location Based Forums
An application used to create forums based on a location.  Only users within the forum's range can join and participate in the forum.

The purpose of Location Based Forums is to link users within a common area.  The area is relatively small, usually a quarter of a mile.  Typically, they would be used for, concerts, sports events, and large buiness meetings.  People attending these functions have a common interest and this application allows them to share their thoughts with others exclusive to the event.   

LBF uses GPS to determine a user's location and search for nearby forums.  If the user is within range, they can join the forum provided they are logged in.

Location Based Forums (LBF) are temporary (just as the events they're usually associated with) which means they expire after certain amount of time (e.g., 12 hours). 

## Main Page
![Location Based Forums Main Page](/documentation/LBF-MainPage.png "Main Page")

## Authenticated User Page
![Location Based Forums Authenticated User Page](/documentation/LBF-UserLoggedIn.png "Authenticated User Page")

## Message Board
![Location Based Forums Message Board](/documentation/LBF-MessageBoard.png "Message Board")

# User Stories Implemented
- As a user, I should be able to create a new account. 
- As a user, I should be able to log in. 
- As a user, I should be able to log out. 
- As a user, I should see a map with forums near me. 
- As a user, I should be able to get details on the forums (e.g., number of posts, users). 
- As a user, I should be able join a forum near me. 
- As a user, I should be able to see posts in a forum I joined. 
- As a user, I should be able to submit my own posts. 
- As a user, I should only be able to see posts if I'm logged in and a member of the forum. 
- As a user, I should be able to create a new forum. 


## Additional Features
- Used Google Maps React package to display users location and forum(s) location and details (e.g., forum name, number of users, number of posts).
- Interfaces with an API which stores the forum, posts, and user information.


# Technologies

* HTML
* CSS
* Javascript
* React
* Axios
* Google Maps
* Mongo DB
* Mongoose
* Express



# Getting Started
You can access the site via this link:  [LocationBasedForums](https://paul-location-based-forums-frontend.herokuapp.com/)


# Application Design

## Entity Relationship Diagram

![Location Based Forums ERD](/documentation/LBF.png "ERD Diagram")

## RESTful Routes

![MoveMe RESTful Routes For Users](/documentation/REST_RoutesForUsers.png "Users RESTful Routes")

![MoveMe RESTful Routes For Boxes](/documentation/REST_RoutesForBoxes.png "Boxes RESTful Routes")

## Wireframes

![MoveMe MainMenu wireframe](/documentation/MoveMeMainMenu.jpg "MoveMe MainMenu wireframe")

## Application design
This application employs the Model View Controller principle to create a basic interactive web application.  It uses RESTful practices to manage the available services.

### Front-end
The front-end is a Node JS application which relies on Express and EJS.  Page styling is handled primarily by Materialize and custom CSS overrides. 

### Back-end
It utilizes Mongo as a non-relationship data store.  There are three collections defined: user, box, category.  User has a one-to-many relationship with box.  They are associated via a referential tie defined using Mongoose schemas.  The Category is a stand alone collection which is used to populate drop down boxes.  

There two seeds files and associated routes which can be used to prepopulate the collections. 


# Known Issues
- Some input fields can be blank which results in crashes if the field is queried at a future point in time.
- Site crashes when setting up a new user with an existing username. 


# Future Improvements
- Incorporate a notification service (e.g., Firebase) to allow real-time messaging.
- Automatically delete forums after a designated time (e.g., 24 hours).




