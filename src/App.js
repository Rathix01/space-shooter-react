import "./App.css";
import { createUseStyles } from "react-jss";
import Dashboard from "./components/ui/dashboard";
import Game from "./components/game/game";
import { useState, useEffect } from "react";
import { createChallenge, eqValues } from "./components/ui/helpers";
import { concat } from "ramda";
import uuid from "react-uuid";

const App = () => {
  const { mainContainer } = useStyles();
  const [hasStarted, setHasStarted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [inputColours, setInputColours] = useState([]);
  const [incoming, setIncoming] = useState([]);
  const [badGuys, setBadGuys] = useState([]);
  const [youLose, setYouLose] = useState(false);

  const updateInputs = (update) => {
    const defence = incoming.filter((c) => {
      return !eqValues(c.challenge, update, "defence");
    });

    const attack = badGuys.filter((c) => {
      return !eqValues(c.attack, update, "attack");
    });

    if (attack.length !== badGuys.length) {
      setBadGuys(attack);
      setInputColours([]);
    } else if (defence.length !== incoming.length) {
      const attackObj = incoming.filter((c) => {
        return eqValues(c.challenge, update, "defence");
      })[0];

      clearTimeout(attackObj.timeout);
      setIncoming(defence);
      setInputColours([]);
    } else {
      setInputColours(update);
    }
  };

  const fail = () => {
    setYouLose(true);
    console.log("fail");
  };

  useEffect(
    function () {
      //after a bad guy is removed, wait a couple of seconds and add a new one.
      setTimeout(() => {
        if (badGuys.length !== 2) {
          setBadGuys(
            badGuys.concat({
              defence: createChallenge(3),
              attack: createChallenge(4),
              index: badGuys[0] !== void 0 && badGuys[0].index !== 0 ? 0 : 1,
              id: uuid(),
            })
          );
        }
      }, 2000);
    },
    [badGuys]
  );

  useEffect(
    (update) => {
      const msLengths = [2500, 3000, 3500, 4000];
      const length =
        badGuys.length === 1
          ? 4000
          : msLengths[Math.floor(Math.random() * msLengths.length)];

      console.log(incoming.length);

      setTimeout(() => {
        if (incoming.length !== 2) {
          const challenge = createChallenge(3);
          setIncoming(
            incoming.concat({
              id: uuid(),
              challenge: challenge,
              timeout: setTimeout(fail, 5000),
            })
          );
        }
      }, length);
    },
    [incoming]
  );

  return (
    <div className={mainContainer}>
      <Game
        attacks={{ incoming, setIncoming }}
        enemies={{ badGuys, setBadGuys }}
        youLose={youLose}
      />
      <Dashboard
        inputs={{ inputColours, setInputColours: updateInputs }}
        attacks={{ incoming, setIncoming }}
        ready={{ isReady, setIsReady }}
        enemies={{ badGuys, setBadGuys }}
      />
    </div>
  );
};

const useStyles = createUseStyles({
  mainContainer: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default App;
