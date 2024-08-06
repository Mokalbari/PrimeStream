import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.tsx"
import "./index.css"
import fetchLocalApi from "./components/functions/fetchLocapApi.tsx"
import Home from "./pages/Home.tsx"

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
    ],
  },
])

// biome-ignore lint: non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
