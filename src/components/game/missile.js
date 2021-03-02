import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import MissileImg from "../../images/enemy-missile.png";
import gsap from "gsap";

const Missile = ({ attacks, attack, enemies }) => {
  const { zap1, zap2 } = useStyles();
  const options = ["A", "B"];
  let z = options[Math.floor(Math.random() * options.length)];

  if (enemies.badGuys.length === 1) {
    z = enemies.badGuys[0].index % 2 === 0 ? "B" : "A";
  }

  useEffect(() => {
    let tween = gsap.fromTo(
      `.missle-${attack.id}`,
      { x: z === "A" ? -70 : 70, y: 90, rotate: z === "A" ? -15 : 15 },
      { x: 70, y: 500, duration: 10 }
    );
    tween.play();
  }, []);

  return (
    <div className={`${z} zap missle-${attack.id}`} key={attack.id}>
      <img src={MissileImg} />
    </div>
  );
};

const useStyles = createUseStyles({
  zap1: {
    //animation: "badGuyAttack1 11s",
    animationFillMode: "forwards",
  },
  zap2: {
    //animation: "badGuyAttack2 11s",
    animationFillMode: "forwards",
  },
});

export default Missile;
