import reactLogo from "./assets/react.svg";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // children: [
      //   {
      //     path: "contact",
      //     element: <Contact />,
      //   },
      //   {
      //     path: "dashboard",
      //     element: <Dashboard />,
      //     loader: ({ request }) =>
      //       fetch("/api/dashboard.json", {
      //         signal: request.signal,
      //       }),
      //   },
      //   {
      //     element: <AuthLayout />,
      //     children: [
      //       {
      //         path: "login",
      //         element: <Login />,
      //         loader: redirectIfUser,
      //       },
      //       {
      //         path: "logout",
      //         action: logoutUser,
      //       },
      //     ],
      //   },
      // ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
