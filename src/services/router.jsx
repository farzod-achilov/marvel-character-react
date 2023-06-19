import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Characters from "../pages/characters/Characters";
import Character from "../pages/characters/Character";
import Comicses from "../pages/comics/Comicses";

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
      {
        path: "/comics",
        element: <Comicses />,
      },
    ],
  },
]);

export default router;
