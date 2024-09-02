import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components";
import { AboutPage, HomePage, JoinUsPage } from "./pages";

// A router built with objects.
export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true, // The index attribute sets the default child route to be display together with the parent route.
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "join-us",
        element: <JoinUsPage />,
      },
    ],
  },
]);

// A router built with JSX elements. This is really just syntax sugar for a jsx fanatic.
export const routerWithJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="join-us" element={<JoinUsPage />} />
    </Route>
  )
);
