# AUTHOR-FEED-NODEJS-EXPRESS-RESTFUL-API-


## Table of content 

* General info
* Technologies
* Setup

## Introduction 

Simple RESTFUL API created using Node.JS, Express.JS and MongoDB.

## Technologies

* Node.js
* Express.js
* MongoDB

## Perequisite

Before launching this project you must ensure that you have MongoDB installed locally
Bellow are the links to help you installing it:

 —> https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
 
—> https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

—> https://docs.mongodb.com/manual/administration/install-on-linux/

## Launch

*  git clone git@github.com:JordyBukondaTshibangu/AUTHOR-FEED-NODEJS-EXPRESS-RESTFUL-API-.git
* cd AUTHOR-FEED-NODEJS-EXPRESS-RESTFUL-API-
* npm install 
* npm run dev

## APP STRUCTURE AND KEY POINTS


- [x] API ==> Server
			
In the server we import 

    1.  express (The framework on which will be built the app)
    
    2.  body-parser (It helps sending POST and PUT requests as it enables you to take JSON body data )

    3.  multer (It enables you to upload images)

    4.  jsonwebtoken ( for user authentication and routes protection)

    5.  bcrypt ( for password encryption)


- [x] Database  => Database


    * Import mongoose 
    * Create a connection url
    * Create the connect method 	

- [x] API ==> Models

	We use the Mongoose schema to create a schema for the entities in our app
	A document schema is a JSON object that allows you to define the shape and content of documents and embedded documents in a collection

We have : 

    * User schema (name, email, password, status, posts)
    *  Post schema (title, imageUr, content, createor)

- [x] API ==> Routes

The routes are : 

    1. SIGNUP USER  ==>  PUT ==> /signup
    
    2. SIGNIN USER  ==> POST ==> /login

    3. GET STATUS  ==> GET ==> /status
    
    4. CREATE POST ==> PUT ==> /post

    5. READ ALL POSTS ==> GET ==> /posts

    6. READ SINGLE POST ==> GET ==> /post/:id

    7. UPDATE POST ==> PUT ==> /post/:id

    8. DELETE POST ==> DELETE ==> /post/:id





