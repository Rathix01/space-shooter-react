import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import BadGuyShipImage from "../../images/scout.png";
import ShipFlare from "../../images/ship-flare.png";
import gsap from "gsap";

const BadGuy = ({ index, badguy }) => {
  const { container, playerShip, flareContainer, flare } = useStyles();

  useEffect(() => {
    let tween = gsap.fromTo(
      `.bad-guy-${badguy.id}`,
      { x: 0, y: -100 },
      { x: 0, y: 0, duration: 1 }
    );
    tween.play();
  }, []);

  return (
    <div
      key={badguy.id}
      className={`${container} badguy bad-guy-${badguy.id}`}
      style={{
        marginLeft: badguy.index % 2 === 0 ? "150px" : "-150px",
      }}
    >
      <img src={BadGuyShipImage} className={playerShip} />
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

export default BadGuy;
