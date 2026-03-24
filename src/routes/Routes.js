import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddColaborador from "../pages/Colaboradores/AddColaborador/AddColaborador";
import Colaboradores from "../pages/Colaboradores/Colaboradores";
import AddAtividade from "../pages/Atividades/AddAtividade/AddAtividade";
import Atividades from "../pages/Atividades/AddAtividade/Atividades";
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
    {
      path: "/atividades/adicionar",
      element: <AddAtividade />,
    },
    {
      path: "/atividades",
      element: <Atividades />,
    },
  ]);
  return <RouterProvider router={router} />;
}
