<template>
  <b-container>
    <div :class="['epoch', darkModeClassBackground]">
      <div class="epoch__title">
        <h1 :class="[darkModeClassTitle]">Epoch</h1>

        <span>{{ epochDoughnut.epoch_number }}</span>
      </div>

      <div :class="['epoch__progress', 'epoch__card']">
        <div class="epoch__progress-info time">
          <div class="time__info">
            <span :class="darkModeClassFonts">since</span>
            <h1>
              {{ $_since(epochDoughnut.start) }}
            </h1>
          </div>

          <div class="time__info">
            <span :class="darkModeClassFonts">left</span>
            <h1>
              {{ epochDoughnut.left | formatDuration }}
            </h1>
          </div>
        </div>

        <div class="epoch__progress-bar">
          <span>{{ $_epochPercent(epochDoughnut.percent) }}%</span>
          <b-progress :value="epochDoughnut.percent" max="100" />
        </div>
      </div>

      <div class="epoch__card epoch__wrapper-chart">
        <div class="epoch__card-header">
          <span>Changes to total stake</span>

          <CustomDatePicker :request-name="fetchStakeRange" />
        </div>
        <LineChart ref="chart" :chart-data="getStakeRangeData()" />
      </div>

      <div class="epoch__card epoch__wrapper-chart">
        <div class="epoch__card-header">
          <span>Changes to price</span>

          <CustomDatePicker :request-name="fetchPriceRange" />
        </div>
        <LineChart ref="chart" :chart-data="getPriceRangeData()" />
      </div>

      <div class="epoch__card epoch__wrapper-chart">
        <div class="epoch__card-header">
          <span>Changes to delegators</span>

          <CustomDatePicker :request-name="fetchDelegatorsRange" />
        </div>
        <LineChart ref="chart" :chart-data="getDelegatorsRangeData()" />
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import epochPercent from '../mixins/epochPercent';
import LineChart from '../components/charts/LineChart.vue';
import CustomDatePicker from '../components/CustomDatePicker.vue';

export default {
  name: 'Epoch',
  components: { LineChart, CustomDatePicker },
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
      'darkModeClassBackground',
      'darkModeClassTitle',
      'darkModeClassFonts',
      'epochDoughnut',
      'stakeRange',
      'priceRange',
      'delegatorsRange',
    ]),
  },
  mounted() {
    this.fetchEpochDoughnut();

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
        labels: [...this.stakeRange.map(({ time }) => time)],
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
        labels: [...this.priceRange.map(({ time }) => time)],
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
        labels: [...this.delegatorsRange.map(({ time }) => time)],
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
    padding: 41px 55px;

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
    height: 100%;
    width: 100%;
    padding: 30px 54px 30px 20px;
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
</style>
