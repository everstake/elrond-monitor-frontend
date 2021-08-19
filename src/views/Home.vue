<template>
  <div class="home" :class="{ 'home--dark-mode': darkModeOn }">
    <div class="container-lg home-container">
      <div class="home-row">
        <b-card
          class="card-price"
          :class="{ 'card--dark-mode': darkModeOn }"
          :header-class="{ 'card-header--dark-mode': darkModeOn }"
        >
          <template #header> Price at the moment and All time high</template>

          <template>
            <AppSpinner v-if="!loadingStatus" />

            <div v-else class="card-body--info">
              <div class="card-amount">{{ stats.price | formatUSD }}</div>

              <span
                class="card-amount__percent"
                :class="{
                  'card-amount__percent--up': stats.price_change > 0,
                  'card-amount__percent--down': stats.price_change < 0,
                }"
              >
                {{ formatStats(stats.price_change) }}%

                <b-icon v-if="stats.price_change > 0" icon="arrow-up-right" />
                <b-icon v-else icon="arrow-down-left" />
              </span>
            </div>
          </template>
        </b-card>

        <b-card class="card-price" :class="{ 'card--dark-mode': darkModeOn }">
          <template #header>Market cap</template>

          <template>
            <AppSpinner v-if="!loadingStatus" />

            <div v-else class="card-body--info">
              <div class="card-amount">{{ stats.cap | formatUSD }}</div>

              <span
                class="card-amount__percent"
                :class="{
                  'card-amount__percent--up': stats.cap_change > 0,
                  'card-amount__percent--down': stats.cap_change < 0,
                }"
              >
                {{ formatStats(stats.cap_change) }}%

                <b-icon v-if="stats.cap_change > 0" icon="arrow-up-right" />
                <b-icon v-else icon="arrow-down-left" />
              </span>
            </div>
          </template>
        </b-card>

        <b-card class="card-price" :class="{ 'card--dark-mode': darkModeOn }">
          <template #header>Circulating supply</template>

          <template>
            <AppSpinner v-if="!loadingStatus" />

            <div v-else class="card-body--info">
              <div class="card-amount">
                {{ stats.circulating_supply | formatUSD }}
              </div>
            </div>
          </template>
        </b-card>

        <b-card class="card-price" :class="{ 'card--dark-mode': darkModeOn }">
          <template #header>Trading volume</template>

          <template>
            <AppSpinner v-if="!loadingStatus" />

            <div v-else class="card-body--info">
              <div class="card-amount">
                {{ stats.trading_volume | formatUSD }}
              </div>
            </div>
          </template>
        </b-card>

        <b-card class="card-price" :class="{ 'card--dark-mode': darkModeOn }">
          <template #header>Total supply</template>

          <template>
            <AppSpinner v-if="!loadingStatus" />

            <div v-else class="card-body--info">
              <div class="card-amount">
                {{ stats.total_supply | formatUSD }}
              </div>
            </div>
          </template>
        </b-card>
      </div>

      <div class="wrapper-charts">
        <div class="home-row home-row--width">
          <b-card
            class="card-chart"
            :class="{ 'card--dark-mode': darkModeOn }"
            body-class="doughnut pt-3"
          >
            <template #header>
              <div class="d-flex justify-content-between align-items-center">
                <span>Epoch</span>
                <span
                  v-if="epochDoughnut.epoch_number"
                  class="font-weight-bold"
                >
                  {{ epochDoughnut.epoch_number }}
                </span>
              </div>
            </template>

            <template>
              <DoughnutChart
                ref="doughnut"
                :props-options="optionsDoughnutChart"
                :chart-data="getEpochData()"
                :height="120"
              />

              <div class="doughnut__percent">
                <img src="~@/assets/img/epochIcon.svg" alt="Elrond" />
                <span> {{ percent || '0' }}% </span>
              </div>

              <div class="doughnut__info">
                <span>since {{ since || '0' }}</span>
                <span>left {{ epochDoughnut.left | formatDuration }}</span>
              </div>
            </template>
          </b-card>

          <b-card
            class="card-chart"
            :class="{ 'card--dark-mode': darkModeOn }"
            body-class="pt-3 p-0"
          >
            <template #header>Accounts</template>

            <template>
              <LineChart
                ref="chart"
                class="home__charts"
                :props-options="optionsLineChart"
                :chart-data="getAccountData()"
              />
              <span class="card-amount card-amount--position">
                {{ formatStats(stats.total_accounts) }}
              </span>
            </template>
          </b-card>

          <b-card
            class="card-chart"
            :class="{ 'card--dark-mode': darkModeOn }"
            body-class="d-flex"
          >
            <template #header>Block height</template>

            <template>
              <span class="align-self-end card-amount mt-2">
                {{ formatStats(stats.height) }}
              </span>
            </template>
          </b-card>

          <b-card
            class="card-chart"
            :class="{ 'card--dark-mode': darkModeOn }"
            body-class="pt-3 p-0"
          >
            <template #header>Transactions</template>

            <template>
              <LineChart
                ref="chart"
                class="home__charts"
                :props-options="optionsLineChart"
                :chart-data="getTransactionData()"
              />
              <span class="card-amount card-amount--position">
                {{ formatStats(stats.total_txs) }}
              </span>
            </template>
          </b-card>
        </div>

        <b-card
          class="map-wrapper"
          :class="{ 'card--dark-mode': darkModeOn }"
          body-class="p-0"
        >
          <template #header> Validators </template>

          <template>
            <ValidatorsMap />
          </template>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import numeral from 'numeral';
import moment from 'moment';
import LineChart from '../components/charts/LineChart.vue';
import DoughnutChart from '../components/charts/DoughnutChart.vue';
import ValidatorsMap from '../components/ValidatorsMap.vue';
import AppSpinner from '../components/AppSpinner.vue';

export default {
  name: 'Home',
  components: {
    LineChart,
    DoughnutChart,
    ValidatorsMap,
    AppSpinner,
  },
  data() {
    return {
      gradientAccount: null,
      gradientTransaction: null,
      optionsLineChart: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0,
          },
        },
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              type: 'logarithmic',
              display: false,
              ticks: {
                display: false,
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
      },
      optionsDoughnutChart: {
        display: false,
        rotation: Math.PI,
        circumference: Math.PI,
        cutoutPercentage: 85,
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    ...mapGetters([
      'darkModeOn',
      'accountsChart',
      'transactionsChart',
      'stats',
      'epochDoughnut',
      'loadingStatus',
    ]),
    since() {
      return moment(this.epochDoughnut.start * 1000).format('DD.MM.YYYY');
    },
    percent() {
      return Math.round(this.epochDoughnut.percent);
    },
  },
  mounted() {
    this.fetchAccountsChart();
    this.fetchTransactionsChart();
    this.fetchStats();
    this.fetchEpochDoughnut();

    this.gradientAccount = this.$refs.chart.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 140);
    this.gradientAccount.addColorStop(0, 'rgba(249, 134, 0, 1)');
    this.gradientAccount.addColorStop(1, 'rgba(249, 134, 0, 0)');

    this.gradientTransaction = this.$refs.chart.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 140);
    this.gradientTransaction.addColorStop(0, 'rgba(0,186,52, 1)');
    this.gradientTransaction.addColorStop(1, 'rgba(0,186,52, 0)');
  },
  methods: {
    ...mapActions([
      'fetchAccountsChart',
      'fetchTransactionsChart',
      'fetchStats',
      'fetchEpochDoughnut',
    ]),
    formatStats(val) {
      if (!val) {
        return '0';
      }
      return numeral(val).format('0,0.[0]');
    },
    getAccountData() {
      return {
        labels: [...this.accountsChart.map(({ time }) => time)],
        datasets: [
          {
            backgroundColor: this.gradientAccount,
            borderColor: '#F98600',
            data: [...this.accountsChart.map(({ value }) => value)],
          },
        ],
      };
    },
    getTransactionData() {
      return {
        labels: [...this.transactionsChart.map(({ time }) => time)],
        datasets: [
          {
            backgroundColor: this.gradientTransaction,
            borderColor: '#00ba34',
            data: [...this.transactionsChart.map(({ value }) => value)],
          },
        ],
      };
    },
    getEpochData() {
      return {
        datasets: [
          {
            backgroundColor: ['rgba(0, 133, 255, 1)', 'rgba(0, 133, 255, 0.2)'],
            borderWidth: 0,
            data: [
              this.epochDoughnut.percent,
              100 - this.epochDoughnut.percent,
            ],
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss">
.home {
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;

  &__charts {
    position: relative;
    display: block;
    height: 100%;
  }

  &-container {
    display: flex;
    flex-direction: column;
    gap: $gap-1rem;
  }

  &.home--dark-mode {
    background-color: $eerie-black;
  }

  &-row {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: $gap-1rem;

    @include lg-down {
      justify-content: center;
    }

    &--width {
      flex: 0 0 calc(99% / 2);
      flex-wrap: wrap;

      @include lg-down {
        justify-content: center;
      }
    }
  }
}

.home .card {
  &-price {
    flex: 0 1 $home-card;
    height: 150px;
  }
  &-chart {
    flex: 0 1 $home-card;
  }
}

.wrapper-charts {
  display: flex;
  justify-content: flex-start;
  gap: $gap-1rem;

  @include xl-down {
    justify-content: center;
    flex-direction: column;
  }
}

.map-wrapper {
  height: 100% !important;
  flex: 1 0 auto;

  @include xl-down {
    height: 400px !important;
  }
}

.doughnut {
  position: relative;

  &__percent {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    @include font($roboto-font, 24px, $main-blue, 800);
  }

  &__info {
    display: flex;
    justify-content: space-between;
    @include font($roboto-font, $fs-14, $dark-gary);
  }
}
</style>
