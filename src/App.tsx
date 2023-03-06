import reactLogo from "./assets/react.svg";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { AddForm, Details } from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // children: [
      //   {
      //     path: "add",
      //     element: <AddForm />,
      //   },
      //   {
      //     path: "detail/:id",
      //     element: <Details />,
      //   },
      // ],
    },
    {
      path: "add",
      element: <AddForm />,
    },
    {
      path: "detail/:id",
      element: <Details />,
    },
  ]);

  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
