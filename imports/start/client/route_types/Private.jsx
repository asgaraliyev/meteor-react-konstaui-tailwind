import { Route, useHistory } from "react-router-dom";
import React from "react";
import { useTracker } from "meteor/react-meteor-data";

export default function Private({ children, ...rest }) {
  const history = useHistory();
  function isAuth() {
    return !!Meteor.userId();
  }
  if (isAuth()) {
    return (
      <Route {...rest} exact>
        {children}
      </Route>
    );
  } else {
    history.push("/not-found");
    return <h1>Not Found</h1>;
  }
}