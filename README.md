# cornell-web-application

## Objective

A user interface supported by the backend and database for an advanced robot dog (used to train veterinaries) was delivered in this project. In terms of the architecture, this project is constructed based on a classic three-tier structure. The front end visually presents the user interface and reacts to operations from users. In detail, React is used for the logic implementation of the front end while Bootstrap and Material-UI are applied to the appearance designs. The communication between the frontend and backend utilizes HTTP requests when real-time data is required or forms are submitted by users. The backend works as the nerve center, which takes charge of the real-time data transmission and scenario running. The backend also manages a database (MongoDB), which stores scenarios, real-time vitals, hardware modes, and account information. Furthermore, integrated interfaces are also provided by the backend to interact with the hardware of the robot dog. 


## Guide
The design details and further development and deployment methods are disccussed in this report:  
https://github.com/fl427/cornell-web-application/blob/master/ECE%20MEng%20Design%20Final%20Report.pdf

## Toolkits and Deployment

- Front End:
  - [x] React
  - [x] Material Design for Bootstrap
  - [x] Axios
  - [x] **Heroku**
- Back End:
  - [x] Express
  - [x] **Heroku**
- DataBase:
  - [x] MongoDB
  - [x] **Atlas**
- Management:
  - [x] npm

## Demo
### User Authentication:
  ![image](https://github.com/fl427/cornell-web-application/blob/master/Demo/0.jpg)
### Real-time Dashboard for Vital signs:
  ![image](https://github.com/fl427/cornell-web-application/blob/master/Demo/1.jpg)
  ![image](https://github.com/fl427/cornell-web-application/blob/master/Demo/2.jpg)
### Flexible Designs for Different Window Sizes:
  ![image](https://github.com/fl427/cornell-web-application/blob/master/Demo/2-2.jpg)
  ![image](https://github.com/fl427/cornell-web-application/blob/master/Demo/2-3.jpg)
### Scenario Selector:
  ![image](https://github.com/fl427/cornell-web-application/blob/master/Demo/3.jpg)
### Video Player:
  ![image](https://github.com/fl427/cornell-web-application/blob/master/Demo/4.jpg)
### Error Page:
  ![image](https://github.com/fl427/cornell-web-application/blob/master/Demo/5.jpg)
### History for a Specific Vital Sign:
  ![image](https://github.com/fl427/cornell-web-application/blob/master/Demo/6.jpg)
### User Management System:
  ![image](https://github.com/fl427/cornell-web-application/blob/master/Demo/7.jpg)

## Reference Documents for Future Developers
The reference documents for the framework, package, and database are listed below.  
React - frontend framework: https://reactjs.org/  
Bootstrap - classic CSS framework: https://getbootstrap.com/  
Material-UI: https://material-ui.com/  
MDBootstrap - frontend components package: https://mdbootstrap.com/docs/react/  
Express - backend framework: https://expressjs.com/  
MongoDB Atlas - cloud platform of MongoDB: https://www.mongodb.com/cloud/atlas  
Node.js - backend environment: https://nodejs.org/en/  
AWS Elastic Beanstalk - backend deployment: https://aws.amazon.com/elasticbeanstalk/  
AWS Simple Storage Service - static website deployment: https://aws.amazon.com/s3/  
Heroku - free cloud computing platform: https://www.heroku.com/  

