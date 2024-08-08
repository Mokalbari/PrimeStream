import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.tsx"
import "./index.css"
import fetchLocalApi from "./components/functions/fetchLocapApi.tsx"
import Home from "./pages/Home.tsx"
import Movies from "./pages/Movies.tsx"
import TVSeries from "./pages/TVSeries.tsx"
import Bookmarked from "./pages/Bookmarked.tsx"
import Query from "./pages/Query.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetchLocalApi("https://main--primestream-server.netlify.app/"),
      },
      {
        path: "/movies",
        element: <Movies />,
        loader: () =>
          fetchLocalApi("https://main--primestream-server.netlify.app/movies"),
      },
      {
        path: "/tv-series",
        element: <TVSeries />,
        loader: () =>
          fetchLocalApi(
            "https://main--primestream-server.netlify.app/tvseries",
          ),
      },
      {
        path: "/bookmarked",
        element: <Bookmarked />,
        loader: () =>
          fetchLocalApi("https://main--primestream-server.netlify.app/"),
      },
      {
        path: "/query/:name",
        element: <Query />,
        loader: ({ params }) =>
          fetchLocalApi(
            `https://main--primestream-server.netlify.app/query/${params.name}`,
          ),
      },
    ],
  },
])

// biome-ignore lint: non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
