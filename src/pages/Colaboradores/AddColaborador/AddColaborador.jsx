import Loader from "../../../components/Loader/Loader";
import useColaboradores from "../../../hooks/useColaboradores/useColaboradores";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import {
  PersonAdd,
  Work,
  CalendarToday,
  Business,
  AttachMoney,
} from "@mui/icons-material";
import { useState } from "react";
import * as Yup from "yup";
import ColaboradorSchema from "../../../schemas/ColaboradorSchema";
import Alerts from "../../../components/Alerts/Alerts/Alerts";
import MaskInput from "../../../components/MaskInput/MaskInput";

import {
  headerContainer,
  headerIconBox,
  titleStyles,
  textFieldStyles,
  inputStyles,
  buttonStyles,
  iconStyles,
  salaryAdornment,
} from "./AddColaborador.styles";
import ContainerInterno from "../../../components/ContainerInterno/ContainerInterno";

export default function AddColaborador() {
  const {
    addColaboradorMutation,
    openAlertError,
    openAlertSuccess,
    errorMessage,
    closeAlerts,
  } = useColaboradores();

  const [form, setForm] = useState({
    nomeCompleto: "",
    cargo: "",
    dataAdmissao: "",
    setor: "",
    salario: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      await ColaboradorSchema.validate(form, { abortEarly: false });
      await addColaboradorMutation.mutateAsync(form);

      setForm({
        nomeCompleto: "",
        cargo: "",
        dataAdmissao: "",
        setor: "",
        salario: "",
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
      name: "nomeCompleto",
      label: "Nome completo",
      icon: PersonAdd,
      required: true,
      placeholder: "Ex: João Silva",
    },
    {
      name: "cargo",
      label: "Cargo",
      icon: Work,
      required: true,
      placeholder: "Ex: Desenvolvedor Front-end",
    },
    {
      name: "dataAdmissao",
      label: "Data de Admissão",
      icon: CalendarToday,
      required: true,
      type: "date",
      InputLabelProps: { shrink: true },
    },
    {
      name: "setor",
      label: "Setor",
      icon: Business,
      required: false,
      placeholder: "Ex: TI",
    },
    {
      name: "salario",
      label: "Salário",
      icon: AttachMoney,
      required: true,
      placeholder: "Ex: 5.000,00",
      inputComponent: MaskInput,
    },
  ];

  return addColaboradorMutation.isPending ? (
    <Loader />
  ) : (
    <>
      <ContainerInterno>
        {/* Header */}
        <Box sx={headerContainer}>
          <Box sx={headerIconBox}>
            <PersonAdd sx={{ fontSize: 32, color: "white" }} />
          </Box>

          <Typography variant="h4" sx={titleStyles}>
            Adicionar Colaborador
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Preencha as informações abaixo para cadastrar um novo colaborador
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
              type={field.type || "text"}
              placeholder={field.placeholder}
              InputLabelProps={field.InputLabelProps || {}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {field.name === "salario" ? (
                      <Typography sx={salaryAdornment(errors[field.name])}>
                        R$
                      </Typography>
                    ) : (
                      <field.icon sx={iconStyles(errors[field.name])} />
                    )}
                  </InputAdornment>
                ),
                inputComponent: field.inputComponent || undefined,
                sx: inputStyles,
              }}
              sx={textFieldStyles}
            />
          ))}

          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={addColaboradorMutation.isPending}
            sx={buttonStyles}
          >
            {addColaboradorMutation.isPending
              ? "Cadastrando..."
              : "Cadastrar Colaborador"}
          </Button>
        </Box>
      </ContainerInterno>

      <Alerts
        openAlertSuccess={openAlertSuccess}
        openAlertError={openAlertError}
        closeAlerts={closeAlerts}
        messageError={errorMessage}
        messageSuccess={"Colaborador adicionado com sucesso!"}
      />
    </>
  );
}
