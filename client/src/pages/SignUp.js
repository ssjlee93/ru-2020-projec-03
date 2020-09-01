import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { updateDisplayName, signInWithGoogle, createUser } from "../utils/firebase";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import "./SignUpStyle.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <Grid container className="SignInContainer">
      <Grid item lg={4}></Grid>
      <Grid item lg={4} className="SignUpMain">
        <Card>
      <Typography variant="h4" className="SignInTitle">Sign Up</Typography>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}


        <form noValidate autoComplete="off" className="SignInForm">
          <TextField id="displayName"
            className="SignInTextArea"

            label="Display name"
            variant="filled"
            placeholder="ex: theExample"
            name="displayName"
            value={displayName}
            onChange={event => onChangeHandler(event)} />
          <br />

          <TextField 
          id="email" 
          className="SignInTextArea"
          label="E-mail" 
          variant="filled" 
          name="userEmail" 
          placeholder="ex: example@gmail.com"
            value={email}
            onChange={event => onChangeHandler(event)} />
          <br />
          <TextField 
          id="password" 
          className="SignInTextArea"
          label="Password" 
          variant="filled"  name="userPassword"
          value={password}
          placeholder="ex: example1234"
          onChange={event => onChangeHandler(event)} />
          <br />
          <Button className="CreateAccBtn" variant="outlined" color="primary" onClick={event => {
            createUserWithEmailAndPasswordHandler(event, email, password);
          }}>
            Create Account
            </Button>
          <br />
        </form>

        <p className="text-center my-3">or</p>
        <Button variant="outlined" color="primary"
          onClick={() => {
            try {
              signInWithGoogle();
              //once signed in with google it will reroute to identified route below

            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
        >
          Sign In with Google
        </Button>
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>{" "}
        </p>
      </div>
        </Card>
      </Grid>
      <Grid item lg={4}></Grid>
    </Grid>
  );
};


export default SignUp;