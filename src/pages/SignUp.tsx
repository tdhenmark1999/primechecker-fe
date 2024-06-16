import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent, CircularProgress } from '@mui/material';
import axios from '../utils/axiosConfig';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('/signup', { email, password });
      if (response.status === 200) {
        navigate('/login');
      } else {
        setError('Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('Sign Up Error:', error);
      setError('Sign up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ maxWidth: 500, width: '100%', padding:'15px 10px 10px' }}>
        <CardContent>
          <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
              Sign Up
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
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSignUp}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Sign Up'}
            </Button>
            <Button variant="text" color="primary" fullWidth onClick={() => navigate('/login')}>
              Login
            </Button>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
