import React, { Component } from "react";
import QRCode from "react-qr-code";
import AppBar from "../UI/AppBar/AppBar";
import TextField from "@material-ui/core/TextField";
// import GenerateButton from "../UI/Generate_Button/circular";
import "./QRCODE.css";

class QRCODE extends Component {
  state = {
    val:
      "https://firebasestorage.googleapis.com/v0/b/mydocs-9999.appspot.com/o/Avtaar.png?alt=media&token=3a63a9a2-d59d-4851-8a14-5cba564e6503"
  };
  handleQrCode = e => {
    if (e.target.value !== "") {
      this.setState({
        val: e.target.value
      });
    } else {
      this.setState({
        val:
          "https://wa.me/919662260013?text=Hey,%20Manav%20We%20are%20using%20your%20QRCode%20Service"
      });
    }
  };

  render() {
    return (
      <div className="MAINAPP">
        <AppBar />
        <div className="myQRCODE">
          <QRCode className="qrCoDe" value={this.state.val} />
        </div>
        <br />
        <TextField
          label="Generate QR Code"
          onChange={this.handleQrCode}
          variant="outlined"
        />
        <br />
      </div>
    );
  }
}

export default QRCODE;

// <GenerateButton /><br/>
