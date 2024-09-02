import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export function App() {
  return (
    <>
      {/* Outlet is a placeholder for the children routes of the component (parent route). */}
      <Outlet />
      <Footer />
    </>
  );
}
