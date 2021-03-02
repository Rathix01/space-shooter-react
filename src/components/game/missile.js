import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import MissileImg from "../../images/enemy-missile.png";
import gsap from "gsap";

const Missile = ({ attacks, attack, enemies }) => {
  const options = ["A", "B"];
  let pos = options[Math.floor(Math.random() * options.length)];

  if (enemies.badGuys.length === 1) {
    pos = enemies.badGuys[0].index % 2 === 0 ? "B" : "A";
  }

  useEffect(() => {
    let tween = gsap.fromTo(
      `.missle-${attack.id}`,
      { x: pos === "A" ? -70 : 70, y: 90, rotate: pos === "A" ? -15 : 15 },
      { x: 70, y: 500, duration: 10 }
    );
    tween.play();
  }, []);

  return (
    <div className={`missle-${attack.id}`} key={attack.id}>
      <img src={MissileImg} />
    </div>
  );
};

export default Missile;
