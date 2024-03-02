import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateUser from "./pages/CreateUser.jsx";
import CreateProject from "./pages/CreateProject.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";
import "./styles/global.css"
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import App from "./app";
import AuthPage from "./pages/AuthPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/projects/:id", element: <ProjectPage /> },
      { path: "/create-user", element: <CreateUser /> },
      { path: "/create-project", element: <CreateProject /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/errorpage", element: <ErrorPage /> },
      { path: "/authpage", element: <AuthPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* Here we wrap our app in the router provider so they render */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);