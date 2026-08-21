# Charity Platform 🤝

A Full-Stack web application for fundraising and donations, built using the MERN Stack and Tailwind CSS.

## 🚀 Technologies Used

*   **Frontend:** React.js (Vite), Tailwind CSS v4, React Router, Axios
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB, Mongoose
*   **Security:** JSON Web Token (JWT) for Authentication & Authorization

## ✨ Key Features (Current)

*   **Authentication System:** User Registration and Login with JWT (Roles: Admin, Donor, Organization).
*   **Campaign Management:** RESTful API for creating, reading, and managing fundraising campaigns.
*   **Donation System:** API to process donations and automatically update campaign balances.
*   **Responsive Interface:** Modern design using Tailwind CSS with dynamic navigation based on authentication state.

## 🛠️ How to Run Locally

Make sure you have Node.js and MongoDB installed on your system.

1.  **Clone this repository:**
    ```bash
    git clone [https://github.com/alpiy/charity-platform.git](https://github.com/alpiy/charity-platform.git)
    cd charity-platform
    ```

2.  **Backend Setup:**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory with the following variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```
    Run the server: `npm run dev`

3.  **Frontend Setup:**
    ```bash
    cd ../client
    npm install
    ```
    Run the client: `npm run dev`

The frontend application will run on `http://localhost:5173` and the backend API on `http://localhost:5000`.
