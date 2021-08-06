/* eslint-disable import/prefer-default-export */

const sliceStringFromTo = (string, from, to) => `${string.slice(0, from)}...${string.slice(to)}`;

export {
  sliceStringFromTo,
};
