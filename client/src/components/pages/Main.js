import React from "react";
import CategoryCard from "../CategoryCard";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PieChartCard from "../PieChartContainer";
import Typography from '@material-ui/core/Typography';
import Dropdown from "../Dropdowns";
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Header from "../Header";
import { withAuthorization } from '../Sessions';

function Main() {
  return (
  <Container fixed>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <Box my={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4">Country Select</Typography>
                <Grid container>
                  <Dropdown />
                </Grid>
            </CardContent>
          </Card>
        </Box>
        <Box my={2}>
          <Card variant="outlined">
            <CardContent>
            <Typography variant="h4">Budget Categories</Typography>
              <Grid container spacing={2}>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={5}>
      <Box my={2}>
        <Card variant="outlined">
          <CardContent>
            <PieChartCard />
          </CardContent>
        </Card>
      </Box>
      </Grid>
    </Grid>
  </Container>
  );
}
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Main);


