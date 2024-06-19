# Information Management System

A system for information.

### Pre-requisites

- Git [Git](https://git-scm.com/downloads)
- Node [Node](https://nodejs.org/en/download/)
- Xampp [Xampp](https://www.apachefriends.org/download.html)

### Quick Start

```bash
    git clone https://github.com/DarkIsAbove/Information_Management_System.git

    cd Information_Management_System

    npm i
```

Create and Set the environment variable values.
```bash
    cp .env.example .env
```

in `.env` file.
```bash
    DATABASE_HOST=localhost // required. where the database is hosted 
    DATABASE_USER=root // required. username of the one accessing the database
    DATABASE_PASSWORD= // required. password of that one.
    DATABASE_NAME=info_management // required. name of the database we are accessing
    DATABASE_PORT=3306 // required. port of the database

    ACCESS_TOKEN_SECRET=mysecret // use for authentication
    REFRESH_TOKEN_SECRET=myrefreshsecret // use for re authentication

    GOOGLE_DRIVE_FOLDER=1y4I626u4H7E6-GveAvWRzGW4Sic8aIzW // google drive folder where database backup will be inserted.
```

In the other bash terminal, Run the app.

```bash
    npm run dev
```

## Table of Contents

- [Information Management System](#information-management-system)
  - [Quick Start](#quick-start)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Folder Structure Overview](#folder-structure-overview)
  - [Commands](#commands)

## Features

- **SQL database**: [MySQL](https://www.mysql.com/downloads/) database using [XAMPP](https://www.apachefriends.org/download.html).
- **Encryption**: using [bcrypt](https://www.npmjs.com/package/bcrypt) node package to encrypt datas with hash.
- **User Authentication**: using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) node package for handling encryption of user information that will be used for authentication.
- **User Authorization**: using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) with role to only allow a specific user type to perform a particular task.


## **Folder Structure Overview**

```
/controllers
/database
/middleware
/models
/node_modules
/public
/routes
/services
/validators
```

- **controllers** - The controllers folder contains the controller files which handle the application's request and response logic. Controllers receive inputs from the routes, process the request (often interacting with the services and database), and return a response to the client.
- **database** - The database folder contains the controller files which handle the application's request in the database and also database configurations.
- **middleware** - The middleware folder contains middleware functions that process requests before they reach the controllers. Middleware is used for tasks such as authentication, logging, validation, and error handling.
- **models** - The models folder is for representing each database table as an entity that we can use for making request and handling errors to those table easier.
- **node_modules** - The node_modules folder contains the modules use by the application (such as express, bcrypt..).
- **public** - The public folder as it names implies, contain everything that can be seen. It will contain all the frontend or what user will see.
- **routes** - The routes folder defines the application's route handlers. Each route file sets up endpoints and maps them to the appropriate controller functions.
- **services** - The services folder contains business logic and interacts with the database. Services are used by controllers to perform operations such as fetching, creating, updating, or deleting data.
- **validators** - The validators folder is for validating an object to see whether it have the same structure as the one we are comparing it to.

## **Commands**

**Database restoration.**

Stop the application, run in the bash terminal. 

Make sure you are in the app directory `/Information_Management_System`.

Run:
```bash
    npm run database:restore
```