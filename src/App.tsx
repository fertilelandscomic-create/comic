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
      children: [
        {
          path: "/comic/first",
          element: <ComicPage />,
        },
        {
          path: "/comic/latest",
          element: <ComicPage />,
        },
        {
          path: "/comic/:chapter/:page",
          element: <ComicPage />,
        },
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
