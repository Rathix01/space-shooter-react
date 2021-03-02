import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import Missile from "./missile";

const Attacks = ({ attacks, enemies }) => {
  const { container, background, zap1, zap2 } = useStyles();
  const options = [zap1, zap2];
  const z = options[Math.floor(Math.random() * options.length)];

  return (
    <div className={container}>
      {attacks.incoming.map((o) => {
        return <Missile enemies={enemies} attacks={attacks} attack={o} />;
      })}
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: 600,
    height: 600,
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
    color: "white",
    position: "relative",
    overflow: "hidden",
    position: "absolute",
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 0,
  },
  zap1: {
    animation: "badGuyAttack1 11s",
    animationFillMode: "forwards",
  },
  zap2: {
    animation: "badGuyAttack2 11s",
    animationFillMode: "forwards",
  },
});

export default Attacks;
