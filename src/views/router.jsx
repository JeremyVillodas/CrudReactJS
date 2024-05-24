import { createBrowserRouter } from "react-router-dom";

import AddCar from "./AddCar/AddCar";
import EditCar from "./EditCar/EditCar";
import ViewCars from "./ViewCars/ViewCars";
import Welcome from "./Welcome/Welcome";
import Home from "./Home/Home";
import ErrorBoundary from "./Error/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/viewcars",
    element: <ViewCars />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/editcar",
    element: <EditCar />,
    errorElement: <ErrorBoundary />,
  },

  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "addcar",
        element: <AddCar />,
        errorElement: <ErrorBoundary />,
      },

      {
        path: "viewcars",
        element: <ViewCars />,
        errorElement: <ErrorBoundary />,
      },

      {
        path: "editcar",
        element: <EditCar />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);
export default router;
