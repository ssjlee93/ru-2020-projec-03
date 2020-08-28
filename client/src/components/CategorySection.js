import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const CategorySection = (props) => {
  const [categories, setCategories] = useState(
    [
      "Administrative",
      "Tickets",
      "Auto",
      "Lodging",
      "Food",
      "Entertainment",
      "Shopping",
      "Childcare",
    ]
  )

  return (
    <Box my={2}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h4">Budget Categories</Typography>
          <Grid container spacing={2}>
            <form>
              {categories.map(item => <CategoryCard category={item} handleInputChange={props.handleInputChange} />)}
              <button className = "save" onClick= {props.saveBudget}> Save</button>
            </form>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
};

export default CategorySection