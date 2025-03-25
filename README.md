# Backend for Famous Hotels Locations in India

This is the backend for the Famous Hotels Locations in India project. It is built with **Node.js** and **Express** and provides RESTful APIs for user authentication and hotel data.

## 📌 **Tech Stack**

- `Node.js`: JavaScript runtime for server-side programming.
- `Express`: For building RESTful APIs.
- `Mongoose`: For MongoDB interaction.
- `jsonwebtoken`: For authentication using JWT.
- `cookie-parser`: To handle HttpOnly cookies.
- `dotenv`: For environment variables.

## ⚙️ **Installation and Setup**

1. **Clone the Repository**

```bash
git clone <repository-url>
cd syncthreadsassessment
```

2. **Install backend dependencies**

```bash
cd backend
npm install
```

3. **Create a `.env` file in the `backend` directory and add the following environment variables:**

```env
PORT=5001
DB_STRING=<your_mongodb_connection_string>
JWT_SECRET=this_is_my_secret_jwt_token_1
JWT_EXPIRY=7d
```

4. **Start the server**

```bash
npm start
```

## **API Endpoints**

### **Authentication**

- **Signup**

  - **URL:** `/api/signup`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "username": "your_username",
      "email": "your_email",
      "password": "your_password"
    }
    ```

- **Login**

  - **URL:** `/api/login`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "email": "your_email",
      "password": "your_password"
    }
    ```

- **Logout**
  - **URL:** `/api/logout`
  - **Method:** `POST`

### **Protected Routes**

- **Get Dashboard Data**

  - **URL:** `/api/dashboard`
  - **Method:** `GET`
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer <your_jwt_token>"
    }
    ```

- **Get Map Data**

  - **URL:** `/api/map/:id`
  - **Method:** `GET`
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer <your_jwt_token>"
    }
    ```

- **Validate Authentication**
  - **URL:** `/api/auth/validate`
  - **Method:** `GET`
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer <your_jwt_token>"
    }
    ```

## **Project Structure**

```
backend/
  ├── .env
  ├── app.js
  ├── controllers/
  │   ├── auth.controller.js
  │   └── user.controller.js
  ├── middlewares/
  │   └── auth.middleware.js
  ├── model/
  │   └── userModel.js
  ├── routes/
  │   └── userRoutes.js
  ├── utils/
  │   └── dummyData.js
  ├── package.json
  └── server.js
```

## **Dummy Data**

The dummy hotel data is stored in the `backend/utils/dummyData.js` file and is used to provide hotel information for the dashboard and map views.

## **Middleware**

The `auth.middleware.js` file contains the `protect` middleware function, which is used to protect routes that require authentication.

## **Controllers**

- **auth.controller.js:** Handles user signup, login, and logout.
- **user.controller.js:** Provides dashboard and map data.

## **Routes**

The `userRoutes.js` file defines the API routes for authentication and hotel data.

## **Server Configuration**

- **app.js:** Sets up the Express application, middleware, and routes.
- **server.js:** Connects to the MongoDB database and starts the server.

## **Dependencies**

The `package.json` file includes the following dependencies:

```json
{
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.12.2",
    "nodemon": "^3.1.9"
  }
}
```

---

This backend is designed to work with the frontend built with React.js. Make sure to start the backend server before running the frontend application.

# Frontend for Famous Hotels Locations in India

This is the frontend for the Famous Hotels Locations in India project. It is built with **React.js** and **Vite** and provides a user interface for viewing hotel data and user authentication.

## 📌 **Tech Stack**

- `React.js`: JavaScript library for building user interfaces.
- `Vite`: Next-generation frontend tooling.
- `Styled-components`: For styling React components.
- `React Router`: For routing in React applications.
- `Axios`: For making HTTP requests.
- `React-Toastify`: For displaying notifications.
- `Leaflet`: For interactive maps.
- `React-Leaflet`: For integrating Leaflet maps with React.

## ⚙️ **Installation and Setup**

1. **Clone the Repository**

```bash
git clone <repository-url>
cd syncthreadsassessment
```

2. **Install frontend dependencies**

```bash
cd frontend
npm install
```

3. **Start the development server**

```bash
npm run dev
```

## **Project Structure**

```
frontend/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   │   ├── CardDetails.jsx
  │   │   ├── CardMap.jsx
  │   │   ├── Cards.jsx
  │   │   ├── Maps.jsx
  │   │   ├── Markers.jsx
  │   │   ├── Navbar.jsx
  │   │   └── ProtectedRoute.jsx
  │   ├── pages/
  │   │   ├── Dashboard.jsx
  │   │   ├── Home.jsx
  │   │   ├── Login.jsx
  │   │   ├── MapView.jsx
  │   │   └── Signup.jsx
  │   ├── utils/
  │   │   ├── axios.js
  │   │   └── ConvertCurrency.js
  │   ├── App.jsx
  │   ├── index.css
  │   └── main.jsx
  ├── .gitignore
  ├── package.json
  ├── README.md
  └── vite.config.js
```

## **Components**

- **Navbar.jsx:** Navigation bar with links to different pages.
- **ProtectedRoute.jsx:** Component to protect routes that require authentication.
- **Cards.jsx:** Component to display hotel cards.
- **CardDetails.jsx:** Component to display detailed information about a hotel.
- **CardMap.jsx:** Component to display a map with a marker for a specific hotel.
- **Maps.jsx:** Component to display a map with markers for all hotels.
- **Markers.jsx:** Component to display a marker with a popup on the map.

## **Pages**

- **Home.jsx:** Home page with an introduction and link to sign in.
- **Signup.jsx:** Signup page for creating a new user account.
- **Login.jsx:** Login page for existing users.
- **Dashboard.jsx:** Dashboard page displaying a list of hotels and a map.
- **MapView.jsx:** Page displaying detailed information about a specific hotel and its location on a map.

## **Utilities**

- **axios.js:** Axios instance configured with the base URL for the backend API.
- **ConvertCurrency.js:** Utility function to format prices in Indian Rupees.

## **Authentication and Authorization**

The application uses JWT (JSON Web Tokens) for authentication and authorization. The backend issues a JWT upon successful login or signup, which is stored in an HttpOnly cookie. This token is then used to authenticate subsequent requests to protected routes.

### **Protected Routes**

Protected routes are routes that require the user to be authenticated. The `ProtectedRoute.jsx` component is used to protect these routes. It checks if the user is authenticated by making a request to the `/auth/validate` endpoint. If the user is not authenticated, they are redirected to the login page.

Example of a protected route:

```jsx
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route path="" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
```

## **Routing**

The `App.jsx` file sets up the routing for the application using `React Router`. It includes routes for the home page, signup, login, dashboard, and hotel details.

## **API Endpoints**

The frontend communicates with the backend API to perform various operations such as user authentication and fetching hotel data. The base URL for the API is configured in the `axios.js` file.

## **Styling**

The application uses `styled-components` for styling React components. Each component has its own styled components defined within the same file.

## **Notifications**

The application uses `React-Toastify` to display notifications for various actions such as successful login, logout, and error messages.

## **Maps**

The application uses `Leaflet` and `React-Leaflet` to display interactive maps with markers for hotels. The `Maps.jsx` and `CardMap.jsx` components handle the map rendering and marker placement.

---

This frontend is designed to work with the backend built with Node.js and Express. Make sure to start the backend server before running the frontend application.
