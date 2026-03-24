import Loader from '../../../components/Loader/Loader';
import useColaboradores from '../../../hooks/useColaboradores/useColaboradores';
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  Select,
  MenuItem,
} from '@mui/material';
import { PersonAdd, Work } from '@mui/icons-material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useState } from 'react';
import * as Yup from 'yup';
import Alerts from '../../../components/Alerts/Alerts/Alerts';
import AtividadeSchema from '../../../schemas/AtividadeSchema';

import { textFieldStyles, inputStyles, iconStyles } from './AddAtividade.styles';
import { headerContainer, headerIconBox, titleStyles, buttonStyles } from '../../../styles';
import ContainerInterno from '../../../components/ContainerInterno/ContainerInterno';

export default function AddAtividade() {
  const {
    colaboradores,
    isLoadingColaboradores,
    openAlertError,
    openAlertSuccess,
    errorMessage,
    closeAlerts,
  } = useColaboradores();

  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    status: '',
    responsavel: 'Nenhum',
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
      await AtividadeSchema.validate(form, { abortEarly: false });
      //await addColaboradorMutation.mutateAsync(form);

      setForm({
        titulo: '',
        descricao: '',
        status: '',
        responsavel: '',
      });
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
    },
    {
      name: 'descricao',
      label: 'Descrição',
      icon: Work,
      required: true,
      placeholder: 'Ex: Desenvolver API utilizando Spring Boot',
      descricao: true,
    },
  ];

  return isLoadingColaboradores ? (
    <Loader />
  ) : (
    <>
      <ContainerInterno>
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

          {colaboradores.length > 0 && (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={form.responsavel}
              label="Responsavel"
              onChange={handleChange}
            >
              <MenuItem value="Nenhum">Nenhum</MenuItem>
              {colaboradores.map((colaborador) => (
                <MenuItem key={colaborador.id} value={colaborador.id}>
                  {colaborador.nome}
                </MenuItem>
              ))}
            </Select>
          )}

          <Button
            fullWidth
            type="submit"
            variant="contained"
            //disabled={addColaboradorMutation.isPending}
            sx={buttonStyles}
          >
            {isLoadingColaboradores ? 'Cadastrando...' : 'Cadastrar Atividade'}
          </Button>
        </Box>
      </ContainerInterno>

      <Alerts
        openAlertSuccess={openAlertSuccess}
        openAlertError={openAlertError}
        closeAlerts={closeAlerts}
        messageError={errorMessage}
        messageSuccess={'Atividade adicionada com sucesso!'}
      />
    </>
  );
}
