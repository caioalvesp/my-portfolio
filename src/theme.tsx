// src/theme.ts
import { createTheme } from '@mui/material/styles';

// Defina o tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#143C8C' // Exemplo de cor primária
    },
    secondary: {
      main: '#103173' // Exemplo de cor secundária
    },
    background: {
      default: '#071A40' // Cor de fundo principal
    }
  },
  typography: {
    fontFamily: "'Roboto', sans-serif" // Fonte padrão
  }
});

export default theme;
