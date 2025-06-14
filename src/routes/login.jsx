import {Alert, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {signInUser} from "../firebase";
import {startSession} from "../session";

export default function Login() {

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Пожалуйста, введите ваше имя пользователя и пароль.");
      return;
    }

    setError("");

    console.log("Вход...");

    try {
        let loginResponse = await signInUser(email, password);
        startSession(loginResponse.user);
        navigate("/user");
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      }
  }

  return (
    <Container maxWidth="xs" sx={{mt: 2}}>
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Вход
      </Typography>
      {error && <Alert severity="error" sx={{my: 2}}>{error}</Alert>}
      <Box component="form" onSubmit={onSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{mt: 1}}
          fullWidth
        />
        <TextField
          label="Пароль"
          variant="outlined"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{mt: 3}}
          fullWidth
        />
        <Button variant="contained" type="submit" sx={{mt: 3}} fullWidth>Войти</Button>
        <Box sx={{mt: 2}}>
          Нет аккаунта? <Link href="/register">Зарегистрироваться</Link>
        </Box>
      </Box>
    </Container>
  )
}