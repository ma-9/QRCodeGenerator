import React, { Component } from "react";
import QRCode from "react-qr-code";
import AppBar from "../UI/AppBar/AppBar";
// import GenerateButton from "../UI/Generate_Button/circular";
import "./QRCODE.css";

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
      <div className="MAINAPP">
        <AppBar />
        <div className="myQRCODE">
        <QRCode className="qrCoDe" value={this.state.val} />
        </div>
        <br />
        <input onChange={this.handleQrCode} />
      </div>
    );
  }
}

export default QRCODE;

// <GenerateButton /><br/>
