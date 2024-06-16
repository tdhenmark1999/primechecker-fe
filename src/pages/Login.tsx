import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';
import axios from '../utils/axiosConfig';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', { email, password });
      console.log('API Response:', response.data);
      if (response.data.status === 'success') {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('token', response.data.token);
        navigate('/');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Login Error:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ maxWidth: 500, width: '100%', padding:'15px 10px 10px' }}>
      <CardContent>
          <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
              Login
            </Typography>
            {error && (
              <Typography color="error" gutterBottom>
                {error}
              </Typography>
            )}
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
              Login
            </Button>
            <Button variant="text" color="primary" fullWidth onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
