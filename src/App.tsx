import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import AboutPage from "./pages/AboutPage";
import CastPage from "./pages/CastPage";
import ArchivePage from "./pages/ArchivePage";
import ComicPage from "./pages/ComicPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/comic/latest" replace />,
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
    },
    {
      path: "/comic",
      children: [
        {
          path: "/comic/first",
          loader: () => fetch("/api/first").then((response) => response.json()),
          element: <ComicPage />,
        },
        {
          path: "/comic/latest",
          loader: () => fetch("/api/latest").then((response) => response.json()),
          element: <ComicPage />,
        },
        {
          path: "/comic/:chapter/:page",
          loader: ({ params }) => fetch(`/api/${params.chapter}/${params.page}`).then((response) => response.json()),
          element: <ComicPage />,
        },
      ],
    }

  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
