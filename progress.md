# Progress log 
## 8/1 
brainstorm ideas  
lookup API to use  

## 8/6 
wireframe discussion  
components discussion  
CSS framework discussion  
potential development discussion  

Everything in this section is updated in brainstorm.md 

## 8/8 
proposal approved  
basic React setup done  
tested API for Big Mac Index  
wireframe decided  

#### Trouble: 
wireframe images do not show up on proposal  

## 8/11 
begin working on component  
 * division of labor on components 
 * the main page has multiple components, requiring all of us to work on React  

 discussing project and researching Material UI  
 decided on basic components  
* signup
* signin
* App Bar 
* Wrapper
* pages: tentative structures 
    * Home.js 
    * Landing.js
    * Main.js  

setup API.js with country codes in json  
axios and react-router-dom research  
firebase research: prolonged until end of development  (Auth.js is empty until then)  

#### Trouble: 
Material-UI has its own way of working with React. We need to learn it  
CDN vs. npm Material UI  
* npm Material UI since the doc discourages CDN for production  

Material-UI + react-router-dom needs more research  

## 8/13 
 basic backend code added  
* mongoose model 
* server.js updated 
* routes updated  
 some Material UI components added  
* cards 
* forms (signup, signin)  

tested components for functionality  
started logging progress in progress.md  

#### Troubles: 
 To accomodate Firebase, we split the original schema intoi two: user and budget  
 Mateirla UI fails in its styling  

## 8/15 
Gird system of Material UI applied 
Solved the trouble on 8/13 about Mateirla UI styling  
Dropdown.js created (Jenny used to state hook to establish this effectively)  
Main.js modified to apply Grid  
Received news that Firebase is frontend  
Basic Firebase implemented  
Our plan with Firebase:  
* receive authentication in boolean from frontend  
* handle what needs to be done with the authenticated user in the backend  

#### Troubles: 
using state to print categories onto two components: card.js list.js on the right side  
CRUD must be done in MongoDB; if Firebase CRUD instead of MongoDB, then we must implement Note Taker idea
Create: receive userid from Friebase and create a budget plan for the user  
Read: receive ID and read the budget values (preset categories)  
Update: after read, update values  
Delete: if (!user) {delete by ID }  

Steve had a weird epiphany that we didn't have a CRUD for MongoDB, but Firebase + MongoDB requires us to CRUD anyways. I was being dumb. Sorry guys 

## 8/18 
finished category.js  
basic naviagation working  
singin and signout modified  
began password reset  
modified firebase context  

#### Trouble  
understanding firebase  
tabs vs. app bar  
understanding firebase under React  

#### To-do
try APIs  
set up backend  
test firebase  
styling  

## 8/20
We need Firestore to save user data  
found React version of Firebase. So far, we've been configuring Firebase for our app, but the doc shows us a drop in solution  
correctly position navbar items using flexbox  

#### Trouble
dropdown.js and Dropdown.js are being pulled from the repo for some reason  

## 8/22 
debugging Firebase  

#### Trouble
The guide we've been following didn't work for us.  
We called in our instructor's help for a Firebase authentication demo  

## 8/23  
re-worked the entire project around the demo code for firebase  
deleted: 
* account  
* Admin  
* constants  
    * routes  
* Header  
* passwordChange  
* passwordReset  
* Sessions  
* Signin  
* SignOut  
* Singup

reworked  
* App  
* SingIn.js  
* SignUp.js  

#### To-do  
Steve: test API, setup MongoDB  
Kobe: style components, custom CSS, revise text (everywhere except Banner)  
Erica: Facebook login, Twitter login, Banner text revision  
Jenny: help Kobe code everything well and presentation around Thursday  

## 8/25  
setting up backend with firebase on frontend  
re-styling components and pages  
working on basic CRUD. Relying on class activity and previous homework to draw ideas for code  
frontend polishing began 

#### Future Development  
using uid vs. email  
We selected using uid to reference users so that this app might support multi-factor login  

#### Trouble
CRUD not functioning. Unsure of which code is missing  

## 8/27  
CRUD still not working. Modified many files and codes to fit our project  
frontend further polishing  
frontend interacive with user input  
components further segmented for better organization and separation of concerns  

#### Trouble
CRUD still too hard  
late in schedule  

## 8/29  
CRUD finished  
checking signup functionality  
Big Mac Index API added in  
Country dropdown now shows the name of country of destination  

#### Trouble
Big Mac Index API was returning an HTML as opposed to JSON. Our instructor helped us process it as a JSON  
Country of destination shows, but the dropdown now does not show the country name  
signup does not route when signed up  
signin with email and password does not route when signed in  
signup and signin with email and password does not work  

## 8/30  
added authenticated.js to route and check user signin status  
signin with email and password sign in  

#### Trouble  
signup does not route when signed up  
works on one of our coders computer fully, but another one's computer refused to stay logged in on the page  
* refreshing the page kicked the user out  

## 9/1  
Big Mac Index API fully functional - calculation for relative PPP implemented  
piechart implemented  
signup redirect fixed  

#### Trouble  
piechart refused to show its values when data was replaced from integer to props  
signup redirect on any onclick instead of successful user creation  
displayName not showing when signed up with email/pw  
displayName not showing on pageload  
dropdown option not showing country name on dropdown itself  

## 9/2  
checked all functionality - everything functions  
signup redirects and routes to profilepage  
signin functions correctly  
password reset functions correctly  
google signin functions correctly  
added in logo header  

for all remaining troubles, we deciced to abandom them due to time constraints  

#### Trouble  
forgot to add in country selection in MongoDB model - user must select the country each time  
piechart still does not function  
