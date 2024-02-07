# vue-toDoList

## Introduction
 > **This project utilizes a .env file to manage environment variables. It is necessary to create it, in order to run the application. This README explains how to do it and what variables to include**

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### ENVIROMENT SET UP:   

#### To create a .env file, follow these steps:
1. Create a new file named `.env` in the root directory of the project.
2. Add the required environment variables (see below) to the `.env` file.

#### What to Include in the .env File:
The .env file should include the following variables:
- `VITE_URL`: The url that will be used by vuex store to send api reqests. This repository has a local server setup in server.js file, if you want to use it simply reference `.env.example` file available in repository.

### Start local server:

This project requires local server to run correctly. Server setup file is stored in root directory in `server.js` file. To run it open terminal and navigate to root directory of the project and run: `node server.js`.

### Compile and Hot-Reload for Development

Open another terminal and navigate to root directory of the project. Run:

```sh
npm run dev
```

### Compile and Minify for Production

Open another terminal and navigate to root directory of the project. Run:

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

Open another terminal and navigate to root directory of the project. Run:

```sh
npm run lint
```
