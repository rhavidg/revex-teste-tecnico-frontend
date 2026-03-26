import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddColaborador from "../pages/Colaboradores/AddColaborador/AddColaborador";
import Colaboradores from "../pages/Colaboradores/Colaboradores";
import AddAtividade from "../pages/Atividades/AddAtividade/AddAtividade";
import Atividades from "../pages/Atividades/AddAtividade/Atividades";
import EditAtividade from "../pages/Atividades/EditAtividade/EditAtividade";
import NavLayout from "../components/NavLayout/NavLayout";
import Login from "../pages/Login/Login";
export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      element: <NavLayout />,
      children: [
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
        {
          path: "/atividades/editar/:id",
          element: <EditAtividade />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
