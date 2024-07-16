# TaskSystem2

A comprehensive Task Management System built with React and NestJS to help users organize and manage their tasks efficiently. This application includes features such as user authentication, task categorization, due dates, progress tracking, and collaboration.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Future Plans](#future-plans)
- [Contributing](#contributing)

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Task Categorization**: Organize tasks into different categories.
- **Progress Tracking**: Monitor the progress of each task.

## Prerequisites

- Node.js
- npm
- MongoDB Atlas account

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/elizbaryananush/TaskSystem2.git
    cd TaskSystem2
    ```

2. **Install Backend Packages**

    ```bash
    cd backend
    npm install
    ```

3. **Install Frontend Packages**

    ```bash
    cd ../front
    npm install
    ```

4. **Create .env Files**

    - **Backend**

      1. In the `backend` folder, create a file named `.env`.
      2. Add the following variables to the `.env` file, replacing `<username>`, `<password>`, and `<your-cluster-url>` with your MongoDB Atlas credentials and cluster URL:

        ```env
        MONGO_URL='mongodb+srv://<username>:<password>@<your-cluster-url>/'
        JWT_SECRET='YourJWTSecret'
        ```

    - **Frontend**

      1. In the `front` folder, create a file named `.env`.
      2. Add the following variable to the `.env` file:

        ```env
        REACT_APP_API_PATH='http://localhost:4100/'
        ```

5. **Run the Project**

    - **Backend**

        ```bash
        cd backend
        npm run start:dev
        ```

    - **Frontend**

        ```bash
        cd ../front
        npm start
        ```

## Usage

1. **Navigate to the Backend Directory and Start the Server**

    ```bash
    cd backend
    npm run start:dev
    ```

2. **Navigate to the Frontend Directory and Start the Client**

    ```bash
    cd ../front
    npm start
    ```

3. Open your browser and go to `http://localhost:3000/` to start using the Task Management System.

## Technologies Used

- **Frontend**: React, Sass
- **Backend**: NestJS, MongoDB, JWT Authentication
- **Database**: MongoDB
- **Styling**: Sass

## Future Plans

- **Enhanced Due Dates**: More advanced due date features, including reminders and recurring tasks.
- **Improved Sharing**: Enhanced collaboration features to allow sharing tasks with more control over permissions.
- **Increased Security**: Additional security measures to protect user data and improve authentication mechanisms.
- **Deployment**: Plans to deploy the application for public access, ensuring it is scalable and reliable.
- **Additional Features**: Continual improvement and addition of features based on user feedback and emerging needs.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and include tests where applicable.

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature-branch).
6. Create a pull request.

<<<<<<< HEAD
Don't make changes into main directory !!!
=======
Don't change main branch !!!
>>>>>>> 0834d7c554de6d26cfe53c0e6d397bd1763b798c
