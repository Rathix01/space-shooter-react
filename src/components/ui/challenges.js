import React from "react";
import { createUseStyles } from "react-jss";
import { colorOptions } from "../data/config";
import uuid from "react-uuid";

let interval = null;

const Challenges = ({ ready, enemies, attacks }) => {
  const { container, colourBox, colours, header } = useStyles();

  const incoming = enemies.badGuys.filter(
    (badGuy) => badGuy.defence.length !== 0
  );

  const incomingAttacks = attacks.incoming !== void 0 ? attacks.incoming : [];

  return (
    <div className={container}>
      <div className={header}>Incoming</div>
      <div>
        {incomingAttacks.map((incoming) => {
          return (
            <div className={colourBox} key={uuid()}>
              <div className={colours}>
                {incoming.challenge.map((colour) => {
                  return (
                    <div
                      key={uuid()}
                      className={colourBox}
                      style={{ background: colour }}
                    ></div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className={header}>Attack</div>
      <div>
        {enemies.badGuys.map((enemy, index) => {
          return (
            <div className={colourBox} key={`enemy-${index}`}>
              {/* <div>{enemy.type}</div> */}
              <div className={colours}>
                {enemy.attack.map((colour, index) => {
                  return (
                    <div
                      key={`color-${index}`}
                      className={colourBox}
                      style={{ background: colour }}
                    ></div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: 220,
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 5,
    background: "#BBB",
    borderRadius: 4,
    padding: "5px 0",
  },
  header: {
    width: "100%",
  },
  colourBox: {
    height: 30,
    minWidth: 30,
    margin: 5,
    borderRadius: 4,
    display: "flex",
  },
  colours: {
    display: "flex",
  },
});

export default Challenges;
