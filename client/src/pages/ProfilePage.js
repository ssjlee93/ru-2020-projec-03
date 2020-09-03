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
import CountriesObj from '../utils/Countries.json';
import "./ProfilePageStyle.css";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const { email, uid, displayName } = user;
  const [amount, setAmount] = useState({});
  const [userData, setUserData] = useState("")
  const [economist, setEconomist] = useState("")

  // load user budget  
  useEffect(() => {
    loadBudget()
  }, [])

  useEffect(() => {

  }, [])

  //api/budget/id get
  function loadBudget() {

    API.getBudget(uid)
      .then(res => {
        if (!res.data) {
          return
        } else {
          setUserData(res.data)
        }
      }
      
      )
      .catch(err => console.log(err));
  };

  // recognize value change, CHECKED
  // update state formObject 
  // what goes in formObject ? 
  // create or update tthe amount to database
  const handleInputChange = event => {
    const { name, value } = event.target;
    setAmount({
      ...amount,
      [name]: value
    })
  }

  // write code for creating budget 
  //api/budget/id post
  function saveBudget() {
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
  function removeBudget() {
    console.log(uid);
    API.deleteBudget(uid)
      .then(res => {
        if (!res.data) {
          return
        } else {
          window.location.reload();
        }
      }
      )
      .catch(err => console.log(err));
  };
  // write code for updating budget 
  //api/budget/id put
  function rewriteBudget(event) {
    event.preventDefault();
    API.updateBudget(uid, {
      ...amount
    })
      .then(res =>
        setAmount(res.data)
      )
      .catch(err => console.log(err));
  };

  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [countries, setCountries] = useState(CountriesObj)
  // write code for ajax call to our index api
  //api/economist/country get
  const handleDropdownChange = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    const value = event.target.value.split(":");

    let name = value[0];
    let val = value[1];

    setCode(val);
    setCountry(name);
    console.log(name)
    API.getIndex(val)
      .then((resp) => {
        const start = resp.data.indexOf("code")
        const end = resp.data.indexOf("/code")
        const str = resp.data.substring(start + 26, end - 1);
        const data = JSON.parse(str)
        console.log(data.dataset.data[0]);
      })
  };
  function loadIndex(event) {
    event.preventDefault();
    API.getIndex(country)
      .then(res => res)
  }

  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Box my={2}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5">Hi {displayName}! Welcome to your Budget Dashboard.</Typography>
              </CardContent>
            </Card>
          </Box>
          <DropdownSection
            handleDropdownChange={handleDropdownChange}
            country={country}
            countries={countries}
            code={code}
          />
          <CategorySection
            handleInputChange={handleInputChange}
            saveBudget={saveBudget}
            removeBudget={removeBudget}
            rewriteBudget={rewriteBudget}
          />
        </Grid>
        <Grid item xs={5}>
          <Box my={2}>
            <Card variant="outlined">
              <CardContent>
                <PieChartCard userData={userData} />
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
};

export default ProfilePage;