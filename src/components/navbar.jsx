import React, { Component } from "react";

class NavBar extends Component {
  state = {
    imageUrl:
      "http://www.turkuamk.fi/media/filer_public/2015/11/24/turku_amk_eng_nega.png"
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={this.state.imageUrl} alt="" width="200" height="75" />
          Health Tech Lab Withings Data
        </a>
      </nav>
    );
  }
}

export default NavBar;
