import React from "react";
import { createUseStyles } from "react-jss";
import PlayerShipImage from "../../images/ship.png";
import ShipFlare from "../../images/ship-flare.png";

const PlayerShip = () => {
  const { container, playerShip, flareContainer, flare } = useStyles();

  return (
    <div className={container}>
      <div className={flareContainer}>
        <img src={ShipFlare} className="flare" />
      </div>
      <img src={PlayerShipImage} className={playerShip} />
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    width: 70,
    height: 70,
    position: "absolute",
    bottom: 30,
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

export default PlayerShip;
