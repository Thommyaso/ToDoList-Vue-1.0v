# vue-toDoList

## Introduction
 > **This project utilizes a .env file to manage environment variables. It is necessary to create it, in order to run the application. This README explains how to do it and what variables to include**

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

### Dependency Setup:

Open terminal and navigate to root directory of the project. Run:
```sh
npm install
```

### Enviroment Setup:   
#### To create a .env file, follow these steps:
1. Create a new file named `.env` in the root directory of the project.
2. Add the required environment variables (see below) to the `.env` file.

> **Reference `.env.example` file available in the repository.**

#### What to Include in the .env File:
The .env file should include the following variables:

- `VITE_MOCKSERVICE`: This boolean variable enables you to opt for a local server setup via the server.js file to store tasks, with Vuex store managing its state through API requests. By default, it's set to `true`, facilitating app testing without requiring the server.js file. If you desire to use server you need to set it to `false`

- `VITE_BASE_API_SERVER_URL`: This variable is the URL used by the API server to access task data. By default, this project utilizes server.js file as server, which employs http://localhost:3000/task/ as its endpoint. If you opt to modify this variable, please ensure to update the server.js file accordingly or set up your own server. We recommend setting it to the value provided in the .env.example file for seamless integration.

### Start local server:


If you've configured your setup to use a server in your `.env` file, you'll need to start it. Here's how:

- Open your terminal and navigate to the root directory of your project.
- Run the command: 

```sh
node server.js
```

## Start Project:

### To Compile and Hot-Reload for Development:

Open terminal and navigate to root directory of the project. Run:

```sh
npm run dev
```

### To Compile and Minify for Production:

Open terminal and navigate to root directory of the project. Run:

```sh
npm run build
```

### To Lint with [ESLint](https://eslint.org/):

Open terminal and navigate to root directory of the project. Run:

```sh
npm run lint
```
