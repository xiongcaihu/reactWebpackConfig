import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { renderRoutes } from "react-router-config";
import { Link, Redirect } from "react-router-dom";

@observer
class Home extends React.Component {
  render() {
    let { history, location, route } = this.props;
    return (
      <div>
        home
        <Link to="/home/home1">home1</Link>
        <Link to="/home/home2">home2</Link>
        {location.pathname == "/home" ? <Redirect to="/home/home1" /> : ""}
        <div>--------------------</div>
        {renderRoutes(this.props.route.childs)}
      </div>
    );
  }
}

export default Home;
