Task Manager Full-Stack Application

**Description**
This Task Manager is a full-stack application allowing users to manage their tasks with features to create, update, delete, and filter tasks based on their status (e.g., "To Do," "In Progress," "Done"). The application utilizes a React.js front-end and a Node.js/Express back-end, with Firebase Firestore as the database.

**Technologies**
**Frontend**: React.js, TailwindCSS
**Backend**: Node.js, Express.js
**Database**: Firebase Firestore
**Authentication**: Firebase Authentication (Optional for future implementation)

**Getting Started**
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

**Prerequisites**
Node.js (Download and install from Node.js website)
Firebase account (Sign up at Firebase)

Installation
Clone the Repository
```bash
Copy code
git clone https://github.com/juzer09/pesto-task-manager
cd your-repo-name
```

**Set Up the Backend**
Navigate to the backend directory and install dependencies:

```bash
npm install
```


**Configure your Firebase Firestore database:**

Create a project in Firebase and generate a private key for your service account.
Place your Firebase service account key JSON file in the backend directory.
Update your Firebase project details in the initialization script.
Set Up the Frontend
Navigate back to the root directory and then to the frontend directory. Install dependencies:

```bash
Copy code
cd cd task-manager
npm install
```

Ensure the backend API URL is set correctly in the frontend environment or service file where API requests are made.

Start the Backend Server
From the backend directory:

```bash
Copy code
npm start
```

This will start the Node.js/Express server on localhost:3000.

Start the Frontend Application
Open a new terminal, navigate to the frontend directory, and start the React app:

```bash
Copy code
npm start
```

This will serve the React application on localhost:3000 and may prompt to use another port if 3000 is already in use.

**Usage**
Creating Tasks: Access the task creation form on the homepage to add new tasks, specifying their title, description, and status.
Viewing and Managing Tasks: View all tasks on the homepage, with options to edit their status, update details, or delete them.
Contributing
Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change. Ensure to update tests as appropriate.

**License**
This project is licensed under the MIT License - see the LICENSE.md file for details.
