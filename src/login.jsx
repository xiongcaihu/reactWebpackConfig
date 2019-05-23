import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { renderRoutes } from "react-router-config";
import { Link, Redirect } from "react-router-dom";

@observer
class Login extends React.Component {
  render() {
    return (
      <div>
        login
      </div>
    );
  }
}

export default Login;
