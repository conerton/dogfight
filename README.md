
CORI'S DOGFIGHT!

Cori's DogFight is a hot dog tracking app for local Nashville business. Customers can track their hot dog comsuption and track their progress to the Wall of Weiners.

The following instructions will get you a copy of the project up and running on your local machine for demonstration and testing purposes.

Download and install Node.js

Install React with the following terminal command:

npm install --save react
Install ReactDOM with the following terminal command:
npm install --save react-dom
Install json-server with the following terminal command:
npm install -g json-server


Clone my repository to your local machine.

Usage
A step by step series of examples that tell you how to get a development env running

In your terminal, navigate to the project directory.
cd /Users/username/workspace/dogfight
From the root of this directory, run the following terminal command in order to start up the React application.
npm start
Open a new terminal tab and navigate to the api directory.
cd /Users/username/workspace/dogfight/api
Run the following terminal command in order to start up your json-server.
json-server -p 8088 -w database.json
Open your web browser of choice and navigate to http://localhost:3000/

You will be presented with a login/registration page if this is your first time using the application. Register an account or use an email I have set up "email@email.com" and password "hotdog".

Thank you for your time!

If you want to clone my repository, see below.

git clone git@github.com:conerton/dogfight.git
cd into the directory it creates
Make a database.json file in the api directory
Delete the .ignore file in the api directory





![Cori's Woofers ERD (4)](https://user-images.githubusercontent.com/71336836/103917238-fcd36a00-50d2-11eb-8d7f-2471fe6edfa3.png)




Built With
React - A JavaScript library for building user interfaces
Authors
Shawn Conerton - Original Creator - conerton
This project has been planned, developed, and tested exclusively by myself over the course of a two-week sprint.




