import React from "react";
import "./Map.css";
export const Map = () => {
  return (
    <div>
      <iframe
        title="Gym Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.30684648262!2d75.29928987508995!3d17.682958983255574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc41786c013951b%3A0xa05ccb8cb44a7fdd!2sVitthal%20Visawa%20Temple!5e0!3m2!1sen!2sin!4v1687458920836!5m2!1sen!2sin"
        width="500"
        height="310"
        id="map"
        className="map_locate"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
