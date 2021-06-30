// eslint-disable-next-line import/prefer-default-export
export const toFixedNum = (val, step = 2) => {
  return (val * 100).toFixed(step);
};
