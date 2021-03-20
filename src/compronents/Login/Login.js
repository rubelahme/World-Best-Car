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
        var user = result.user;
        setStart(user);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFacebook = () => {
    var providerFacebook = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(providerFacebook)
      .then((result) => {
        var user = result.user;
        setStart(user);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
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
          var user = userCredential.user;
          setStart(user);
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
  return (
    <div className="text-center mt-5">
      <form className="input-from bg-success" onSubmit={handleSubmit}>
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

        <input className="bg-warning" type="submit" value=" Login" />
      </form>
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
