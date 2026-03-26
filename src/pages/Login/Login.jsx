import { useState } from 'react';
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
} from '@mui/material';
import { Login as LoginIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {
  container,
  paper,
  textFieldStyles,
  headerIconBox,
  forgotLink,
  registerContainer,
  registerLink,
} from './Login.styles';
import { headerContainer, titleStyles, buttonStyles } from '../../styles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import Alerts from '../../components/Alerts/Alerts/Alerts';
export default function Login() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: '',
    senha: '',
  });
  const [openAlertError, setOpenAlertError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const closeAlert = () => {
    setOpenAlertError(false);
  };

  async function register() {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.senha);

      console.log('Usuário criado:', userCredential.user);
    } catch (error) {
      console.error('Erro:', error.message);
      setErrorMessage(error.message || 'Erro ao criar usuário');
      setOpenAlertError(true);
    }
  }

  async function login() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, form.email, form.senha);

      console.log('Logado:', userCredential.user);
    } catch (error) {
      console.error('Erro:', error.message);
      setErrorMessage(error.message || 'Erro ao fazer login');
      openAlertError(true);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await login();
      navigate('/atividades');
    } catch (error) {
      console.error('Erro: ', error.message);
    }
  };

  return (
    <Box sx={container}>
      <Paper elevation={0} sx={paper}>
        <Box sx={headerContainer}>
          <Box sx={headerIconBox}>
            <LoginIcon sx={{ fontSize: 32, color: 'white' }} />
          </Box>

          {isRegister ? (
            <Typography variant="h4" sx={titleStyles}>
              Cadastrar
            </Typography>
          ) : (
            <Typography variant="h4" sx={titleStyles}>
              Bem-vindo
            </Typography>
          )}

          {isRegister ? (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Se cadastre para acessar a aplicação
            </Typography>
          ) : (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Faça login para acessar sua conta
            </Typography>
          )}
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
              type={showPassword ? 'text' : 'password'}
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

          {isRegister ? (
            <Button
              fullWidth
              type="button"
              onClick={() => register()}
              variant="contained"
              sx={buttonStyles}
            >
              Cadastrar
            </Button>
          ) : (
            <Button fullWidth type="submit" variant="contained" sx={buttonStyles}>
              Entrar
            </Button>
          )}

          <Box sx={registerContainer}>
            <Typography variant="body2" color="text.secondary">
              Não tem uma conta?{' '}
              <button type="button" style={registerLink} onClick={() => setIsRegister(!isRegister)}>
                Cadastre-se
              </button>
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Alerts
        openAlertError={openAlertError}
        closeAlerts={closeAlert}
        messageError={errorMessage}
        duration={4500}
      />
    </Box>
  );
}
