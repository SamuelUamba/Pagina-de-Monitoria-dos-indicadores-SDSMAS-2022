import React from "react";

export default class Address extends React.Component {
  render() {
    return (
      <div className="address">
        <strong>
          <img src="/img/whatsapp.png" alt="whatsapp" /> (+258) XXXXXXXX{" "}
          <br></br>
        </strong>
        <img src="/img/mail.png" alt="mail" /> sdsmas@gmail.com <br></br>
        <img src="/img/phone.png" alt="phone" /> (+258) XXXXXXXX <br></br>
      </div>
    );
  }
}
