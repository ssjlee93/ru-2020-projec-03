import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { useState } from "react";
import CategoryCard from "../CategoryCard";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./style.css";

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
          <form>
            <Grid container spacing={1}>
                  {categories.map(item => <CategoryCard key={item} category={item} handleInputChange={props.handleInputChange} />)}
                  
                  <Button className="saveBtn" variant="outlined" onClick={props.saveBudget}>Save</Button>
                  <Button className="DeleteBtn" variant="outlined" onClick={props.removeBudget}>Clear</Button>
                  <Button className="updateBtn" variant="outlined" onClick={props.rewriteBudget}>Update</Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
};

export default CategorySection