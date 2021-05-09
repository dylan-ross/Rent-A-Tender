
# Rent-A-Tender

https://rent-a-tender.netlify.app/

## Overview

**Rent-A-Tender**, is an App to find and hire freelance bartenders to work a party or event. Bartenders must register by filling out a profile which includes and hourly rate. Anyone can search bartenders, but a user must sign in to see details and book a date and time for a bartender to work. Rent-A-Tender, we bring the bar...tender to you.

<br>

## MVP

- Have a RESTful JSON API.
  - Build a Ruby on Rails server, exposing RESTful JSON endpoints.
  - Build a database with 3 tables: Users, Bartenders, Jobs
  - Utilize to define bartender, user, and job models for interacting with the database.
  - Implement working controller actions for Full CRUD on my jobs table  


- Have a working, reactive, React app.
  - Only Users can book a bartender, they are booked for a date and a block of time
  - Users and Bartenders will both have ability to read, update, and delete a job
  - All links must work

### Goals

- Create a high-performing, good-looking, reactive app that connects freelancer bartenders to clients
- Deploy one Post MVP feaure

<br>
 
### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       |  Library used to build a UI                |
| React Router Dom |  Routing Library                           |
|      Axios       |  Used to make api calls                    |
|   Ruby on Rails  |  MVC Framework                             |

<br>

### Client (Front End)

#### Wireframes

<img width="1038" alt="Screen Shot 2021-04-26 at 1 37 57 AM" src="https://user-images.githubusercontent.com/75396967/116134577-10b0d500-a69e-11eb-9701-d014694fee33.png">


![Homepage](https://user-images.githubusercontent.com/75396967/116028313-df47f300-a624-11eb-8631-f686e8b033fa.png)

- Bartenders Screen![All Bartenders - Queried Bartneders](https://user-images.githubusercontent.com/75396967/116033500-8762b980-a62f-11eb-8706-cdfa0277bf9c.png)

![Bartender Detail](https://user-images.githubusercontent.com/75396967/116103170-58733480-a67d-11eb-8d87-21e4bca7cc6d.png)

![User Sign-Up](https://user-images.githubusercontent.com/75396967/116103197-5dd07f00-a67d-11eb-841a-a8e99e9eb050.png)

![User sign_in](https://user-images.githubusercontent.com/75396967/116103348-7f316b00-a67d-11eb-8b33-a46644c44320.png)

![Bartender Sign-up](https://user-images.githubusercontent.com/75396967/116103393-8b1d2d00-a67d-11eb-988a-8accacd0e0b0.png)

![Bartender Sign-in](https://user-images.githubusercontent.com/75396967/116103414-8eb0b400-a67d-11eb-9bc1-b318f6b75e2e.png)

![Bartender create-update profile page](https://user-images.githubusercontent.com/75396967/116103436-94a69500-a67d-11eb-8990-d0f693d5c687.png)

![Booking Confrimation](https://user-images.githubusercontent.com/75396967/116103461-9bcda300-a67d-11eb-9a1c-d4c020dc4f28.png)

![Booking Modal](https://user-images.githubusercontent.com/75396967/116103480-9ff9c080-a67d-11eb-965a-b9172c749c6f.png)

![Web 1920 – 3](https://user-images.githubusercontent.com/75396967/116103585-ba339e80-a67d-11eb-83b6-cca262cee396.png)


<img width="362" alt="Screen Shot 2021-04-26 at 12 25 21 PM" src="https://user-images.githubusercontent.com/75396967/116117662-7e530600-a68a-11eb-9312-0784d7591a51.png">




#### Component Tree

https://whimsical.com/rent-a-tender-48VghggHeRevpAmLnWLGuw

#### Component Architecture

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
| create backend app. |    H     |     .25 hr     |       .25     |     .25     |
| create database     |    H     |     .25 hr     |       .25     |     .25     |
| create tables       |    H     |     .25 hr     |       .25     |     .25     |
| seed bartenders     |    H     |       1 hr     |       1hr     |     1hr     |
| set up controllers  |    H     |       3 hrs    |       3hr     |     3hr     |
| set up models       |    H     |       1 hr     |       1hr     |     1hr     |
| test endpoints      |    H     |      .5 hr     |       1hr     |     1hr     |
| set up auth         |    H     |       3 hrs    |       3hr     |     3hr     |
| set up CORS.        |    H     |     .25 hr     |       .25     |     .25     |
| create react app    |    H     |     .25 hr     |       .25     |     .25     |
| directory setup     |    H     |       1 hr     |        .5     |      .5     |
| api-helper cmpt     |    H     |      .5 hr     |        .5     |      .5     |
| main-conainer       |    H     |       3 hrs    |       3hr     |     3hr     |
| front end auth      |    H     |       3 hrs    |       3hr     |     3hr     |
| basic layout        |    H     |       1 hr     |       3hr     |     3hr     |
| user signup/in      |    H     |       3 hrs    |       3hr     |     3hr     |
| bartender signup/in |    H     |       3 hrs    |       3hr     |     3hr     |
| profile form        |    H     |       2 hrs    |       3hr     |     3hr     |
| test front end auth |    H     |      .5 hr     |       1hr     |     1hr     |
| home screen         |    H     |       2 hrs    |       2hr     |     2hr     |
| bartenders screen   |    H     |       2 hrs    |       2hr     |     2hr     |
| bartender detail    |    H     |       2 hrs    |       2hr     |     2hr     |
| jobs screen         |    H     |       2 hrs    |       2hr     |     2hr     |
| booking modal       |    H     |       2 hrs    |       2hr     |     2hr     |
| confirmation page   |    H     |       1 hr     |       2hr     |     2hr     |
| check links         |    H     |       1 hr     |       2hr     |     2hr     |
| check functionality |    H     |       1 hr     |       2hr     |     2hr     |
| basic css           |    H     |       3 hrs    |       3hr     |     3hr     |
| responsive design   |    H     |       3 hrs    |       3hr     |     3hr     |
| media quieres       |    H     |       3 hrs    |       3hr     |     3hr     |
| TOTAL               |          |    48.75 hrs   |       52hr    |     52hr    |

 
<br>

### Server (Back End)

#### ERD Model
https://drive.google.com/file/d/1X-T6-Gz8MPxY0Nima3ZIRhlxR-E95oRa/view?usp=sharing
<br>

***

## Post-MVP

- Users can rate bartenders
- Users can review bartenders
- Highest rated bartenders get rendered on landing screen
- Dynamic Calender so Bartenders don't get overbooked

***

## Code Showcase


## Code Issues & Resolutions

