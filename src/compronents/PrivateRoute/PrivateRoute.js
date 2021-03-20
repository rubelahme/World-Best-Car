import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { privacyWeb } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [start] = useContext(privacyWeb);
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          start.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
