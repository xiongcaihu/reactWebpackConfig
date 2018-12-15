import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import { renderRoutes } from "react-router-config";
import {Link} from 'react-router-dom';

@observer
class Home extends React.Component{
    render(){
        return <div>
            home
            <Link to="/home1">home1</Link>
            <Link to="/home2">home2</Link>
            <div>--------------------</div>
            {renderRoutes(this.props.route.childs)}
        </div>
    }
}

export default Home;