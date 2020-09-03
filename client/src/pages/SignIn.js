import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, signInWithFacebook, auth } from "../utils/firebase";
import Banner from "../components/Banner";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "./SignInStyle.css";
import NavNoSignIn from "../components/Navigation/NavNoSignIn";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInUser = (event,email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
    setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

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
      <Grid className="SignInMain" item lg={3} >
        <Card>
          <Typography variant="h4" className="SignInHeader">Sign In</Typography>
          <br />
          {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
          <br />
          <form noValidate autoComplete="off">
            <TextField
              variant="filled"
              label="E-mail"
              name="Email"
              value={email}
              placeholder="ex: example@gmail.com"
              id="userEmail"
              onChange={(event) => onChangeHandler(event)} />
            <br />
            <TextField
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
          <Button className="GoogleBtn" variant="outlined" color="primary" onClick={ event => {
            signInUser(event, email, password)
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