import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, signInWithFacebook, auth, signInUser } from "../utils/firebase";
import Login from "../components/Login"
import Banner from "../components/Banner";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "./SignInStyle.css";
import NavNoSignIn from "../components/Navigation/NavNoSignIn";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'Email') {
      setEmail(value);
    }
    else if (name === 'Password') {
      setPassword(value);
    }
  };


  return (
    <div>
    <NavNoSignIn/>
    <Grid className="mainContainer" container spacing={3}>
      <Grid item lg={1}></Grid>
      <Banner />
      <Grid item lg={1}></Grid>
      <Grid className="SignInMain" item lg={3} alignItems="center">
        <Card>
          <Typography variant="h4" className="SignInHeader">Sign In</Typography>
          <br />
          <form noValidate autoComplete="off">
            <TextField
              fullwidth
              variant="filled"
              label="E-mail"
              name="Email"
              value={email}
              placeholder="ex: example@gmail.com"
              id="userEmail"
              onChange={(event) => onChangeHandler(event)} />
            <br />
            <TextField
              fullwidth
              variant="filled"
              label="Password"
              name="Password"
              value={password}
              placeholder="Your Password"
              id="userPassword"
              type="password"
              onChange={(event) => onChangeHandler(event)} />
            <br />
          </form>
          <br />
          <Button className="GoogleBtn" variant="outlined" color="primary" onClick={() => {
            signInUser(email, password)
          }}>
            Sign in
          </Button>
          <p>or</p>
          <Button
            variant="outlined" color="primary"
            onClick={() => {
              signInWithGoogle();
            }}
          >
            Sign in with Google
        </Button>

          <br />

          <div className="fb-login-button"
            data-size="medium"
            data-button-type="continue_with"
            data-layout="default"
            data-auto-logout-link="false"
            data-use-continue-as="false"
            data-width=""
            onClick={() => {
              signInWithFacebook();

            }}
          ></div>

          <p className="text-center my-3">
            Don't have an account?{" "}
            <Link to="signUp" className="text-blue-500 hover:text-blue-600">
              Sign up here
          </Link>{" "}
            <br />{" "}
            <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
              Forgot Password?
          </Link>
          </p>
        </Card>
      </Grid>
      <Grid item lg={1}></Grid>
    </Grid>
    </div>
  );
};

export default SignIn;