# Challenge 12 E-Commerce Back End
![MIT License](https://img.shields.io/badge/license-MIT-blue)

## Description 
  The back end for an e-commerce site on localhost using express.js and sequalize. 

## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)

## Installation
  Setup the sql enviroment. 
  Make a .env file or enter server credentials in connections.js in the config directory.
  If the .env file is used, it will need 3 credentials, *replace* with your own credentials. 
    <pre>
    DB_NAME= "*ecommerce_db*"
    DB_USER = "*root*"
    DB_PW = "*yourpassword*"
    </pre>

  To initialize open the mySQL CLI tool with the command
    <pre>
    mysql -u '*root*' -p
    </pre>

  Once in the mySQL shell use the command
    
    source db/schema.sql

  Exit the mySQL shell with

    exit

  Install the npm packages with

    npm install

  If example seed data is wanted, use command  

    npm run seed

## Usage
  Run the application by using the command

    npm start
  
  Use a insomnia or a similiar program to run the various routes. 

  Example Routes: 

    GET http://localhost:3001/api/products/ 

    DELETE http://localhost:3001/api/categories/2

    POST http://localhost:3001/api/tags/
    JSON :  {
                "tag_name": "New Tag!"
            }

    PUT http://localhost:3001/api/products/3 
    JSON :  {
	            "product_name": "Updated Product",
	            "price": 25,
	            "stock": 7,
	            "category_id": 7,
	            "tagIds": [1, 3, 4, 10]
            }


  ![ss](./assets/SS.png)

## License
  This application is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license
  
## Questions
  Created by: [cgwol](https://github.com/cgwol/)
  
  Contact with any further questions at [cgwalterson@icloud.com](mailto:cgwalterson@icloud.com)
  
## Video 
  [Video Link](https://drive.google.com/file/d/1brJwB9h4GfkHN0EAd0MjvB8kaXTw6hsm/view?usp=sharing "Video Link")