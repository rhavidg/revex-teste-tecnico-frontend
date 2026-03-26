import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  Paper,
  IconButton,
  InputLabel,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import {
  Login as LoginIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  container,
  paper,
  textFieldStyles,
  headerIconBox,
  forgotLink,
  registerContainer,
  registerLink,
} from "./Login.styles";
import { headerContainer, titleStyles, buttonStyles } from "../../styles";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    navigate("/atividades");
  };

  return (
    <Box sx={container}>
      <Paper elevation={0} sx={paper}>
        <Box sx={headerContainer}>
          <Box sx={headerIconBox}>
            <LoginIcon sx={{ fontSize: 32, color: "white" }} />
          </Box>

          <Typography variant="h4" sx={titleStyles}>
            Bem-vindo
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Faça login para acessar sua conta
          </Typography>
        </Box>

        <Box component="form" onSubmit={onSubmit}>
          <TextField
            fullWidth
            name="email"
            label="E-mail"
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            sx={textFieldStyles}
          />

          <FormControl fullWidth sx={textFieldStyles} variant="outlined">
            <InputLabel htmlFor="senha">Senha</InputLabel>
            <OutlinedInput
              id="senha"
              name="senha"
              type={showPassword ? "text" : "password"}
              value={form.senha}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Senha"
            />
          </FormControl>

          <Box sx={forgotLink}>
            <a>Esqueceu a senha?</a>
          </Box>

          <Button fullWidth type="submit" variant="contained" sx={buttonStyles}>
            Entrar
          </Button>

          <Box sx={registerContainer}>
            <Typography variant="body2" color="text.secondary">
              Não tem uma conta? <a style={registerLink}>Cadastre-se</a>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
