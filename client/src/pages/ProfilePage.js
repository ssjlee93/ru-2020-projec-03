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
  // firebase user info
  const user = useContext(UserContext);
  const { uid, displayName } = user;
  // state for inputfields 
  const [amount, setAmount] = useState({});
  // the object for categories: values 
  const [userData, setUserData] = useState("")
  // state for ajax call data for selected country
  const [economistThere, setEconomistThere] = useState([])
  // state for ajax call data for USA
  const [economistHere, setEconomistHere] = useState([])

  // load user budget every time 
  useEffect(() => {
    loadBudget();
  })

  // load BMindex for America once
  useEffect(() => {
    loadIndex();
    checkUser();
  }, [])

  // check user
  function checkUser () {
    if (!displayName) {
      window.location.reload();
    } 
  }
  
  //api/budget/id get
  function loadBudget() {
    API.getBudget(uid)
      .then(res => {
        if (!res.data) {
          return
        } else {
          setUserData(res.data)
        }
      })
      .catch(err => console.log(err));
  };

  // recognize value change, 
  const handleInputChange = event => {
    const { name, value } = event.target;
    setAmount({
      ...amount,
      [name]: value
    })
  }

  // creating budget 
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

  //  deleting budget
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
  // updating budget 
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

  // states for Big Mac Index api
  // selected country name
  const [country, setCountry] = useState("");
  // selected country code
  const [code, setCode] = useState("");
  // countries and their code imported from a JSON file 
  const [countries, setCountries] = useState(CountriesObj)

  // ajax call to BMIndex for selected country
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
       setEconomistThere(data.dataset.data[0]);
      })
  };

  // ajax call to BMindex for USA
  function loadIndex() {
    API.getIndex("USA")
    .then((resp) => {
      const start = resp.data.indexOf("code")
      const end = resp.data.indexOf("/code")
      const str = resp.data.substring(start + 26, end - 1);
      const data = JSON.parse(str)
      setEconomistHere(data.dataset.data[0]);
    })
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
                <PieChartCard economistThere={economistThere} economistHere={economistHere} userData={userData} />
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
};

export default ProfilePage;