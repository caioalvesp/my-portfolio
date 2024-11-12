// src/pages/experience.tsx
import { Card, Container, Typography, List, ListItem } from '@mui/material';
import { NextPage } from 'next';
import styles from './experience.module.css';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location_city: string;
}

const experiences: ExperienceItem[] = [
  {
    role: 'Desenvolvedor Frontend',
    company: 'Escola de Guerra Naval',
    duration: '04/2023 - 10/2024',
    location_city: 'Rio de Janeiro'
  },
  {
    role: 'Web Designer',
    company: 'Instituto Infnet',
    duration: '11/2021 - 02/2023',
    location_city: 'Rio de Janeiro'
  }
];

const Experience: NextPage = () => (
  <Container sx={{ paddingTop: 8 }} className={styles.experience}>
    <Typography variant="h4" gutterBottom color="white">
      Experiência
    </Typography>
    <List>
      {experiences.map((exp, index) => (
        <ListItem color="white" key={index}>
          <Card>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              inventore voluptatum quasi iusto repellendus expedita ut
              reiciendis corrupti ducimus sint totam, praesentium aut impedit
              sed recusandae aspernatur, eligendi, deleniti magnam!
            </p>
          </Card>
        </ListItem>
      ))}
    </List>
  </Container>
);

export default Experience;
