import React from 'react';
import './cy.scss';
import img from './assets/react.jpg';

class MyComp extends React.Component {
  constructor() {
    super();
    var a = {
      name: '123'
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