<template>
  <div class="home" :class="{ 'home--dark-mode': darkModeOn }">
    <div class="wrapper">
      <b-row class="mb-3 g-3">
          <b-col cols="12" xs="12" sm="6" md="6" lg="3">
            <b-card
              :class="{ 'card--dark-mode': darkModeOn }"
              :header-class="{ 'card-header--dark-mode': darkModeOn }"
            >
              <template #header>
                Price at the moment and All time high</template
              >

              <template>
                <div class="fw-bold fs-2 mt-3 mb-3">$1000</div>

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
                <div class="fw-bold fs-2 mt-3 mb-3">$1000</div>

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
                <div class="fw-bold fs-2 mt-3 mb-3">$1000</div>

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
                <div class="fw-bold fs-2 mt-3 mb-3">100,000</div>

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
                  body-class="card-wrapper__epoch"
                >
                  <template #header>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <span>Epoch</span>
                      <span class="fw-bold">196</span>
                    </div>
                  </template>

                  <template></template>
                </b-card>
              </b-col>

              <b-col cols="12" xs="12" sm="6" md="6" lg="6">
                <b-card
                  :class="{ 'card--dark-mode': darkModeOn }"
                  body-class="d-flex card-wrapper__account"
                >
                  <template #header>Accounts</template>

                  <template>
                    <span class="align-self-end fw-bold fs-1">196,546</span>
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
                    <span class="align-self-end fw-bold fs-1">19,246,0490</span>
                  </template>
                </b-card>
              </b-col>

              <b-col cols="12" xs="12" sm="6" md="6" lg="6">
                <b-card
                  :class="{ 'card--dark-mode': darkModeOn }"
                  body-class="d-flex card-wrapper__transaction"
                >
                  <template #header>Transactions</template>

                  <template>
                    <span class="align-self-end fw-bold fs-1">16,297,098</span>
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

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      listCards: [],
    };
  },
  computed: {
    ...mapGetters(['darkModeOn']),
  },
};
</script>

<style lang="scss">
.home {
  text-align: center;
  display: flex;
  justify-content: center;

  &.home--dark-mode {
    background-color: #1c1c1c;
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
    border-bottom-color: #e8e8e8;

    &--dark-mode {
      border-bottom-color: #fff;
    }
  }

  .card-body {
    padding-top: 0;
    padding-bottom: 0;
  }

  &.card--dark-mode {
    background-color: #111;
    color: white;
  }
}

.price {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  &__value {
    color: #969696;
  }

  &__percent {
    color: #00ba34;
    padding: 2px 6px;
    background: linear-gradient(
        0deg,
        rgba(0, 186, 52, 0.1),
        rgba(0, 186, 52, 0.1)
      ),
      #ffffff;
    border-radius: 6px;
  }
}
.card-wrapper {
  &__account {
    background: url('../assets/img/bgChartAccount.svg') no-repeat left 150%;
  }
  &__transaction {
    background: url('../assets/img/bgChartTransaction.svg') no-repeat left 150%;
  }
  &__epoch {
    background: url('../assets/img/bgChartEpoch.svg') no-repeat center 100%;
  }
}
</style>
