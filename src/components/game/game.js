import React from "react";
import { createUseStyles } from "react-jss";
import Background from "../../images/background.jpg";
import PlayerShip from "./player-ship";
import Enemies from "./enemies.js";
import Attacks from "./attacks.js";

const Game = ({ attacks, enemies }) => {
  const { container, background } = useStyles();

  //console.log(attacks);

  return (
    <div className={container}>
      <img src={Background} className={background} />
      <Attacks attacks={attacks} enemies={enemies} />
      <Enemies enemies={enemies} />
      <PlayerShip />
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
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 0,
  },
});

export default Game;
