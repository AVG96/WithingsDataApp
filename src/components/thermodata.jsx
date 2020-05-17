import React, { Component } from "react";

class ThermoData extends Component {
  state = {};

  render() {
    let dataWithDeviceID2 = this.props.saatuData.filter(d => {
      return d.deviceid !== null;
      //filtteroidaan käyttäjätiedot pois
    });

    let lampoData = dataWithDeviceID2.filter(d => {
      return d.measures[0].type === 12 && 71 && 73;
      //fillteroidaan BPM Coren data pois
    });

    return (
      <div>
        <h4 className="m-4">Lämpömittarin Data</h4>
        <ul>
          {lampoData.map(d => (
            <li key={d.grpid}>
              {"Date: " + d.date},<br /> {"Tyyppi: " + d.measures[0].type},
              {"Arvo: " + d.measures[0].value},<br />{" "}
              {"Tyyppi: " + d.measures[1].type},{"Arvo: " + d.measures[1].value}
              ,<br /> {"Tyyppi: " + d.measures[2].type},
              {"Arvo: " + d.measures[2].value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ThermoData;
