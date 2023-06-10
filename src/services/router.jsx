import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Characters from "../pages/characters/Characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/characters",
        element: <Characters />,
      },
      {
        path: "/",
        index: true,
        element: <Characters />,
      },
    ],
  },
]);

export default router;
