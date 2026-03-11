import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CastPage from "./pages/CastPage";
import ArchivePage from "./pages/ArchivePage";

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/cast",
    element: <CastPage />,
  },
  {
    path: "/archive",
    element: <ArchivePage />,
  }
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
