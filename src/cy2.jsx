import React from 'react';
import './cy.css';
import img from './assets/react.jpg';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer
class Cy extends React.Component {
  componentDidUpdate() {
    console.log(this.props.name+' updated');
  }

  render() {
    return <div>
      {this.props.name}
      - {this.props.value}
    </div>
  }
}

export default Cy;