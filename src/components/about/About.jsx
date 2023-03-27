import React from "react";
import "./about.css";
import AboutImg from "../../assets/giv/white.jpeg";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sabun GIV</h2>
      <span className="section__subtitle">Manfaat dan Keunggulan</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Dalam pemilihan sabun mandi faktor yang paling diminati oleh wanita
            Indonesia adalah kebutuhan akan sabun mandi yang menjaga kelembaban
            kulit dan sabun dengan keharuman fine fragrance yang mewah dan tahan
            lama.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
