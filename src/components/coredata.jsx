import React, { Component } from "react";

class CoreData extends Component {
  state = {};

  render() {
    let dataWithDeviceID = this.props.saatuData.filter((d) => {
      return d.deviceid !== null;
      //filters out the user data
    });

    let noThermoData = dataWithDeviceID.filter((d) => {
      return d.measures[0].type === 9 && 10 && 11;
      //filters out the thermometer data
    });

    return (
      <div>
        <h4 className="m-4">BPM Core Data</h4>
        <ul>
          {noThermoData.map((d) => (
            <li key={d.grpid}>
              {"Date: " + d.date},<br /> {"Tyyppi: " + d.measures[0].type},
              {"Arvo: " + d.measures[0].value},<br />{" "}
              {"Tyyppi: " + d.measures[1].type},{"Arvo: " + d.measures[1].value}
              ,<br /> {"Tyyppi: " + d.measures[2].type},{" "}
              {"Arvo: " + d.measures[2].value}
            </li>
          ))}
        </ul>
      </div>
    );
    //maps the remaining data into a list
  }
}

export default CoreData;
