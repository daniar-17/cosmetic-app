import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-star about__icon"></i>
        <h3 className="about__title">Terpercaya</h3>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Handal</h3>
      </div>

      <div className="about__box">
        <i class="bx bx-badge-check about__icon"></i>
        <h3 className="about__title">Aman</h3>
      </div>
    </div>
  );
};

export default Info;
