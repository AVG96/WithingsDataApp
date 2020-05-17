import React, { Component } from "react";
import NavBar from "./components/navbar";
import SleepData from "./components/sleepdata";
import CoreData from "./components/coredata";
import ThermoData from "./components/thermodata";
import Legend from "./components/legend";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint1: "ws://localhost:1880/ws/withingsdata",
      endpoint2: "ws://localhost:1880/ws/withingsdata2",
      measuresData: [],
      uniData: [],
    };
  }

  componentDidMount() {
    const ws1 = new WebSocket(this.state.endpoint1);
    ws1.onopen = () => {
      console.log("ws1 connected");
      //connects to websocket1
    };

    const ws2 = new WebSocket(this.state.endpoint2);
    ws2.onopen = () => {
      console.log("ws2 connected");
      //yhdistää websocket2:een
    };

    ws1.onmessage = (evt) => {
      const kayttajaDataMeasures = JSON.parse(evt.data);
      console.log(kayttajaDataMeasures);
      //parses the data and prints it to console

      const filteredData = kayttajaDataMeasures.body.measuregrps;
      const kayttajaDataMeasuresArray = Object.values(filteredData);
      //filters out the unnescessary data and changes the rest into an array

      this.setState({
        measuresData: kayttajaDataMeasuresArray,
        //sets the array to state
      });
      console.log(this.state.measuresData);
    };

    ws2.onmessage = (evt2) => {
      const kayttajaDataUni = JSON.parse(evt2.data);
      console.log(kayttajaDataUni);
      //sama juttu kuin aikasemmassa onmessagessa, mutta toisen wensocketin datan kanssa
      const filteredUniData = kayttajaDataUni.body.series;
      const kayttajaDataUniArray = Object.values(filteredUniData);

      this.setState({
        uniData: kayttajaDataUniArray,
      });
      console.log(this.state.uniData);
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />;
        <main className="container">
          <SleepData saatuUniData={this.state.uniData} />
          <CoreData saatuData={this.state.measuresData} />
          <ThermoData saatuData={this.state.measuresData} />
          <Legend />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
