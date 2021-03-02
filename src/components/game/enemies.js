import React from "react";
import { createUseStyles } from "react-jss";
import BadGuy from "./bad-guy";
import uuid from "react-uuid";

const Enemies = ({ enemies }) => {
  const { container, playerShip, flareContainer, flare } = useStyles();
  return (
    <div className={container}>
      {enemies.badGuys.map((badguy, idx) => {
        return (
          <div key={badguy.id}>
            <BadGuy index={idx} badguy={badguy} />
          </div>
        );
      })}
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    width: 70,
    height: 70,
    position: "absolute",
    top: 30,
  },
  playerShip: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: -28,
  },
  flareContainer: {
    width: 33,
    marginLeft: 18,
    overflow: "hidden",
  },
});

export default Enemies;
