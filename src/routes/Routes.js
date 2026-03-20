import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddColaborador from "../pages/Colaboradores/AddColaborador/AddColaborador";
export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/colaboradores/adicionar",
      element: <AddColaborador />,
    },
  ]);
  return <RouterProvider router={router} />;
}
