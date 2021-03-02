import React from "react";
import { createUseStyles } from "react-jss";
import ColourButtons from "./colour-buttons";
import Inputs from "./inputs";
import Challenges from "./challenges";

const Dashboard = ({ inputs, attacks, enemies, ready }) => {
  const { container } = useStyles();

  return (
    <div className={container}>
      <div>
        <Inputs inputs={inputs} />
        <ColourButtons inputs={inputs} />
      </div>
      <div>
        <Challenges ready={ready} enemies={enemies} attacks={attacks} />
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 5,
    background: "#BBB",
    borderRadius: 4,
    padding: "5px 0",
    width: "620px",
  },
});

export default Dashboard;
