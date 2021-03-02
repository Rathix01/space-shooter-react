import React from "react";
import { createUseStyles } from "react-jss";
import uuid from "react-uuid";

const Inputs = ({ inputs }) => {
  const { container, colourBox } = useStyles();

  return (
    <div className={container}>
      {inputs.inputColours.map((colour) => {
        return (
          <div
            className={colourBox}
            style={{ background: colour }}
            key={uuid()}
          ></div>
        );
      })}
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
    minHeight: 50,
    border: "solid 1px #000",
    borderRadius: 4,
    flex: 1,
  },
  colourBox: {
    height: 30,
    minWidth: 30,
    margin: 5,
    borderRadius: 4,
  },
});

export default Inputs;
