import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import AboutPage from "./pages/AboutPage";
import CastPage from "./pages/CastPage";
import ArchivePage from "./pages/ArchivePage";
import ComicPage from "./pages/ComicPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      loader: () => redirect("/comic/latest"),
      element: <ComicPage />,
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
      loader: () => fetch("/api/chapters").then((response) => response.json()),
      element: <ArchivePage />,
    },
    {
      path: "/comic",
      element: <ComicPage />,
      children: [
        {
          index: true,
          loader: () => redirect("/comic/latest"),
        },
        { path: "first" },
        { path: "latest" },
        { path: ":chapter/:page" },
        { path: "*", loader: () => redirect("/comic/latest") },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    }

  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
