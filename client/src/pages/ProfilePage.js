import React, { useContext, useState, useEffect } from "react";
import UserContext from "../utils/UserContext";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PieChartCard from "../components/PieChartContainer";
import Typography from '@material-ui/core/Typography';

import DropdownSection from "../components/DropdownSection";

import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CategorySection from "../components/CategorySection";
import API from "../utils/API";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const {email, uid} = user;
  const [amount, setAmount ] = useState({});
  const [formObject, setFormObject] = useState({}); 

  // load user budget  
    useEffect(() => {
      loadBudget()
    }, [])

  //api/budget/id get
   function loadBudget() {
      API.getBudget(uid)
        .then(res => 
          setAmount(res.data)
        )
        .catch(err => console.log(err));
    };
  
  // recognize value change, CHECKED
  // update state formObject 
      // what goes in formObject ? 
  // create or update tthe amount to database
  const handleInputChange = event => {
    const {name, value} = event.target;
    setAmount({...amount,
      [name]: value
    })
    console.log(amount);
  }

  // write code for creating budget 
  //api/budget/id post
  function saveBudget() {
    API.createBudget({
     
    })
      .then(res => 
        setAmount(res.data)
      )
      .catch(err => console.log(err));
  };

  // write code for deleting budget
  //api/budget/id delete

  // write code for updating budget 
  //api/budget/id put

  // write code for ajax call to our index api
  //api/economist/id get

  return (
    <Container fixed>
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <Typography>{email}</Typography>
        <Typography>{uid}</Typography>
       <DropdownSection  />
       <CategorySection handleInputChange={handleInputChange}/>
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
  ) 
};

export default ProfilePage;