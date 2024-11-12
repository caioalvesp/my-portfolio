// src/components/Header.tsx
import { AppBar, Toolbar, Button } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Button color="inherit" component={Link} href="/">
        Sobre Mim
      </Button>
      <Button color="inherit" component={Link} href="/experience">
        Experiência
      </Button>
      <Button color="inherit" component={Link} href="/projects">
        Projetos
      </Button>
      <Button color="inherit" component={Link} href="/formation">
        Formação
      </Button>
      <Button color="inherit" component={Link} href="/contact">
        Contato
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
