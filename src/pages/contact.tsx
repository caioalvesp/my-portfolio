// src/pages/contact.tsx
import { useState, FormEvent } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert
} from '@mui/material';
import { NextPage } from 'next';

const Contact: NextPage = () => {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Mensagem enviada com sucesso!');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contato
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField label="Nome" variant="outlined" required />
        <TextField label="Email" type="email" variant="outlined" required />
        <TextField
          label="Mensagem"
          multiline
          rows={4}
          variant="outlined"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </Box>
      {status && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {status}
        </Alert>
      )}
    </Container>
  );
};

export default Contact;
