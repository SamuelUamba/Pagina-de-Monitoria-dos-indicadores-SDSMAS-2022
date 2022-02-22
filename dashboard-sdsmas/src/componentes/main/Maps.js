import React from "react";

export default class Maps extends React.Component {
  render() {
    return (
      <div className="mapsLocation">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14497.59292262608!2d33.878328!3d-24.713205000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee060d5070d0d85%3A0x9ca5bccd354a8c32!2sManjacaze!5e0!3m2!1spt-PT!2smz!4v1644505550798!5m2!1spt-PT!2smz"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    );
  }
}
