// src/pages/index.tsx
import { Container, Grid, Typography, Box } from '@mui/material';
import Image from 'next/image'; // Next.js Image component

const Home = () => {
  return (
    <Container sx={{ paddingTop: 8 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          {/* Foto */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src="/assets/img/perfil.jpeg" // Substitua com o caminho correto da sua foto
              alt="Sua Foto"
              width={300}
              height={300}
              style={{ borderRadius: '50%' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Texto sobre você */}
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
            Olá! Eu sou o Caio!
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2, color: 'white' }}>
            Sou um desenvolvedor apaixonado por tecnologia, com experiência em
            front-end e com um forte foco em entregar soluções inovadoras e
            eficientes. Ao longo da minha carreira, trabalhei com diversas
            tecnologias como React, Next.js, HTML, CSS, JavaScript e Node.js,
            sempre buscando evoluir e enfrentar novos desafios. Com uma
            abordagem colaborativa, gosto de trabalhar em equipe e acredito que
            a troca constante de ideias é fundamental para a criação de soluções
            de impacto. Atualmente, estou em transição para me especializar como
            desenvolvedor full-stack, com foco em C#, bancos de dados, nuvem e
            conteinerização.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
