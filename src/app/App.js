import React from "react"
import routes from "./router"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(routes)

export default function App() {
  return <RouterProvider router={router} />
}
