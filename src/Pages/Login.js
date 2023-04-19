import React, { useState, useContext } from 'react';
import { Context } from '../ContextStore';
import { loginUser } from '../services/userData';
import { Link as RouterLink } from 'react-router-dom';
import SimpleSider from '../components/Siders/SimpleSider';
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Alert,
  AlertTitle,
  Card,
  CardContent,
  Typography,
  Container,
  Link,
} from '@mui/material';

function Login({ history }) {
  const [loading, setLoading] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { setUserData } = useContext(Context);

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    loginUser(user)
      .then((res) => {
        if (!res.error) {
          setUserData(res.user);
          history.push('/');
        } else {
          setLoading(false);
          setError(res.error.message);
          setAlertShow(true);
        }
      })
      .catch((err) => console.error('error from login: ', err));
  };

  return (
    <>
      <SimpleSider />
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
        >
          <Card sx={{ minWidth: 350, mt: 5 }}>
            <CardContent>
              <Box textAlign="center">
                <Typography variant="h4" component="h1" gutterBottom>
                  Sign In
                </Typography>
                {alertShow && (
                  <Alert severity="error" onClose={() => setAlertShow(false)} sx={{ mb: 2 }}>
                    <AlertTitle>Error</AlertTitle>
                    {error}
                  </Alert>
                )}
                <form onSubmit={handleSubmitLogin}>
                  <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    onChange={handleChanges}
                    required
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    onChange={handleChanges}
                    required
                    sx={{ mb: 2 }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    disabled={loading}
                    sx={{ mb: 2 }}
                  >
                    {loading ? <CircularProgress size={24} /> : 'Sign In'}
                  </Button>
                </form>
                <Typography variant="body1">
                  Don't have an account?{' '}
                  <Link component={RouterLink} to="/auth/register">
                    Sign Up
                  </Link>
                  !
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default Login;