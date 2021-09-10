<template>
  <b-container>
    <div :class="['calculator', darkModeClassBackground]">
      <h1 :class="['calculator__title', darkModeClassTitle]">APR Calculator</h1>

      <b-form :class="['calculator__form form', darkModeClassFonts]">
        <div class="w-100">
          <b-input-group class="form__input-group">
            <label>Network Total Stake:</label>

            <b-form-input
              v-model="totalStake"
              type="range"
              class="col-md-6"
              min="8000000"
              max="13000000"
              step="500000"
            />

            <span>{{ totalStake }} EGLD</span>
          </b-input-group>

          <b-input-group class="form__input-group">
            <label>Your Delegation:</label>

            <b-form-input
              v-model="userStake"
              type="range"
              class="col-md-6"
              min="1"
              max="10000"
              step="1"
            />

            <div class="d-flex align-items-center w-25">
              <b-form-input
                id="userStakeVal"
                v-model="userStake"
                type="number"
                class="form-control"
              />

              <label for="userStakeVal" class="ml-2">EGLD</label>
            </div>
          </b-input-group>
        </div>

        <div class="calculator__agency">
          <h2 :class="['calculator__subtitle', darkModeClassTitle]">
            Agency Variables
          </h2>

          <div class="calculator__agency-wrapper">
            <div>
              <label for="agencyBaseStake">Base Stake (EGLD):</label>

              <b-form-input
                id="agencyBaseStake"
                v-model="agencyBaseStake"
                type="number"
                class="form-control apy-variable"
              />
            </div>

            <div>
              <label for="agencyTopupStake">TopUp (EGLD):</label>

              <b-form-input
                id="agencyTopupStake"
                v-model="agencyTopupStake"
                type="number"
                class="form-control apy-variable"
              />
            </div>

            <div>
              <label for="agencyFee">Fee (%):</label>

              <b-form-input
                id="agencyFee"
                v-model="agencyFee"
                type="number"
                class="form-control apy-variable"
              />
            </div>
          </div>
        </div>

        <div class="calculator__result">
          <h2 :class="['calculator__subtitle', darkModeClassTitle]">Results</h2>

          <div class="card-result__wrapper">
            <b-card
              class="card-result__apr"
              header-class="m-0"
              body-class="body-card"
            >
              <template #header>APR</template>

              <template>
                <h3 id="delegator-apy">{{ toFixedNum(delegatorApy) }}%</h3>
              </template>
            </b-card>

            <b-card class="card-result__rewards" header-class="m-0">
              <template #header>EGLD Rewards</template>

              <template>
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
              </template>
            </b-card>
          </div>
        </div>

        <div class="row justify-content-center mt-4">
          <div class="col-auto text-center">
            <b-btn variant="primary">Learn More</b-btn>
          </div>
        </div>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters([
      'darkModeClassBackground',
      'darkModeClassTitle',
      'darkModeClassFonts',
    ]),
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
        rewardsPerEpochWithoutProtocolSustainability - this.networkTopupRewards
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
        (year * (this.spBaseRewards + this.spTopupRewards)) / this.spTotalStake
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

<style lang="scss">
.calculator {
  display: flex;
  flex-direction: column;
  border-radius: $border-radius-card;
  padding: 20px 50px 45px;

  &__title {
    margin-bottom: 38px;
    @include font(36px, $main-black, 500);
    text-align: center;
  }

  &__subtitle {
    @include font(32px, $main-black, 500);
    text-align: center;
    margin-bottom: 28px;
  }

  &__agency {
    display: flex;
    flex-direction: column;
    margin-top: 90px;

    &-wrapper {
      display: flex;
      gap: 4rem;

      & > div {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;

        & .form-control {
          width: auto;
        }

        @include md-down {
          justify-content: space-between;
        }
      }

      @include md-down {
        flex-direction: column;
      }
    }
  }

  &__result {
    display: flex;
    flex-direction: column;
    margin-top: 74px;

    & .card {
      height: 150px;
      background-color: #00ba34;

      @include md-down {
        width: 320px;
      }

      &-header {
        color: $main-white;
        border-bottom-color: $main-white;
      }

      &-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      &-result {
        &__wrapper {
          display: flex;
          justify-content: center;
          gap: 2rem;

          @include md-down {
            flex-direction: column;
          }
        }

        &__apr {
          flex: 0 0 200px;
          text-align: center;

          & h3 {
            @include font(32px, $main-white, 500);
          }

          @include md-down {
            flex-basis: auto;
          }
        }

        &__rewards {
          flex: 0 0 400px;
          text-align: center;
          color: #fff;

          @include md-down {
            flex-basis: auto;
          }
        }
      }
    }
  }
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;

  & .custom-range {
    border: none;
    background-color: transparent;

    &:focus {
      box-shadow: none;
    }
  }

  &__input-group {
    display: flex;
    align-items: center;
    gap: 1rem;

    & label {
      width: 200px;
    }
  }
}
</style>