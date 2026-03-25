import { useState, useEffect, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import AtividadesService from '../../services/Atividades/AtividadesService';

export default function useAtividades(params) {
  const getEnabled = params?.getEnabled ?? false;
  const service = AtividadesService;
  const [openAlertErrorAtividade, setOpenAlertErrorAtividade] = useState(false);
  const [openAlertSuccessAtividade, setOpenAlertSuccessAtividade] = useState(false);
  const [errorMessageAtividade, setErrorMessageAtividade] = useState('');

  const queryClient = useQueryClient();

  const closeAlerts = useCallback(() => {
    setOpenAlertErrorAtividade(false);
    setOpenAlertSuccessAtividade(false);
  }, []);

  const {
    data: atividades,
    isLoading: isLoadingAtividades,
    error: errorAtividades,
  } = useQuery({
    queryKey: ['atividades'],
    queryFn: service.getAtividades,
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: !!getEnabled,
  });

  const { data: atividade, isLoading: isLoadingAtividade } = useQuery({
    queryKey: ['atividade'],
    queryFn: () => service.getAtividade(params.id),
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: !!params.id,
  });

  const addAtividadeMutation = useMutation({
    mutationFn: (atividade) => service.addAtividade(atividade),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['atividades'] });
      setOpenAlertSuccessAtividade(true);
    },
    onError: (error) => {
      setErrorMessageAtividade(error.response?.data?.messages || 'Erro ao adicionar atividade');
      setOpenAlertErrorAtividade(true);
    },
  });

  const updateAtividadeMutation = useMutation({
    mutationFn: (atividade) => service.updateAtividade(params.id, atividade),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['atividades'] });
      setOpenAlertSuccessAtividade(true);
    },
    onError: (error) => {
      setErrorMessageAtividade(error.response?.data?.messages || 'Erro ao atualizar atividade');
      setOpenAlertErrorAtividade(true);
    },
  });

  useEffect(() => {
    if (getEnabled && errorAtividades) {
      setErrorMessageAtividade('Erro ao carregar atividades');
      setOpenAlertErrorAtividade(true);
    }
  }, [errorAtividades, getEnabled]);

  return {
    atividades,
    isLoadingAtividades,
    errorMessageAtividade,
    openAlertErrorAtividade,
    openAlertSuccessAtividade,
    addAtividadeMutation,
    updateAtividadeMutation,
    atividade,
    isLoadingAtividade,
    closeAlerts,
  };
}
