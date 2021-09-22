<template>
  <b-container :class="['ranking ranking-card ', darkModeClassBackground]">
    <div class="ranking__title">
      <h1 :class="[darkModeClassTitle]">Staking Providers' Ranking</h1>

      <span :class="[darkModeClassFonts]"
        >Amount of EGLD on accounts is highlighted by color</span
      >
    </div>

    <AppSpinner v-if="isLoadingProvidersRating" :size-bool="true" />

    <div v-else-if="totalDataChart" class="d-flex justify-content-center mb-3">
      Not data
    </div>

    <div v-else class="ranking__bar-chart">
      <BarChart :chart-data="getProviderRankingData()" style="width: 100%" />
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BarChart from '../charts/BarChart.vue';
import AppSpinner from '../app/AppSpinner.vue';

export default {
  name: 'Ranking',
  components: { AppSpinner, BarChart },
  computed: {
    ...mapGetters([
      'darkModeClassBackground',
      'darkModeClassTitle',
      'darkModeClassFonts',
      'providersRanking',
      'isLoadingProvidersRating',
    ]),
    totalDataChart() {
      return !this.providersRanking && this.providersRanking.length;
    },
  },
  async mounted() {
    await this.fetchProvidersRanking();
  },
  methods: {
    ...mapActions(['fetchProvidersRanking']),

    // Refactoring function
    getProviderRankingData() {
      const elem100 = [];
      const elem1k = [];
      const elem10k = [];
      const elem100k = [];
      const elem1M = [];

      this.providersRanking.forEach((elem) => {
        elem100.push(elem.t_100.amount);
        elem1k.push(elem.f_100_t_1k.amount);
        elem10k.push(elem.f_1k_t_10k.amount);
        elem100k.push(elem.f_10k_t_100k.amount);
        elem1M.push(elem.f_100k.amount);
      });

      const configWidthBar = {
        barPercentage: 1,
        categoryPercentage: 0.8,
      };

      return {
        labels: [...this.providersRanking.map(({ name }) => name)],
        datasets: [
          {
            label: '0-100 EGLD',
            backgroundColor: '#969696',
            data: elem100,
            ...configWidthBar,
          },
          {
            label: '100-1000 EGLD',
            backgroundColor: '#00BA34',
            data: elem1k,
            ...configWidthBar,
          },
          {
            label: '1k-10k EGLD',
            backgroundColor: '#0085FF',
            data: elem10k,
            ...configWidthBar,
          },
          {
            label: '10k-100k EGLD',
            backgroundColor: '#F98600',
            data: elem100k,
            ...configWidthBar,
          },
          {
            label: '100k-1M EGLD',
            backgroundColor: '#E92C2C',
            data: elem1M,
            ...configWidthBar,
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.ranking {
  &-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0;
    border-radius: $border-radius-card;
  }

  &__title {
    text-align: center;
    margin-bottom: 50px;

    & h1 {
      font-size: 36px;
      font-weight: 500;
      margin-bottom: 13px;
    }

    & span {
      font-size: 16px;
    }
  }

  &__bar-chart {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 2000px;
    padding: 0 60px;
    overflow: hidden;
  }
}
</style>
