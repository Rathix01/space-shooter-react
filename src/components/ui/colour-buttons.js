import React from "react";
import { createUseStyles } from "react-jss";
import { colorOptions } from "../data/config";
import uuid from "react-uuid";

const ColourButtons = ({ inputs }) => {
  const { container, colourButton } = useStyles();

  return (
    <div className={container}>
      {colorOptions.map((color) => {
        return (
          <div
            key={uuid()}
            className={colourButton}
            style={{ background: color }}
            onClick={() => {
              if (inputs.inputColours.length > 3) {
                inputs.setInputColours([]);
              } else {
                inputs.setInputColours(inputs.inputColours.concat(color));
              }
            }}
          ></div>
        );
      })}
      <div>
        <button onClick={() => inputs.setInputColours([])}>Clear</button>
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
    padding: "5px 0",
    border: "solid 1px #000",
    borderRadius: 4,
    flex: 1,
  },
  colourButton: {
    height: 60,
    minWidth: 60,
    margin: 5,
    borderRadius: 4,
    filter: "drop-shadow(1px 1px 2px #333)",

    "&:active": {
      filter: "none",
    },
  },
});

export default ColourButtons;
