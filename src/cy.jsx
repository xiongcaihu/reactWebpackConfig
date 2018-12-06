import React from 'react';
import './cy.css';
import img from './assets/react.jpg';

class MyComp extends React.Component {
  constructor() {
    super();
    var a = {
      name: '1234'
    }
    console.log(_.get(a, 'name'));
  }

  render() {
    return <div className="cy">
      <img src={img} alt="test"/>
    </div>
  }
}

export default MyComp;