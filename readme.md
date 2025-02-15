# Quizo - Quiz Management System

## Project Overview
Quizo is a web-based **Quiz Management System** that allows teachers to create, manage, and view quizzes. It provides a simple authentication system with static credentials and supports CRUD operations for quizzes.

## Features
### Frontend
- **Login Page**
  - Simple login form with hardcoded demo credentials.
  - Validates form inputs before submission.
  - Redirects to the dashboard upon successful login.
- **Dashboard**
  - Displays a list of quizzes created by the teacher.
  - Each quiz has options to edit or delete.
- **Create/Edit Quiz Page**
  - Form for adding or modifying quizzes.
  - Validates that the title and description are not empty.
- **Responsive Design**
  - Built using **React, TypeScript, and Tailwind CSS**.
  - Mobile-friendly layout using Flexbox/Grid.

### Backend
- **Authentication**
  - Simple login system with static credentials.
  - `POST /user/login` endpoint validates credentials.
- **Quiz Management API**
  - `POST /quiz/create-quiz`: Create a new quiz.
  - `GET /quiz/quiz`: Retrieve all quizzes.
  - `PUT /quiz/update-quiz/{id}`: Update a quiz.
  - `DELETE /quiz/delete-quiz/{id}`: Remove a quiz.

### Database
- Uses **MySQL or PostgreSQL** for storing quiz data and user credentials.
- **Users Table**: Stores teacher information (`ID, username, password`).
- **Quizzes Table**: Stores quiz details (`ID, title, description, teacher_id`).

## Installation & Setup
### Prerequisites
- Node.js & npm
- MySQL or PostgreSQL

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure the database in `.env` file:
 
4. Run the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.


## Deployment (Optional)
- **Frontend**: Deploy on **Vercel or Netlify**.
- **Backend**: Deploy on **Render or Heroku**.

## Notes
- The authentication uses **static credentials**, meaning no JWT is required.

## License
This project is for educational purposes and is free to use and modify.

---

Happy Coding! 🚀

