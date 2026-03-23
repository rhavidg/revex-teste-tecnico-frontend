import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddColaborador from "../pages/Colaboradores/AddColaborador/AddColaborador";
import Colaboradores from "../pages/Colaboradores/Colaboradores";
export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/colaboradores/adicionar",
      element: <AddColaborador />,
    },
    {
      path: "/colaboradores",
      element: <Colaboradores />,
    },
  ]);
  return <RouterProvider router={router} />;
}
