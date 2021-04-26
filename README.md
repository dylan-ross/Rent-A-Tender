

# Rent-A-Tender

## Overview

**Rent-A-Tender**, is an App to find and hire freelance bartenders to work a party or event. Bartenders create profiles, Members can book a date and time for a bartender to work.

<br>

## MVP

- Have a RESTful JSON API.
  - Build a Ruby on Rails server, exposing RESTful JSON endpoints.
  - Build a database with 3 tables: Users, Bartenders, Jobs
  - Utilize to define bartender, user, and job models for interacting with the database.
  - Implement working controller actions for Full CRUD on my jobs table  


- Have a working, reactive, React app.
  - The user can browse and search bartenders, but in order to see details or book a job a user must be signed in
  - Only Users can book a bartender, they are booked for a date and a block of time
  - Users and Bartenders will both have ability to read, update, and delete a job
  - Bartenders create, and edit their profiles
  - All links must work

### Goals

- Create a high-performing, good-looking, reactive app that connects freelancer bartenders to clients
- Deploy one Post MVP feaure
- 

<br>
 
### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       |  Library used for build a UI               |
| React Router Dom |  Routing Library                           |
|   Ruby on Rails  |  MVC Framework                             |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD


![Homepage](https://user-images.githubusercontent.com/75396967/116028313-df47f300-a624-11eb-8631-f686e8b033fa.png)
- Desktop Landing


- Bartenders Screen![All Bartenders - Queried Bartneders](https://user-images.githubusercontent.com/75396967/116033500-8762b980-a62f-11eb-8706-cdfa0277bf9c.png)


![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

https://whimsical.com/rent-a-tender-EfKyqJveZxKhXq6aLEExYf

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ container/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout
          |__ Layout.jsx
          |__ Layoiut.css
      |__ Nav.jsx
          |__ Nav.jsx
          |__ Nave.css
|__  screens/
      |__ home/
          |__ Home.jsx
          |__ Home.css
      |__ bartenders/
          |__ Bartenders.jsx
          |__ Bartenders.css
      |__ bartenderDetail/
          |__ BartenderDetail.jsx
          |__ BartenderDetail.css
|__  services/
      |__ api-helper.js
      |__ auth.js
      |__jobs.js
```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| create backend app. |    H     |     .25 hr     |       TBD     |     TBD     |
| create database     |    H     |     .25 hr     |       TBD     |     TBD     |
| create tables       |    H     |     .25 hr     |       TBD     |     TBD     |
| seed bartenders     |    H     |       1 hr     |       TBD     |     TBD     |
| set up controllers  |    H     |       3 hrs    |       TBD     |     TBD     |
| set up models       |    H     |       1 hr     |       TBD     |     TBD     |
| test endpoints      |    H     |      .5 hr     |       TBD     |     TBD     |
| set up auth         |    H     |       3 hrs    |       TBD     |     TBD     |
| set up CORS.        |    H     |     .25 hr     |       TBD     |     TBD     |
| create react app    |    H     |     .25 hr     |       TBD     |     TBD     |
| directory setup     |    H     |       1 hr     |       TBD     |     TBD     |
| api-helper cmpt     |    H     |      .5 hr     |       TBD     |     TBD     |
| main-conainer       |    H     |       3 hrs    |       TBD     |     TBD     |
| front end auth      |    H     |       3 hrs    |       TBD     |     TBD     |
| basic layout        |    H     |       1 hr     |       TBD     |     TBD     |
| user signup/in      |    H     |       3 hrs    |       TBD     |     TBD     |
| bartender signup/in |    H     |       3 hrs    |       TBD     |     TBD     |
| profile form        |    H     |       2 hrs    |       TBD     |     TBD     |
| test front end auth |    H     |      .5 hr     |       TBD     |     TBD     |
| home screen         |    H     |       2 hrs    |       TBD     |     TBD     |
| bartenders screen   |    H     |       2 hrs    |       TBD     |     TBD     |
| bartender detail    |    H     |       2 hrs    |       TBD     |     TBD     |
| jobs screen         |    H     |       2 hrs    |       TBD     |     TBD     |
| booking modal       |    H     |       2 hrs    |       TBD     |     TBD     |
| confirmation page   |    H     |       1 hr     |       TBD     |     TBD     |
| check links         |    H     |       1 hr     |       TBD     |     TBD     |
| check functionality |    H     |       1 hr     |       TBD     |     TBD     |
| basic css           |    H     |       3 hrs    |       TBD     |     TBD     |
| responsive design   |    H     |       3 hrs    |       TBD     |     TBD     |
| media quieres       |    H     |       3 hrs    |       TBD     |     TBD     |
| TOTAL               |          |    48.75 hrs   |       TBD     |     TBD     |

 
> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

https://app.diagrams.net/#G1X-T6-Gz8MPxY0Nima3ZIRhlxR-E95oRa

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
