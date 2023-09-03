# Getting started
## Prerequisites

Before getting started, make sure you have the following installed on your system:

- [Docker](https://www.docker.com/get-started) (Only if you want to run the app in a container)
- [Git](https://git-scm.com/)

## Clone the Repository

Clone this repository to your local machine using Git:

```bash
git clone https://github.com/your-username/your-angular-app.git
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


## Features

- [✅] Add todos
- [✅] Delete todos
- [✅] Mark as done
- [✅] Data Persistence
