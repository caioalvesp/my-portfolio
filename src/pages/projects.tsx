// src/pages/projects.tsx
import { Container, Typography, Grid, Paper } from '@mui/material';
import { NextPage } from 'next';

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  { title: 'Projeto 1', description: 'Descrição do projeto 1' },
  { title: 'Projeto 2', description: 'Descrição do projeto 2' }
];

const Projects: NextPage = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Projetos
    </Typography>
    <Grid container spacing={2}>
      {projects.map((project, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">{project.title}</Typography>
            <Typography>{project.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
