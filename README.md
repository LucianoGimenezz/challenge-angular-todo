# Getting started
## Prerequisites

Before getting started, make sure you have the following installed on your system:

- [Docker](https://www.docker.com/get-started) (Only if you want to run the app in a container)
- [Git](https://git-scm.com/)

## Clone the Repository

Clone this repository to your local machine using Git:

```bash
git clone git@github.com:LucianoGimenezz/challenge-angular-todo.git
```

### Run the application locally

1 - Navigate to your project directory:
```bash
  cd challenge-angular-todo
```

2 - Install project dependencies:
```bash
  npm install --force
```

3 - Start the development server:
```bash
  npm start:dev
```
to see the app go to `http://localhost:4200/`


### Dockerize the application

Follow these steps to run the angular application in a Docker container:

1 - Navigate to your project directory:
```bash
  cd challenge-angular-todo
```

2 - Build the Docker image:
```bash
  docker build -t image_name -f Dockerfile.Dev
```

replace `image_name` with the desired name for the development docker image.

3 - Run the docker container:
```bash
 docker run -p 4200:4200 image_name
```

## Running Cypress Tests

To execute Cypress tests you can use the following methods:

### Normal Mode

To run Cypress tests in normal mode (with an interactive graphical user interface), use the following command:

```bash
npm run cypress:open
```

### Headless mode

if you want to run Cypress tests in headless mode (without a graphical user interface), you can use the following command.
```bash
 npm run test:e2e
```

Ensure that your application is up and running, otherwise, an error can ocurr.

## Features

- [✅] Add todos
- [✅] Delete todos
- [✅] Mark as done
- [✅] Data Persistence
- [✅] Test e2e

##  Deploy
[🚀](https://angular-challenge.netlify.app/)
