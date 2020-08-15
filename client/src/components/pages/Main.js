import React from "react";
import CategoryCard from "../CategoryCard";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function Main() {
  return (
  <Container fixed>
    <Grid container spacing={2}>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </Grid>
  </Container>
  );
}

export default Main;
