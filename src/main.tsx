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
        loader: () => fetchLocalApi("http://localhost:4903/"),
      },
      {
        path: "/movies",
        element: <Movies />,
        loader: () => fetchLocalApi("http://localhost:4903/movies"),
      },
      {
        path: "/tv-series",
        element: <TVSeries />,
        loader: () => fetchLocalApi("http://localhost:4903/tvseries"),
      },
      {
        path: "/bookmarked",
        element: <Bookmarked />,
        loader: () => fetchLocalApi("http://localhost:4903/"),
      },
      {
        path: "/query/:name",
        element: <Query />,
        loader: ({ params }) =>
          fetchLocalApi(`http://localhost:4903/query/${params.name}`),
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
