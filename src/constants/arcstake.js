const week = 7;
const month = 30;
const year = 365;

const arcstake = {
  egld: ' eGLD',
  stakePerNode: 2500,
  protocolSustainability: 0.1,
  numNodes: 3200,
  topUpFactor: 0.25,
  topUpGradient: 3000000,
  genesisTokenSupply: 20000000,
  inflation: [
    0.1084513, 0.09703538, 0.08561945, 0.07420352, 0.0627876, 0.05137167,
    0.03995574, 0.02853982, 0.01712389, 0.00570796,
  ],
};

const rewardsPerEpoch =
  (arcstake.genesisTokenSupply * arcstake.inflation[0]) / year;
const rewardsPerEpochWithoutProtocolSustainability =
  (1 - arcstake.protocolSustainability) * rewardsPerEpoch;
const topupRewardsLimit =
  arcstake.topUpFactor * rewardsPerEpochWithoutProtocolSustainability;
const networkBaseStake = arcstake.numNodes * arcstake.stakePerNode;

export {
  arcstake,
  topupRewardsLimit,
  networkBaseStake,
  rewardsPerEpochWithoutProtocolSustainability,
  week,
  month,
  year,
};
