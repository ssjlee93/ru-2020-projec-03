import React, { useState } from "react";
import { auth } from "../../utils/firebase";
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from "@material-ui/core";
import "./style.css";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
          setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <div>
    <Grid container className="Container">
      <Grid item lg={3}></Grid>
      <Grid item lg={6} className="Main">
        <Card className="Card">
        <Typography variant="h2" classname="Title">
          Reset your Password
        </Typography>
        <form className="ResetForm" action="">
          {emailHasBeenSent && (
            <div className="py-3 bg-green-400 w-full text-white text-center mb-3">
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div className="py-3 bg-red-600 w-full text-white text-center mb-3">
              {error}
            </div>
          )}
          
          <TextField
            className="textField"
            variant="filled"
            label="Email" 
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
          />
          <br/>
          <Button
            variant="outlined" color="primary"
            className="EmailBtn"
            onClick={event => {
              sendResetEmail(event);
            }}
          >
            Send me a reset link
          </Button>
        </form>

        <Link
          to="/"
          className="my-2 text-blue-700 hover:text-blue-800 text-center block"
        >
          &larr; back to sign in page
        </Link>
        </Card>
      </Grid>
      <Grid item lg={3}></Grid>
    </Grid>
    </div>
  );
};

export default PasswordReset;