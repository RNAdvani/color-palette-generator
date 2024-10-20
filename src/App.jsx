// src/App.jsx

import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./styles/App.css";
import About from "./pages/About";

// Create a browser router
const router = createBrowserRouter([
  {
    id: "home",
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    id: "about",
    path: "/about",
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    id: "not-found",
    path: "*",
    element: <NotFound />,
  },
]);

/**
 * The main App component that renders the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <div className="App">
      {/* Render toast notifications */}
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
