import img from "../assets/react.jpg";
import React from "react";
import { observable, action, when } from "mobx";
import { observer } from "mobx-react";

@observer
class Home2 extends React.Component {
  @observable chartNode = null;
  @observable name = 1;

  createChart() {
    console.dir(this.chartNode); // null
  }

  render() {
    return (
      <div>
        {this.name == 1 ? (
          <div
            ref={e => (this.chartNode = e)}
            onClick={() => {
              this.name = 2;
            }}
          >
            chart
          </div>
        ) : (
          <div
            ref="table"
            onClick={() => {
              this.name = 1;
              setTimeout(() => {
                this.createChart();
              }, 0);
            }}
          >
            table
          </div>
        )}
      </div>
    );
  }
}

export default Home2;
