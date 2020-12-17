# Location Based Forums
An application used to create forums based on a location.  Only users within the forum's range can join and participate in the forum.

The purpose of Location Based Forums is to link users within a common area.  The area is relatively small, usually a quarter of a mile.  Typically, they would be used for, concerts, sports events, and large buiness meetings.  People attending these functions have a common interest and this application allows them to share their thoughts with others exclusive to the event.   

LBF uses GPS to determine a user's location and search for nearby forums.  If the user is within range, they can join the forum provided they are logged in.  Users are allowed to join multiple forums provided that they are in range.

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
* JSON



# Getting Started
You can access the site via this link:  [LocationBasedForums](https://paul-location-based-forums-frontend.herokuapp.com/)


# Application Design

## Entity Relationship Diagram

![Location Based Forums ERD](/documentation/LBF.png "ERD Diagram")

## RESTful Routes

![Location Based Forums RESTful Routes](/documentation/LBF_REST-Routes.png " RESTful Routes")


## Wireframes

[Location Based Forums MainMenu wireframe](/documentation/LBFMainPage.png "Location Based Forums MainMenu wireframe")

[Location Based Forums Posts wireframe](/documentation/LBFPostsPage.png "Location Based Forums Posts wireframe")

## Application design
LBF is comprised of two independant applications.  The front-end is completely separate from the middle tier (api) and back-end database.

### Front-end
The front-end was built using the React JS library.  It uses the google-maps-react package to display Google Maps and its features.  Styling is done using standard CSS.  

### Back-end
This utilizes Mongo as a non-relationship data store.  There are three collections defined: user, forum, post.  An JS Express app handles the interactions between the DB and the front-end.  The front-end calls the API provided by the Express app.

A seed file is used to prepopulate the collections with basic data. 


# Known Issues
- The posts page sometimes shows the previous posts when navigating to another forum.


# Future Improvements
- Incorporate a notification service (e.g., Firebase) to allow real-time messaging.
- Automatically delete forums after a designated time (e.g., 12 hours).
- Allow users to change the range when viewing forums.  Note: this will not impact the range for joining forums (currently .25).
- Allow forum creator to set limits on max users. 
- Utilize more Google maps features to enhance user experience.
- Overal fit and finish.





