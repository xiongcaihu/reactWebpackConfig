import React from 'react';
import './cy.css';
import img from './assets/react.jpg';
import {observer} from 'mobx-react';
import {observable, autorun} from 'mobx';
import {List} from 'immutable';
import CY from './cy2.jsx';

@observer
class MyComp extends React.Component {
  @observable array = new Array(10);
  @observable array2 = [];

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.array.replace([1,2,3,4,5,6]);
    }, 1000);
  }

  render() {
    return <div className="cy">
      {/* <img src={img} alt="test"/> */}
      {this
        .array
        .map((item, index) => {
          return (
            <CY key={index} name={index} value={item}></CY>
          );
        })}
    </div>
  }
}

export default MyComp;