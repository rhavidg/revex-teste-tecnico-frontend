import { useState, useEffect, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ColaboradoresService from "../../services/Colaboradores/ColaboradoresService";

export default function useColaboradores() {
  const service = ColaboradoresService;
  const [openAlertError, setOpenAlertError] = useState(false);
  const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const queryClient = useQueryClient();

  const closeAlerts = useCallback(() => {
    setOpenAlertError(false);
    setOpenAlertSuccess(false);
  }, []);

  const {
    data: colaboradores,
    isLoading: isLoadingColaboradores,
    error: errorColaboradores,
  } = useQuery({
    queryKey: ["colaboradores"],
    queryFn: service.getColaboradores,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const addColaboradorMutation = useMutation({
    mutationFn: (colaborador) => service.addColaborador(colaborador),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["colaboradores"] });
      setOpenAlertSuccess(true);
    },
    onError: (error) => {
      setErrorMessage(
        error.response?.data?.messages || "Erro ao adicionar colaborador",
      );
      setOpenAlertError(true);
    },
  });

  useEffect(() => {
    if (errorColaboradores) {
      setErrorMessage("Erro ao carregar colaboradores");
      setOpenAlertError(true);
    }
  }, [errorColaboradores]);

  return {
    colaboradores,
    isLoadingColaboradores,
    errorMessage,
    openAlertError,
    openAlertSuccess,
    addColaboradorMutation,
    closeAlerts,
  };
}
