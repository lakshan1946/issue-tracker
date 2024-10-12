# Issue Tracker

An issue tracker application built with **Next.js** and **MySQL** that allows users to manage and track issues efficiently. The application features Gmail login, a dashboard for viewing issues, and functionalities for adding, editing, and assigning issues.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Photos](#photos)

## Features

- **Gmail Login**: Secure authentication using Google OAuth.
- **Dashboard**: View all issues in a user-friendly interface.
- **Add New Issues**: Easily create new issues with detailed descriptions.
- **Edit Issues**: Update existing issues to reflect changes or progress.
- **Assign Issues**: Assign issues to team members for better task management.

## Technologies

- **Next.js**: A React framework for server-rendered applications.
- **MySQL**: A relational database management system for storing data.
- **Node.js**: JavaScript runtime for server-side operations.
- **Express.js**: Web framework for Node.js for building APIs.
- **Prisma**: ORM for database access.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Usage

- Log in using your Gmail account.
- Access the dashboard to view existing issues.
- Use the "Add Issue" button to create new issues.
- Click on any issue to edit or assign it to a team member.

## API Endpoints

| Method | Endpoint                   | Description                           |
|--------|----------------------------|---------------------------------------|
| POST   | `/api/auth/login`          | Log in using Gmail                    |
| GET    | `/api/issues`              | Get all issues                        |
| POST   | `/api/issues/new`          | Create a new issue                    |
| PUT    | `/api/issues/:id`          | Update an existing issue              |
| DELETE | `/api/issues/:id`          | Delete an issue                       |
| POST   | `/api/issues/:id/assign`   | Assign an issue to a user             |


## Photos
![image](https://github.com/user-attachments/assets/be9e2336-eebd-4ef9-bc99-da909d98ac4a)
![image](https://github.com/user-attachments/assets/df0b50ce-0927-44b9-b556-1f04472b16d6)
![image](https://github.com/user-attachments/assets/9cb3b437-15de-4647-b691-7f91b990d31c)



