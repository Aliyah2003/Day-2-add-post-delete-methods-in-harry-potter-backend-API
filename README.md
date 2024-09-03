# Harry Potter Backend API
Welcome to the Harry Potter Backend API project! This is a simple Node.js application that allows you to manage a list of Harry Potter characters. You can view, add, update, and delete characters using this API.

## What Is This Project?
This project is a basic backend application built with Node.js and Express. It demonstrates how to create a RESTful API with endpoints to interact with a list of Harry Potter characters stored in a JSON file.

## Project Files and Folders
Here's a quick overview of the files and folders in this project:

- /index.js: This is the main file where the server is set up and where all the routes (API endpoints) are defined.
harrypotter.json: This file contains the initial data for the characters. It’s a JSON file with a list of Harry Potter characters.
- .env: This file contains environment variables, such as the port number the server will listen on. It's not included in the project but is used to configure the server.
- package.json: This file contains metadata about the project and lists the dependencies required to run it.
- package-lock.json: This file locks the dependencies to specific versions to ensure consistent installations across different environments.
- .gitignore: This file specifies which files and directories should be ignored by Git. Typically, it includes files like node_modules and .env.
- /node_modules: This folder contains all the dependencies installed for the project.
## Getting Started
To get this project up and running on your local machine, follow these steps:

1. Clone the Repository
First, download the project files to your computer using Git. Open your terminal or command prompt and run:

```javascript
git clone https://github.com/yourusername/harry-potter-backend-api.git
```

Replace 'yourusername' with your GitHub username.

2. Navigate to the Project Folder
Change your directory to the project folder:

```javascript
cd harry-potter-backend-api
```

3. Install Dependencies
This project relies on some external libraries. To install them, run:

```javascript
npm install
```

4. Set Up Environment Variables
Create a .env file in the root directory of the project. Inside this file, specify the port number where the server will listen:

makefile
```javascript
PORT=4000
```

5. Start the Server
To start the server, use the following command:

```javascript
npm start
```
If everything is set up correctly, you should see a message saying that the app is running.

6. Access the API
Open your web browser or use a tool like Postman to interact with the API. The server will be running at:


```javascript
http://localhost:3000
```
Available Endpoints
Here are the API endpoints you can use:

- GET /: Returns a welcome message.
- GET /characters: Retrieves a list of all characters.
- GET /characters/:id: Retrieves a character by ID.
- POST /characters: Adds a new character. You need to provide a JSON body with name and id.
- DELETE /characters/:name: Deletes a character by name.
- PATCH /characters/:id: Updates a character's name. You need to provide a JSON body with the new name.
Example Requests
Get All Characters
```javascript
curl http://localhost:3000/characters
```
Add a New Character
```javascript
curl -X POST http://localhost:3000/characters -H "Content-Type: application/json" -d '{"name": "Luna Lovegood", "id": 4}'
```
Update a Character's Name
```javascript
curl -X PATCH http://localhost:3000/characters/4 -H "Content-Type: application/json" -d '{"name": "Luna Lovegood Updated"}'
```
Delete a Character
```javascript
curl -X DELETE http://localhost:3000/characters/Luna%20Lovegood%20Updated
```
## Troubleshooting
If you encounter any issues, here are some common solutions:

- Make sure Node.js is installed correctly.
- Ensure you've run npm install to install all dependencies.
- Check for any error messages in the terminal and look them up if needed.
