// src/pages/formation.tsx
import { Container, Typography, List, ListItem, Divider } from '@mui/material';
import { NextPage } from 'next';

interface FormationItem {
  course: string;
  institution: string;
  year: string;
}

const academicFormation: FormationItem[] = [
  {
    course: 'Bacharelado em Ciência da Computação',
    institution: 'Universidade ABC',
    year: '2018-2022'
  }
];

const freeCourses: FormationItem[] = [
  {
    course: 'React',
    institution: 'Instituto XYZ',
    year: '2023'
  }
];

const Formation: NextPage = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Minha Formação
    </Typography>

    {/* Educação Acadêmica */}
    <Typography variant="h5" gutterBottom>
      Educação Acadêmica
    </Typography>
    <List>
      {academicFormation.map((item, index) => (
        <ListItem key={index}>
          <Typography variant="h6">
            {item.course} - {item.institution} ({item.year})
          </Typography>
        </ListItem>
      ))}
    </List>

    <Divider sx={{ marginY: 2 }} />

    {/* Cursos Livres */}
    <Typography variant="h5" gutterBottom>
      Cursos Livres
    </Typography>
    <List>
      {freeCourses.map((item, index) => (
        <ListItem key={index}>
          <Typography variant="h6">
            {item.course} - {item.institution} ({item.year})
          </Typography>
        </ListItem>
      ))}
    </List>
  </Container>
);

export default Formation;
