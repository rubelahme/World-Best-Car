import React from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { useHistory, useLocation } from "react-router";
import { useContext } from "react";
import { privacyWeb } from "../../App";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [start, setStart] = useContext(privacyWeb);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleGoogle = () => {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(providerGoogle)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        setStart(user);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  ////email
  const handleInput = (e) => {
    let login;
    if (e.target.name === "email") {
      const newEmail = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
    }
  };

  return (
    <div className="text-center mt-5">
      <div className="input">
        <form action="">
          <br />
          <input
            onBlur={handleInput}
            type="email"
            name="email"
            id=""
            placeholder="your email"
            required
          />
          <br />
          <input
            placeholder="your password"
            type="password"
            name="password"
            id=""
            required
          />
          <br />
          <input type="submit" className="bg-danger" value="Login" />
        </form>
      </div>
      <div>
        <button className="button" onClick={handleGoogle}>
          Facebook Sing in
        </button>
      </div>
    </div>
  );
};

export default Login;
