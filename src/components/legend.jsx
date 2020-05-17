import React, { Component } from "react";

class Legend extends Component {
  state = {};
  /*en onnistunut tekemään sitä, että ohjelma muuttaisi timestampin normaaliksi ajaksi 
  enkä sitä, että vaihtaa nuo tyypit oikeiksi, niin lisäsin nyt tällaisen selitteen placeholderiksi
  */
  render() {
    return (
      <div>
        <h4>Selite</h4>
        <p>
          Tämä ohjelma hakee TRT labran <br /> Withings laitteilla tuotettua
          dataa <br /> ja esittää sen.
        </p>
        <p>
          BPM Core ja lämpömittarin data tyypit:
          <br /> 9 = Alapaine (mmHg)
          <br /> 10 = Yläpaine (mmhG)
          <br /> 11 = Sydämen syke (bpm)
          <br /> 12 = Lämpötila (celsius, ex. 35852 = 35,852)
          <br /> 71 = Ruumiinlämpö (celsius)
          <br /> 73 = Ihon lämpö (celsius)
        </p>
        <p>
          BPM Coren ja lämpömittarin
          <br /> päivämäärät ovat epoch aikoina, <br />
          joten tässä linkki converteriin:
        </p>
        <a href="https://www.epochconverter.com/">converter</a>
      </div>
    );
  }
}

export default Legend;
