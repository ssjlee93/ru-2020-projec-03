import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, signInWithFacebook, signInWithTwitter, auth } from "../utils/firebase";
import Login from "../components/Login"
import Banner from "../components/Banner";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import "./SignInStyle.css";

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
    else if (name === 'userPassword') {
      setPassword(value);
    }
  };


  return (
    <Grid className="mainContainer" container spacing={6}>
      <Grid item lg={1}></Grid>
      <Banner />
      <Grid item lg={1}></Grid>
      <Grid className="SignInMain" item lg={3} alignItems="center">
        <Card>
        <Typography variant="h4">Sign In</Typography>
        <br/>
        <Login name="Email"
          value={email}
          placeholder="ex: example@gmail.com"
          id="userEmail"
          onChange={(event) => onChangeHandler(event)} />
        <Login name="Password"
          value={password}
          placeholder="Your Password"
          id="userPassword"
          onChange={(event) => onChangeHandler(event)} />

        <br/>

        <Button className="GoogleBtn" variant="outlined" color="primary" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
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

        <br/>

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
  );
};

export default SignIn;