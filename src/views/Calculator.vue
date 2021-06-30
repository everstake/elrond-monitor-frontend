<template>
  <div class="d-flex flex-column justify-content-center mt-4">
    <header>
      <h1 class="text-center">Elrond Delegation - APY Calculator</h1>
    </header>
    <div class="container">
      <div class="row my-5">
        <div class="col-12">
          <b-form
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <b-input-group class="flex-row align-items-center mb-3">
              <label class="col-md-3 col-form-label var-label-md"
                >Network Total Stake:</label
              >

              <b-form-input
                v-model="totalStake"
                v-b-tooltip
                type="range"
                class="col-md-6"
                min="8000000"
                max="13000000"
                step="500000"
              />

              <span class="ms-3">{{ totalStake }}</span>
            </b-input-group>

            <b-input-group class="flex-row align-items-center mb-3">
              <label class="col-md-3 col-form-label var-label-md"
                >Your Delegation:</label
              >

              <b-form-input
                v-model="userStake"
                type="range"
                class="col-md-6"
                min="1"
                max="10000"
                step="1"
              />

              <div class="ms-3">
                <b-input-group class="col-md-3">
                  <input
                    id="userStakeVal"
                    v-model="userStake"
                    type="number"
                    class="form-control"
                  />

                  <label
                    for="userStakeVal"
                    class="col-md-3 col-form-label var-label ms-2"
                    >eGLD</label
                  >
                </b-input-group>
              </div>
            </b-input-group>

            <div class="row">
              <div class="col">
                <h2 class="text-center mt-5 mb-4">Agency Variables</h2>
              </div>
            </div>

            <div class="form-group row text-center">
              <label
                for="agencyBaseStake"
                class="col-md-2 col-form-label var-label-md"
                >Base Stake (eGLD):</label
              >

              <div class="col-md-2">
                <b-form-input
                  id="agencyBaseStake"
                  v-model="agencyBaseStake"
                  type="number"
                  class="form-control apy-variable"
                />
              </div>

              <label
                for="agencyTopupStake"
                class="col-md-2 col-form-label var-label-md"
                >TopUp (eGLD):</label
              >

              <div class="col-md-2">
                <b-form-input
                  id="agencyTopupStake"
                  v-model="agencyTopupStake"
                  type="number"
                  class="form-control apy-variable"
                />
              </div>
              <label
                for="agencyFee"
                class="col-md-2 col-form-label var-label-md"
                >Fee (%):</label
              >
              <div class="col-md-2">
                <b-form-input
                  id="agencyFee"
                  v-model="agencyFee"
                  type="number"
                  class="form-control apy-variable"
                />
              </div>
            </div>

            <div class="row">
              <div class="col">
                <h2 class="text-center mt-5 mb-4">Results</h2>
              </div>
            </div>

            <div class="col-12 row justify-content-center">
              <div class="col-3 text-center">
                <b-card header="APY" class="mb-3 fw-bold">
                  <b-card-body>
                    <h2 id="delegator-apy" class="card-title">
                      {{ toFixedNum(delegatorApy) }}%
                    </h2>
                  </b-card-body>
                </b-card>
              </div>
              <div class="col-md-4 text-center">
                <b-card header="eGLD Rewards" class="fw-bold">
                  <b-card-body class="card-body">
                    <div class="row">
                      <div class="col-3">Year</div>
                      <div class="col-3">Month</div>
                      <div class="col-3">Week</div>
                      <div class="col-3">Day</div>
                    </div>
                    <div class="row fw-normal">
                      <div class="col-3 p-0">
                        <span>{{ delegatorYearly.toFixed(2) }}</span>
                      </div>
                      <div class="col-3 p-0">
                        <span>{{ delegatorMonthly.toFixed(3) }}</span>
                      </div>
                      <div class="col-3 p-0">
                        <span>{{ delegatorWeekly.toFixed(4) }}</span>
                      </div>
                      <div class="col-3 p-0">
                        <span>{{ delegatorDaily.toFixed(4) }}</span>
                      </div>
                    </div>
                  </b-card-body>
                </b-card>
              </div>
            </div>
            <div class="row justify-content-center mt-4">
              <div class="col-auto text-center">
                <b-btn variant="primary">Stake Now!</b-btn>
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    arcstake,
    rewardsPerEpochWithoutProtocolSustainability,
    networkBaseStake,
    topupRewardsLimit,
    year,
    week,
    month,
  } from '../constants/arcstake';
  import { toFixedNum } from '../utils/helpers';

  export default {
    name: 'Calculator',
    data() {
      return {
        totalStake: 8000000,
        userStake: 1000,
        agencyBaseStake: 200000,
        agencyTopupStake: 0,
        agencyFee: 15,
      };
    },
    computed: {
      networkTopupStake() {
        return Number(this.totalStake) - networkBaseStake;
      },
      networkTopupRewards() {
        if (this.networkTopupStake === 0) {
          return 0;
        }
        return (
          ((2 * topupRewardsLimit) / Math.PI) *
          Math.atan(this.networkTopupStake / arcstake.topUpGradient)
        );
      },
      networkBaseRewards() {
        return (
          rewardsPerEpochWithoutProtocolSustainability -
          this.networkTopupRewards
        );
      },
      spTotalStake() {
        return Number(this.agencyBaseStake) + Number(this.agencyTopupStake);
      },
      spBaseRewards() {
        return (
          (Number(this.agencyBaseStake) / networkBaseStake) *
          this.networkBaseRewards
        );
      },
      spTopupRewards() {
        if (this.networkTopupRewards === 0) return 0;

        return (
          (Number(this.agencyTopupStake) / this.networkTopupStake) *
          this.networkTopupRewards
        );
      },
      spAPY() {
        return (
          (year * (this.spBaseRewards + this.spTopupRewards)) /
          this.spTotalStake
        );
      },
      delegatorApy() {
        return this.spAPY - (Number(this.agencyFee) / 100) * this.spAPY;
      },
      delegatorYearly() {
        return this.delegatorApy * Number(this.userStake);
      },
      delegatorDaily() {
        return this.delegatorYearly / year;
      },
      delegatorWeekly() {
        return this.delegatorDaily * week;
      },
      delegatorMonthly() {
        return this.delegatorWeekly * month;
      },
    },
    methods: {
      toFixedNum,
    },
  };
</script>

<style scoped></style>
