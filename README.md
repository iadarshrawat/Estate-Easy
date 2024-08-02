
![Screenshot 2024-07-22 100433](https://github.com/user-attachments/assets/17fb1b7c-c5c0-404b-ac0d-7b4b30911198)

# Real Estate Website

This project is a full-stack real estate website that allows users to buy or rent properties. It is built using the MERN stack with Node.js, MongoDB, Prisma, React.js, and Socket.io for real-time communication.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse properties for sale or rent.
- Real-time chat with an admin.
- Secure user authentication and authorization.
- Detailed property listings with images, descriptions, and prices.
- Responsive design for mobile and desktop.

## Technologies

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Prisma
- **Real-time Communication:** Socket.io

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB
- Prisma
- npm or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/real-estate-website.git
    cd real-estate-website
    ```

2. **Install dependencies for the backend:**

    ```bash
    cd backend
    npm install
    ```

3. **Install dependencies for the frontend:**

    ```bash
    cd ../frontend
    npm install
    ```

4. **Install dependencies for Socket.io:**

    ```bash
    cd ../socket.io
    npm install
    ```

### Running the Application

1. **Start MongoDB:**

    Ensure MongoDB is running on your machine. You can start it using the following command:

    ```bash
    mongod
    ```

2. **Configure Prisma:**

    In the `backend` folder, configure Prisma to connect to your MongoDB instance. Update the `prisma/schema.prisma` file with your MongoDB connection details.

3. **Run database migrations:**

    ```bash
    cd backend
    npx prisma migrate dev
    ```

4. **Start the backend server:**

    ```bash
    npm start
    ```

5. **Start the frontend server:**

    ```bash
    cd ../frontend
    npm start
    ```

6. **Start the Socket.io server:**

    ```bash
    cd ../socket.io
    npm start
    ```

7. **Open your browser:**

    Visit `http://localhost:3000` to view the website.

## Folder Structure

```plaintext
real-estate-website/
├── backend/
│   ├── prisma/
│   ├── src/
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── socket.io/
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
