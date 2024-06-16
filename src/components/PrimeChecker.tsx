import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from '../utils/axiosConfig';

const PrimeChecker: React.FC = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const checkPrime = async () => {
    const email = localStorage.getItem('userEmail');
    if (!email) {
      setResult('No email found. Please log in.');
      return;
    }

    try {
      const response = await axios.post('/check_prime', { number, email });
      if (response.data.status === 'success') {
        setResult(response.data.message);
      } else {
        setResult(response.data.message);
      }
    } catch (error) {
      setResult('An error occurred.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '3rem' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Prime Number Checker
      </Typography>
      <TextField
        label="Enter a number"
        fullWidth
        margin="normal"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={checkPrime}>
        Check
      </Button>
      {result && (
        <Typography variant="h6" component="p" gutterBottom>
          {result}
        </Typography>
      )}
    </Container>
  );
};

export default PrimeChecker;
