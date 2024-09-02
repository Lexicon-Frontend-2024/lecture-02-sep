import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components";

// A router built with objects.
export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
]);

// A router built with JSX elements. This is really just syntax sugar for a jsx fanatic.
export const routerWithJSX = createBrowserRouter(
  createRoutesFromElements(<Route element={<App />} path="/"></Route>)
);
