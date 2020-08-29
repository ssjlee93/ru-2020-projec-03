import React, { useContext, useState, useEffect } from "react";
import UserContext from "../utils/UserContext";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PieChartCard from "../components/PieChartContainer";
import Typography from '@material-ui/core/Typography';
import axios from "axios";
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
  

  // load user budget  
    useEffect(() => {
      loadBudget()
    }, [])

    useEffect(() => {
      console.log(amount)
    }, [amount])

  //api/budget/id get
   function loadBudget() {
      API.getBudget(uid.value)
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
    
  }

  // write code for creating budget 
  //api/budget/id post
  function saveBudget(event) {
    event.preventDefault();

    API.createBudget({
      ...amount,
      uid


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
  function updateBudget(event) {
    event.preventDefault();

    API.updateBudget({
    ...amount,
    uid
  })
  .then(res => 
    setAmount(res.data)
  )
  .catch(err => console.log(err));
};

  // write code for ajax call to our index api
  //api/economist/country get
  function loadIndex () {
    API.getIndex(country)
  }

  function getIndex(event) {
    event.preventDefault();
     let country = event.target.value
    axios.get({

    })
  }

  return (
    <Container fixed>
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <Typography>{email}</Typography>
        <Typography>{uid}</Typography>
       <DropdownSection  getIndex= {getIndex}/>
       <CategorySection handleInputChange={handleInputChange} saveBudget = {saveBudget}/>
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