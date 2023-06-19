import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Characters from "../pages/characters/Characters";
import Character from "../pages/characters/Character";

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
        path: "/characters/:id",
        element: <Character />,
      },
    ],
  },
]);

export default router;
