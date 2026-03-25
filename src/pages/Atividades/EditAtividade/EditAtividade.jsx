import Loader from '../../../components/Loader/Loader';
import useColaboradores from '../../../hooks/useColaboradores/useColaboradores';
import useAtividades from '../../../hooks/useAtividades/useAtividades';
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import Alerts from '../../../components/Alerts/Alerts/Alerts';
import AtividadeSchema from '../../../schemas/AtividadeSchema';

import { textFieldStyles, inputStyles, iconStyles, selectStyles } from './EditAtividade.styles';
import { headerContainer, headerIconBox, titleStyles, buttonStyles } from '../../../styles';
import ContainerInterno from '../../../components/ContainerInterno/ContainerInterno';
import { useParams } from 'react-router-dom';

export default function EditAtividade() {
  const { id } = useParams();

  const { colaboradores, isLoadingColaboradores } = useColaboradores({ getEnabled: true });

  const {
    atividade,
    isLoadingAtividade,
    updateAtividadeMutation,
    openAlertSuccessAtividade,
    openAlertErrorAtividade,
    errorMessageAtividade,
    closeAlerts,
  } = useAtividades({ id: id });
  console.log('ID', id);

  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    status: '',
    responsavel: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const validatedForm = {
        ...form,
        responsavel: form.responsavel === '' ? null : { id: form.responsavel },
      };
      await AtividadeSchema.validate(validatedForm, { abortEarly: false });
      updateAtividadeMutation.mutate(validatedForm);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const formatted = {};
        err.inner.forEach((e) => (formatted[e.path] = e.message));
        setErrors(formatted);
      }
    }
  };

  const fields = [
    {
      name: 'titulo',
      label: 'Titulo',
      icon: PersonAdd,
      required: true,
      placeholder: 'Ex: Desenvolver API',
      descricao: false,
      disabled: true,
    },
    {
      name: 'descricao',
      label: 'Descrição',
      icon: DescriptionIcon,
      required: true,
      placeholder: 'Ex: Desenvolver API utilizando Spring Boot',
      descricao: true,
      disabled: true,
    },
  ];

  const selectOptions = [
    { value: 'PENDENTE', label: 'Pendente' },
    { value: 'EM_ANDAMENTO', label: 'Em andamento' },
    { value: 'FINALIZADA', label: 'Finalizada' },
  ];

  useEffect(() => {
    if (atividade) {
      setForm({
        titulo: atividade.titulo || '',
        descricao: atividade.descricao || '',
        status: atividade.status || 'PENDENTE',
        responsavel: atividade.responsavel ? atividade.responsavel.id : '',
      });
    }
  }, [atividade]);

  return (
    <ContainerInterno>
      {isLoadingAtividade || isLoadingColaboradores ? (
        <Loader />
      ) : (
        <>
          {/* Header */}
          <Box sx={headerContainer}>
            <Box sx={headerIconBox}>
              <AssignmentIcon sx={{ fontSize: 32, color: 'white' }} />
            </Box>

            <Typography variant="h4" sx={titleStyles}>
              Adicionar Atividade
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Preencha as informações abaixo para cadastrar uma nova atividade.
            </Typography>
          </Box>

          {/* Form */}
          <Box component="form" onSubmit={onSubmit}>
            {fields.map((field) => (
              <TextField
                key={field.name}
                fullWidth
                name={field.name}
                label={field.required ? `${field.label} *` : field.label}
                value={form[field.name]}
                onChange={handleChange}
                error={Boolean(errors[field.name])}
                helperText={errors[field.name]}
                type={field.type || 'text'}
                multiline={field.descricao}
                rows={field.descricao ? 4 : 1}
                placeholder={field.placeholder}
                disabled={field.disabled}
                InputLabelProps={field.InputLabelProps || {}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <field.icon sx={iconStyles(errors[field.name])} />
                    </InputAdornment>
                  ),
                  inputComponent: field.inputComponent || undefined,
                  sx: inputStyles,
                }}
                sx={textFieldStyles(field.descricao)}
              />
            ))}

            {colaboradores && colaboradores.length > 0 && (
              <>
                <InputLabel id="responsavel-label">Responsavel:</InputLabel>
                <Select
                  name="responsavel"
                  labelId="responsavel-label"
                  value={form.responsavel}
                  onChange={handleChange}
                  fullWidth
                  displayEmpty
                  sx={selectStyles}
                >
                  <MenuItem value={''}>Nenhum</MenuItem>
                  {colaboradores.map((colaborador) => (
                    <MenuItem key={colaborador.id} value={colaborador.id}>
                      {colaborador.nomeCompleto}
                    </MenuItem>
                  ))}
                </Select>
              </>
            )}
            <InputLabel id="status-label">Status:</InputLabel>
            <Select
              name="status"
              labelId="status-label"
              value={form.status}
              onChange={handleChange}
              fullWidth
              displayEmpty
              sx={selectStyles}
            >
              {selectOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>

            <Button fullWidth type="submit" variant="contained" sx={buttonStyles}>
              {isLoadingColaboradores ? 'Cadastrando...' : 'Cadastrar Atividade'}
            </Button>
          </Box>
        </>
      )}
      <Alerts
        openAlertSuccess={openAlertSuccessAtividade}
        openAlertError={openAlertErrorAtividade}
        closeAlerts={closeAlerts}
        messageError={errorMessageAtividade}
        messageSuccess={'Atividade adicionada com sucesso!'}
      />
    </ContainerInterno>
  );
}
