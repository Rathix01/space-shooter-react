import React from "react";
import { createUseStyles } from "react-jss";

const ColourList = ({}) => {
  const { container } = useStyles();

  return <div className={container}></div>;
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
});

export default ColourList;
