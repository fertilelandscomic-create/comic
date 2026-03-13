import { createBrowserRouter, Navigate, redirect, RouterProvider } from "react-router";
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
          path: ":id",
          loader: ({ params }) => {
            if (Number(params.id) <= 1) return redirect("/comic/first");
            else if (params.id !== 'first' && params.id !== 'latest' && (isNaN(Number(params.id)) || Number(params.id) >= 2)) return redirect("/comic/latest");
          },
          element: <ComicPage />
        },
      ],
    }

  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
