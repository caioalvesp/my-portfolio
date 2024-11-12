// src/components/Footer.tsx
import { Box, Link } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <Box
      className={styles.footer}
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: '#030F26',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center'
      }}
    >
      <Box>
        <Link
          href="https://github.com/caioalvesp"
          target="_blank"
          sx={{ color: '#fff', margin: '0 10px' }}
        >
          <GitHub fontSize="large" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/caioalvesp/"
          target="_blank"
          sx={{ color: '#fff', margin: '0 10px' }}
        >
          <LinkedIn fontSize="large" />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
