# User Role Management API

Welcome to the **User Role Management API** repository, a secure RESTful API that provides user management and role-based access control (RBAC).

## Table of Contents

- [Project Overview](#project-overview)
- [Functionalities](#functionalities)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Project Overview

The **User Role Management API** project offers a secure backend solution for managing users and their roles. It includes **role-based access control (RBAC)**, allowing different users to have different access levels based on their roles.

## Functionalities

- Role-based access control (RBAC) for different user roles

## Technologies

### Backend

- **Framework**: Node.js, Express.js
- **Database**: PostgreSQL (using Prisma ORM)
- **Role Management**: Custom role management using **Redux Toolkit** and **RTK Query** (for managing APIs)

### Frontend (Example Usage)

- **HTTP Client**: Axios
- **Framework**: React (with **Redux Toolkit** for state management)
- **Database Interaction**: **RTK Query** for managing API calls and **PostgreSQL** for data storage

## Installation

To set up the **User Role Management API** project locally, follow these steps:

### Backend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RIADH-NOURI/prisma-redux-toolkit-prj.git
   cd prisma-redux-toolkit-prj/backend

   2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure the environment variables:**
   Create a `.env` file in the `backend` directory and add the necessary configurations:

   ```plaintext
   PORT=3000
   DATABASE_URL=your_database_url
   ```
   4. **Run the application:**

   ```bash
   npm start
   ```

### Frontend

1. **Navigate to the frontend directory:**

   ```bash
   cd ../client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm run dev
   ```

## Usage

1. **Run the backend server**: Start the backend server using `npm start` in the `backend` directory.
2. **Run the frontend application**: Start the frontend application using `npm run dev` in the `client` directory.
## Or using directly 
 **Run the frontend and backend application in one command via concurrently library**:`npm run dev`

## Contributors

- [RIADH-NOURI](riadhnouri0502@gmail.com)
