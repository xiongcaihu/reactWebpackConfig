import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { renderRoutes } from "react-router-config";
import { Link, Redirect } from "react-router-dom";

@observer
class MyRoot extends React.Component {
  render() {
    let { history, location, route } = this.props;
    console.log(this.props);
    return (
      <div>
        root
        {location.pathname == "/" ? <Redirect to="/home" /> : ""}
        {location.pathname == "/home" ? <Redirect to="/home" /> : ""}
        {location.pathname == "/home/home1" ? <Redirect to="/home/home1" /> : ""}
        {renderRoutes(this.props.route.childs)}
      </div>
    );
  }
}

export default MyRoot;
