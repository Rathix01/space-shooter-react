import { colorOptions } from "../data/config";
import { times, equals } from "ramda";

export const createChallenge = (count) => {
  return times(() => {
    return colorOptions[Math.floor(Math.random() * colorOptions.length)];
  }, count);
};

export const eqValues = (a1, a2, type) =>
  type === "attack"
    ? a1[0] === a2[0] && a1[1] === a2[1] && a1[2] === a2[2] && a1[3] === a2[3]
    : a1[0] === a2[0] && a1[1] === a2[1] && a1[2] === a2[2];
