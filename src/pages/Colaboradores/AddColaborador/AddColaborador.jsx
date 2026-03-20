import Loader from "../../../components/Loader/Loader";
import useColaboradores from "../../../hooks/useColaboradores/useColaboradores";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  Fade,
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

export default function AddColaborador() {
  const { addColaboradorMutation } = useColaboradores();

  const [form, setForm] = useState({
    nome: "",
    cargo: "",
    dataAdmissao: "",
    setor: "",
    salario: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Limpa o erro do campo quando o usuário começa a digitar
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
        nome: "",
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
      name: "nome",
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
      placeholder: "",
      InputLabelProps: { shrink: true },
    },
    {
      name: "setor",
      label: "Setor",
      icon: Business,
      required: false,
      placeholder: "Ex: Tecnologia da Informação",
    },
    {
      name: "salario",
      label: "Salário",
      icon: AttachMoney,
      required: true,
      placeholder: "Ex: R$ 5.000,00",
    },
  ];

  return addColaboradorMutation.isPending ? (
    <Loader />
  ) : (
    <Fade in timeout={500}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 200px)",
          p: 3,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            maxWidth: "520px",
            width: "100%",
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
            boxShadow: "0 20px 35px -12px rgba(0,0,0,0.1)",
            border: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          {/* Header */}
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "16px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                boxShadow: "0 10px 20px -8px rgba(102,126,234,0.3)",
              }}
            >
              <PersonAdd sx={{ fontSize: 32, color: "white" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
              }}
            >
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
                      <field.icon
                        sx={{
                          color: errors[field.name]
                            ? "error.main"
                            : "text.secondary",
                          fontSize: 20,
                        }}
                      />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2,
                    "&:hover": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#667eea",
                      },
                    },
                  },
                }}
                sx={{
                  mb: 2.5,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                  },
                }}
              />
            ))}

            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={addColaboradorMutation.isPending}
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: 2,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                boxShadow: "0 8px 16px -6px rgba(102,126,234,0.4)",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 20px -8px rgba(102,126,234,0.5)",
                  background:
                    "linear-gradient(135deg, #5a67d8 0%, #6b46a0 100%)",
                },
                "&:active": {
                  transform: "translateY(0)",
                },
              }}
            >
              {addColaboradorMutation.isPending
                ? "Cadastrando..."
                : "Cadastrar Colaborador"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Fade>
  );
}
