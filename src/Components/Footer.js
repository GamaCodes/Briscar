import React from "react";
import { BiMailSend } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <div id="info">
      <section className="about-box">
        <section className="about-section">
          <h3>¿Dudas o comentarios? </h3>
          <h1>Contáctanos</h1>
          <IconContext.Provider value={{ color: "red", size: "4rem" }}>
            <BiMailSend />
          </IconContext.Provider>
          <p>distribucion@briscarsa.com</p>
        </section>
        <section className="about-section">
          <img
            className="about-img"
            src="https://images.pexels.com/photos/6964156/pexels-photo-6964156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="about"
          />
        </section>
      </section>
    </div>
  );
}
