# Issue Tracker

An issue tracker application built with **Next.js** and **MySQL** that allows users to manage and track issues efficiently. The application features Gmail login, a dashboard for viewing issues, and functionalities for adding, editing, and assigning issues.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

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

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/issue-tracker.git
   cd issue-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the MySQL database:
   - Create a new database in MySQL.
   - Update the database configuration in the `.env` file:
     ```env
     DATABASE_URL=mysql://username:password@localhost:3306/database_name
     ```

4. Run migrations (if using Prisma):
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.


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
| POST   | `/api/issues`              | Create a new issue                   |
| PUT    | `/api/issues/:id`          | Update an existing issue              |
| DELETE | `/api/issues/:id`          | Delete an issue                       |
| POST   | `/api/issues/:id/assign`   | Assign an issue to a user            |

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
