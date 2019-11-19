import React, { Component } from "react";
import QRCode from "react-qr-code";
// import GenerateButton from "./../UI/Generate_Button/circular";

class QRCODE extends Component {
  state = {
    val: ""
  };
  handleQrCode = e => {
    this.setState({
      val: e.target.value
    });
  };

  render() {
    return (
      <div>
        <QRCode value={this.state.val} />
        <br />
        <input onChange={this.handleQrCode} />
      </div>
    );
  }
}

export default QRCODE;

// <GenerateButton /><br/>
