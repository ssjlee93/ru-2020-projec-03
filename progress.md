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