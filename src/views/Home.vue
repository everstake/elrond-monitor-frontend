<template>
  <div class="home" :class="{ 'home--dark-mode': darkModeOn }">
    <div class="wrapper">
      <b-row class="mb-3 g-3">
        <b-col cols="12" xs="12" sm="6" md="6" lg="3">
          <b-card
            :class="{ 'card--dark-mode': darkModeOn }"
            :header-class="{ 'card-header--dark-mode': darkModeOn }"
          >
            <template #header> Price at the moment and All time high</template>

              <template>
                <div class="card-amount mt-2 mb-2">$1000</div>

              <div class="price">
                <div class="d-flex justify-content-between">
                  <span class="price__value">Current price: $80</span>
                  <span class="price__percent">
                    2%
                    <b-icon icon="arrow-up-right" />
                  </span>
                </div>

                <div>
                  <span class="price__value">Volume 24h: $77,889</span>
                </div>
              </div>
            </template>
          </b-card>
        </b-col>

        <b-col cols="12" xs="12" sm="6" md="6" lg="3">
          <b-card :class="{ 'card--dark-mode': darkModeOn }">
            <template #header>Market cap</template>

              <template>
                <div class="card-amount mt-2 mb-2">$1000</div>

              <div class="price">
                <div class="d-flex justify-content-between">
                  <span class="price__value">Current price: $80</span>
                  <span class="price__percent">
                    2%
                    <b-icon icon="arrow-up-right"
                  /></span>
                </div>

                <div>
                  <span class="price__value">Volume 24h: $77,889</span>
                </div>
              </div>
            </template>
          </b-card>
        </b-col>

        <b-col cols="12" xs="12" sm="6" md="6" lg="3">
          <b-card :class="{ 'card--dark-mode': darkModeOn }">
            <template #header>Circulating supply</template>

              <template>
                <div class="card-amount mt-2 mb-2">$1000</div>

              <div class="price">
                <div class="d-flex justify-content-between">
                  <span class="price__value">Current price: $80</span>
                  <span class="price__percent">
                    2%
                    <b-icon icon="arrow-up-right" />
                  </span>
                </div>

                <div>
                  <span class="price__value">Volume 24h: $77,889</span>
                </div>
              </div>
            </template>
          </b-card>
        </b-col>

        <b-col cols="12" xs="12" sm="6" md="6" lg="3">
          <b-card :class="{ 'card--dark-mode': darkModeOn }">
            <template #header>Trading volume</template>

              <template>
                <div class="card-amount mt-2 mb-2">100,000</div>

              <div class="price">
                <div class="d-flex justify-content-between">
                  <span class="price__value">Current price: $80</span>
                  <span class="price__percent">
                    2%
                    <b-icon icon="arrow-up-right" />
                  </span>
                </div>

                <div>
                  <span class="price__value">Volume 24h: $77,889</span>
                </div>
              </div>
            </template>
          </b-card>
        </b-col>
      </b-row>

        <b-row class="mb-3 g-3">
          <b-col cols="12" lg="6">
            <b-row class="g-3">
              <b-col cols="12" xs="12" sm="6" md="6" lg="6">
                <b-card
                  :class="{ 'card--dark-mode': darkModeOn }"
                  body-class="position-relative"
                >
                  <template #header>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <span>Epoch</span>
                      <span class="fw-bold">196</span>
                    </div>
                  </template>

                  <template>
                    <DoughnutChart
                      :props-options="optionsDoughnutChart"
                      :chart-data="getEpochData()"
                      class="h-100 position-relative"
                      :height="100"
                    />
                    <div class="card-epoch--position">
                      <img src="~@/assets/img/epochIcon.svg" width="100%" />
                    </div>
                  </template>
                </b-card>
              </b-col>

              <b-col cols="12" xs="12" sm="6" md="6" lg="6">
                <b-card
                  :class="{ 'card--dark-mode': darkModeOn }"
                  body-class="p-0"
                >
                  <template #header>Accounts</template>

                  <template>
                    <LineChart
                      ref="chart"
                      class="h-100 position-relative"
                      :props-options="optionsLineChart"
                      :chart-data="getAccountData()"
                      :height="100"
                    />
                    <span class="card-amount card-amount--position"
                      >196,546</span
                    >
                  </template>
                </b-card>
              </b-col>

            <b-col cols="12" xs="12" sm="6" md="6" lg="6">
              <b-card
                :class="{ 'card--dark-mode': darkModeOn }"
                body-class="d-flex"
              >
                <template #header>Block height</template>

                  <template>
                    <span class="align-self-end card-amount mt-2"
                      >19,246,0490</span
                    >
                  </template>
                </b-card>
              </b-col>

              <b-col cols="12" xs="12" sm="6" md="6" lg="6">
                <b-card
                  :class="{ 'card--dark-mode': darkModeOn }"
                  body-class="p-0"
                >
                  <template #header>Transactions</template>

                  <template>
                    <LineChart
                      ref="chart"
                      class="h-100 position-relative"
                      :props-options="optionsLineChart"
                      :chart-data="getTransactionData()"
                      :height="100"
                    />
                    <span class="card-amount card-amount--position"
                      >16,297,098</span
                    >
                  </template>
                </b-card>
              </b-col>
            </b-row>
          </b-col>

        <b-col cols="12" md="12" lg="6">
          <b-card :class="{ 'card--dark-mode': darkModeOn }" class="h-100">
            <template #header> Validators </template>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LineChart from '../components/charts/LineChart.vue';
import DoughnutChart from '../components/charts/DoughnutChart.vue';

export default {
  name: 'Home',
  components: {
    LineChart,
    DoughnutChart,
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
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        cutoutPercentage: 90,
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
    ...mapGetters(['darkModeOn']),
  },
  mounted() {
    this.gradientAccount = this.$refs.chart.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 200);
    this.gradientAccount.addColorStop(0, 'rgba(249, 134, 0, 1)');
    this.gradientAccount.addColorStop(1, 'rgba(249, 134, 0, 0)');

    this.gradientTransaction = this.$refs.chart.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 200);
    this.gradientTransaction.addColorStop(0, 'rgba(0,186,52, 1)');
    this.gradientTransaction.addColorStop(1, 'rgba(0,186,52, 0)');
  },
  methods: {
    getAccountData() {
      return {
        labels: ['a', 'b', 'c', 'e', 'f'],
        datasets: [
          {
            backgroundColor: this.gradientAccount,
            borderColor: '#F98600',
            data: [200, 210, 205, 215, 240, 250, 280],
          },
        ],
      };
    },
    getTransactionData() {
      return {
        labels: ['a', 'b', 'c', 'e', 'f'],
        datasets: [
          {
            backgroundColor: this.gradientTransaction,
            borderColor: '#00ba34',
            data: [200, 250, 230, 280, 300, 320, 300],
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
            data: [45, 100],
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

  &.home--dark-mode {
    background-color: $eerie-black;
  }
}
.card {
  height: 223px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  text-align: start;

  .card-header {
    margin: 0 1rem;
    padding: 0.25rem 0 1rem;
    background-color: transparent;
    border-bottom-color: $gray;

    &--dark-mode {
      border-bottom-color: $main-white;
    }
  }

  .card-body {
    padding-top: 0;
    padding-bottom: 0;
  }

  &.card--dark-mode {
    background-color: $black;
    color: white;
  }

  &-epoch--position {
    position: absolute;
    top: 0;
    left: 50%;
  }

  &-amount {
    font-size: $fs-48;
    font-weight: 500;
    &--position {
      position: absolute;
      left: 1rem;
      bottom: 0;
    }
  }
}

.price {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  &__value {
    color: $dark-gary;
  }

  &__percent {
    color: $light-green;
    padding: 2px 6px;
    background: linear-gradient(
        0deg,
        rgba(0, 186, 52, 0.1),
        rgba(0, 186, 52, 0.1)
      ),
      $main-white;
    border-radius: 6px;
  }
}
</style>
