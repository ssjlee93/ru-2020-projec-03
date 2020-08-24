import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle, generateUserDocument } from "../utils/firebase";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, { displayName });
    }
    catch (error) {
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
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
    <div className="mt-8">
      <h1 className="text-3xl mb-2 text-center font-bold">Sign Up</h1>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}

        <form noValidate autoComplete="off">
          <TextField id="displayName"
            label="Display name"
            variant="filled"
            placeholder="ex: theExample"
            name="displayName"
            value={displayName}
            onChange={event => onChangeHandler(event)} />
          <br />
          <TextField 
          id="email" 
          label="E-mail" 
          variant="filled" 
          name="userEmail" 
          placeholder="ex: example@gmail.com"
            value={email}
            onChange={event => onChangeHandler(event)} />
          <br />
          <TextField 
          id="password" 
          label="Password" 
          variant="filled"  name="userPassword"
          value={password}
          placeholder="ex: example1234"
          onChange={event => onChangeHandler(event)} />
          <br />
          <Button variant="outlined" color="primary" onClick={event => {
            createUserWithEmailAndPasswordHandler(event, email, password);
          }}>
            Create Account
            </Button>
        </form>

        <p className="text-center my-3">or</p>
        <button
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
        >
          Sign In with Google
        </button>
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;