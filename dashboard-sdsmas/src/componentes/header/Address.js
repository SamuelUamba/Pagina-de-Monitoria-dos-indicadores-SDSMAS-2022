import React from "react";

export default class Address extends React.Component {
  render() {
    return (
      <div className="address">
        <picture>
          <source media="(max-width:768px)" srcSet="/img/info.png" />
          <source media="(min-width:769px)" srcSet="/img/info.png" />
        </picture>
        <strong>
          <img src="/img/info.png" alt="info" />
          <br></br>
        </strong>
        <img src="/img/mail.png" alt="mail" /> sdsmas@gmail.com <br></br>
        <img src="/img/phone.png" alt="phone" /> (+258) XXXXXXXX <br></br>
        <strong> Endereco: Gaza</strong>
      </div>
    );
  }
}
