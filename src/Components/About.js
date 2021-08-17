import React from "react";
import { GiMechanicGarage } from "react-icons/gi";
import { IconContext } from "react-icons";

export default function About() {
  return (
    <div id="info">
      <section className="about-box">
        <section className="about-section">
          <img className="about-img" src="/mechanic.jpg" alt="about" />
        </section>
        <section className="about-section">
          <h3>Nuestra Experiencia</h3>

          <IconContext.Provider value={{ color: "red", size: "4rem" }}>
            <GiMechanicGarage />
          </IconContext.Provider>
          <p>
            Compromiso por la calidad, rapidez, confianza en el trabajo y lo más
            importante, la seguridad e integridad de cada uno de nuestros
            clientes son los valores que hacen de Briscar una empresa que día a
            día trabaja por ofrecer el mejor servicio integral automotriz desde
            hace más de 8 años.
          </p>
        </section>
      </section>
    </div>
  );
}
