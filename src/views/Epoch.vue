<template>
  <b-container>
    <div :class="['epoch', darkModeClassBackground]">
      <template>
        <div class="epoch__title">
          <h1 :class="[darkModeClassTitle]">Epoch</h1>

          <span>{{ epochDoughnut.epoch_number }}</span>
        </div>

        <div
          :class="[
            'epoch__progress',
            'epoch__card',
            { 'dark-mode-bg': darkModeOn },
          ]"
        >
          <AppSpinner v-if="isLoadingEpoch" size-bool />
          <div
            v-else-if="
              Object.keys(epochDoughnut).length === 0 && !isLoadingEpoch
            "
            :class="[
              'd-flex justify-content-center align-items-center mb-3 h-100',
              darkModeClassFonts,
            ]"
          >
            Not data
          </div>
          <template v-else>
            <div class="epoch__progress-info time">
              <div class="time__info">
                <span :class="darkModeClassFonts">since</span>
                <h1 :class="darkModeClassTitle">
                  {{ $_since(epochDoughnut.start) }}
                </h1>
              </div>

              <div class="time__info">
                <span :class="darkModeClassFonts">left</span>
                <h1 :class="darkModeClassTitle">
                  {{ epochDoughnut.left | formatDuration }}
                </h1>
              </div>
            </div>

            <div class="epoch__progress-bar">
              <span>{{ $_epochPercent(epochDoughnut.percent) }}%</span>
              <b-progress :value="epochDoughnut.percent" max="100" />
            </div>
          </template>
        </div>
      </template>

      <div
        :class="[
          'epoch__card',
          'epoch__wrapper-chart',
          { 'dark-mode-bg': darkModeOn },
        ]"
      >
        <div class="epoch__card-header">
          <span :class="darkModeClassTitle">Changes to total stake</span>

          <CustomDatePicker :request-name="fetchStakeRange" />
        </div>

        <AppSpinner v-if="isLoadingStakeRange" size-bool />
        <div
          v-else-if="stakeRange.length === 0 && !isLoadingStakeRange"
          :class="[
            'd-flex justify-content-center align-items-center mb-3 h-100',
            darkModeClassFonts,
          ]"
        >
          Not data
        </div>
        <LineChart v-else ref="chart" :chart-data="getStakeRangeData()" />
      </div>

      <div
        :class="[
          'epoch__card',
          'epoch__wrapper-chart',
          { 'dark-mode-bg': darkModeOn },
        ]"
      >
        <div class="epoch__card-header">
          <span :class="darkModeClassTitle">Changes to price</span>

          <CustomDatePicker :request-name="fetchPriceRange" />
        </div>

        <AppSpinner v-if="isLoadingPriceRange" size-bool />
        <div
          v-else-if="priceRange.length === 0 && !isLoadingPriceRange"
          :class="[
            'd-flex justify-content-center align-items-center mb-3 h-100',
            darkModeClassFonts,
          ]"
        >
          Not data
        </div>
        <LineChart v-else ref="chart" :chart-data="getPriceRangeData()" />
      </div>

      <div
        :class="[
          'epoch__card',
          'epoch__wrapper-chart',
          { 'dark-mode-bg': darkModeOn },
        ]"
      >
        <div class="epoch__card-header">
          <span :class="darkModeClassTitle">Changes to delegators</span>

          <CustomDatePicker :request-name="fetchDelegatorsRange" />
        </div>

        <AppSpinner v-if="isLoadingDelegatorsRange" size-bool />
        <div
          v-else-if="delegatorsRange.length === 0 && !isLoadingDelegatorsRange"
          :class="[
            'd-flex justify-content-center align-items-center mb-3 h-100',
            darkModeClassFonts,
          ]"
        >
          Not data
        </div>
        <LineChart v-else ref="chart" :chart-data="getDelegatorsRangeData()" />
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import epochPercent from '../mixins/epochPercent';
import LineChart from '../components/charts/LineChart.vue';
import CustomDatePicker from '../components/CustomDatePicker.vue';
import AppSpinner from '../components/app/AppSpinner.vue';

export default {
  name: 'Epoch',
  components: { LineChart, CustomDatePicker, AppSpinner },
  mixins: [epochPercent],
  data() {
    return {
      gradientStake: null,
      gradientPrice: null,
      gradientDelegators: null,
    };
  },
  computed: {
    ...mapGetters([
      'darkModeOn',
      'darkModeClassBackground',
      'darkModeClassTitle',
      'darkModeClassFonts',
      'epochDoughnut',
      'stakeRange',
      'priceRange',
      'delegatorsRange',
      'isLoadingEpoch',
      'isLoadingStakeRange',
      'isLoadingPriceRange',
      'isLoadingDelegatorsRange',
    ]),
  },
  async mounted() {
    await this.fetchEpochDoughnut();

    if (this.$refs.chart) {
      this.gradientStake = this.$refs.chart.$refs.canvas
        .getContext('2d')
        .createLinearGradient(0, 0, 0, 350);
      this.gradientStake.addColorStop(0, 'rgba(249, 134, 0, 1)');
      this.gradientStake.addColorStop(1, 'rgba(249, 134, 0, 0)');

      this.gradientPrice = this.$refs.chart.$refs.canvas
        .getContext('2d')
        .createLinearGradient(0, 0, 0, 350);
      this.gradientPrice.addColorStop(0, 'rgba(0,186,52, 1)');
      this.gradientPrice.addColorStop(1, 'rgba(0,186,52, 0)');

      this.gradientDelegators = this.$refs.chart.$refs.canvas
        .getContext('2d')
        .createLinearGradient(0, 0, 0, 350);
      this.gradientDelegators.addColorStop(0, 'rgba(233, 44, 44, 1)');
      this.gradientDelegators.addColorStop(1, 'rgba(233, 44, 44, 0)');
    }
  },
  methods: {
    ...mapActions([
      'fetchEpochDoughnut',
      'fetchStakeRange',
      'fetchPriceRange',
      'fetchDelegatorsRange',
    ]),
    getStakeRangeData() {
      return {
        labels: [...this.stakeRange.map(({ time }) => time * 1000)],
        datasets: [
          {
            borderColor: '#F98600',
            backgroundColor: this.gradientStake,
            data: [...this.stakeRange.map(({ value }) => value)],
          },
        ],
      };
    },
    getPriceRangeData() {
      return {
        labels: [...this.priceRange.map(({ time }) => time * 1000)],
        datasets: [
          {
            borderColor: '#00ba34',
            backgroundColor: this.gradientPrice,
            data: [...this.priceRange.map(({ value }) => value)],
          },
        ],
      };
    },
    getDelegatorsRangeData() {
      return {
        labels: [...this.delegatorsRange.map(({ time }) => time * 1000)],
        datasets: [
          {
            borderColor: '#E92C2C',
            backgroundColor: this.gradientDelegators,
            data: [...this.delegatorsRange.map(({ value }) => value)],
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss">
.epoch {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 19px 54px 54px;
  border-radius: $border-radius-card;

  @include sm-down {
    padding: 10px;
  }

  &__card {
    border-radius: $border-radius-card;
    background-color: $gray;

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px 40px;

      & span {
        @include font(24px, $font-black, 500);
      }

      @include sm-down {
        flex-direction: column;
        gap: 10px;
      }
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-size: 36px;

    & span {
      @include font(32px, $main-blue, 500);
    }
  }

  &__progress {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 41px 55px;

    @include sm-down {
      padding: 20px 10px;
    }

    &-info {
      display: flex;
      justify-content: space-between;
    }

    &-bar {
      text-align: center;
      & > span {
        @include font(30px, $main-blue, 500);
      }
    }
  }

  &__wrapper-chart {
    position: relative;
    min-height: 540px;
    height: 100%;
    width: 100%;
    padding: 30px 54px 30px 20px;

    @include sm-down {
      padding: 5px;
    }
  }
}
.progress {
  background-color: rgba(0, 133, 255, 0.3);
}

.time {
  &__info {
    & h1 {
      font-size: 24px;
    }
  }
}

.dark-mode-bg {
  background-color: $body-dark !important;
}
</style>
