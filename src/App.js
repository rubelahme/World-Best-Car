import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./compronents/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Details from "./compronents/Details/Details";
import ItemDetails from "./compronents/ItemDetails/ItemDetails";
import PrivateRoute from "./compronents/PrivateRoute/PrivateRoute";
import Login from "./compronents/Login/Login";
import NoFound from "./compronents/NoFound/NoFound";
import HomeDetails from "./compronents/HomeDetails/HomeDetails";

export const privacyWeb = createContext([]);

function App() {
  const [start, setStart] = useState([]);
  return (
    <privacyWeb.Provider value={[start, setStart]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <ItemDetails></ItemDetails>
          </Route>
          <Route path="/home">
            <Header></Header>
            <ItemDetails></ItemDetails>
          </Route>
          <PrivateRoute path="/details">
            <Header></Header>
            <HomeDetails></HomeDetails>
          </PrivateRoute>
          <PrivateRoute path="/singIn">
            <Header></Header>
            <HomeDetails></HomeDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/item/:menu">
            <Header></Header>
            <Details></Details>
          </PrivateRoute>
          <Route path="*">
            <NoFound></NoFound>
          </Route>
        </Switch>
      </Router>
    </privacyWeb.Provider>
  );
}

export default App;
