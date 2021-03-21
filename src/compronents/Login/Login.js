import React, { useState } from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { useHistory, useLocation } from "react-router";
import { useContext } from "react";
import { privacyWeb } from "../../App";
import { Link } from "react-router-dom";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [start, setStart] = useContext(privacyWeb);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [web, setWeb] = useState(true);
  const handleGoogle = () => {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(providerGoogle)
      .then((result) => {
        const user = result.user;
        setStart(user);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFacebook = () => {
    const providerFacebook = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(providerFacebook)
      .then((result) => {
        const user = result.user;
        setStart(user);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelInput = (e) => {
    let formValid = true;
    if (e.target.name === "email") {
      formValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPassword = e.target.value.length > 6;
      const passwordConform = /\d{1}/.test(e.target.value);
      formValid = isPassword && passwordConform;
    }
    if (formValid) {
      const newUserInfo = { ...start };
      newUserInfo[e.target.name] = e.target.value;
      setStart(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    if (start.email && start.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(start.email, start.password)
        .then((userCredential) => {
          const newUserInfo = { ...start };
          newUserInfo.displayName = start.name;
          setStart(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    e.preventDefault();
  };

  const handleLogin = (e) => {
    if (start.email && start.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(start.email, start.password)
        .then((userCredential) => {
          const newUserInfo = { ...start };
          setStart(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
    e.preventDefault();
  };

  const loginId = () => {
    setWeb(false);
  };

  return (
    <div className="text-center mt-5">
      {web ? (
        <form className="input-from bg-success" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            required
            onBlur={handelInput}
          />
          <input
            name="email"
            onBlur={handelInput}
            placeholder="Your Email"
            required
          />
          <label htmlFor="">Must give a Number</label>
          <input
            name="password"
            onBlur={handelInput}
            placeholder="password"
            required
          />
          <input
            name="confirmPassword"
            onBlur={handelInput}
            placeholder="conform password"
            required
          />
          <p>{start.error}</p>
          <input className="bg-warning" type="submit" value="Sing Up " />
          <p>
            If you have an Account,
            <Link onClick={loginId} className="bg-danger text-light p-1">
              Log in
            </Link>
          </p>
        </form>
      ) : (
        <div>
          <form className="input-from bg-success" onSubmit={handleLogin}>
            <input
              name="email"
              onBlur={handelInput}
              placeholder="Your Email"
              required
            />
            <input
              name="password"
              onBlur={handelInput}
              placeholder="password"
              required
            />
            <input className="bg-warning" type="submit" value="Login " />
          </form>
        </div>
      )}
      <div>
        <button className="handelButton" onClick={handleGoogle}>
          Google Sing In
        </button>
      </div>
      <div>
        <button className="handelButton" onClick={handleFacebook}>
          Facebook Sing In
        </button>
      </div>
    </div>
  );
};

export default Login;
