# Book Garden 
Goal was to make information system that would allow users to borrow books from libraries. This project was school project at BUT-FIT.
Project is hosted at [Heroku](https://book-garden.herokuapp.com/).

## Parts of system
> - Database - PostgreSQL at remote server
> - Backend/API - Python - Flask Rest API, Access to database is trough ORM - Flask SQLAlchemy
> - Frontend - JavaScript - React

### Overview of the system

#### Roles
> - Admin
> - Librarian
> - Book distributor
> - Registered User
> - Unregistered User

#### Admin
> - Can edit users and libraries
> - Has rights of all other users

#### Librarian
> - Can edit book titles
> - Manages libraries and books in it
> - Manages reservations and borrowings of books
> - Makes orders for new books into library

#### Book distributor
> - Can edit book titles
> - Fulfills orders given by librarian


#### Registered User
> - Can borrow and reserve books from library
> - Votes for new books in library

#### Unregistered User
> - Can view availible books in libraries

### Fake data scrip
Project also conatins Python script that fills databse with demo data. Script uses Faker to generate data and Selenium to download info about real books from book store websites.  

### Assignment
For original assigment see [assignment.md](https://github.com/Adam-Fabo/Book-Garden/blob/main/assignment.md) \[Czech language]. 

