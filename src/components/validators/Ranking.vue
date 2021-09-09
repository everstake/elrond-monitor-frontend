<template>
  <b-container :class="['ranking ranking-card ', darkModeClassBackground]">
    <div class="ranking__title">
      <h1 :class="[darkModeClassTitle]">Staking Providers' Ranking</h1>

      <span :class="[darkModeClassFonts]"
        >Amount of elrond on accounts is highlighted by color</span
      >
    </div>

    <div class="ranking__bar-chart">
      <BarChart :chart-data="getProviderRankingData()" style="width: 100%" />
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BarChart from '../charts/BarChart.vue';

export default {
  name: 'Ranking',
  components: { BarChart },
  computed: {
    ...mapGetters([
      'darkModeClassBackground',
      'darkModeClassTitle',
      'darkModeClassFonts',
      'providersRanking',
    ]),
  },
  mounted() {
    this.fetchProvidersRanking();
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
        let elronds100 = 0;
        let elronds1k = 0;
        let elronds10k = 0;
        let elronds100k = 0;
        let elronds1M = 0;

        Object.values(elem.delegators).forEach((e) => {
          const num = Number(e);
          if (num <= 100) {
            elronds100 += num;
          } else if (num > 100 && num <= 1000) {
            elronds1k += num;
          } else if (num > 1000 && num <= 10000) {
            elronds10k += num;
          } else if (num > 10000 && num <= 100000) {
            elronds100k += num;
          } else if (num > 100000) {
            elronds1M += num;
          }
        });

        [elronds100, elronds1k, elronds10k, elronds100k, elronds1M].forEach(
          (e, i) => {
            switch (i) {
              case 0:
                elem100.push(e);
                break;
              case 1:
                elem1k.push(e);
                break;
              case 2:
                elem10k.push(e);
                break;
              case 3:
                elem100k.push(e);
                break;
              case 4:
                elem1M.push(e);
                break;
              default:
            }
          },
        );
      });

      const configWidthBar = {
        barPercentage: 0.5,
        categoryPercentage: 1,
      };

      return {
        labels: [...this.providersRanking.map(({ provider }) => provider)],
        datasets: [
          {
            label: '0-100 elronds',
            backgroundColor: '#969696',
            data: elem100,
            ...configWidthBar,
          },
          {
            label: '100-1000 elronds',
            backgroundColor: '#00BA34',
            data: elem1k,
            ...configWidthBar,
          },
          {
            label: '1k-10k elronds',
            backgroundColor: '#0085FF',
            data: elem10k,
            ...configWidthBar,
          },
          {
            label: '10k-100k elronds',
            backgroundColor: '#F98600',
            data: elem100k,
            ...configWidthBar,
          },
          {
            label: '100k-1M elronds',
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
    height: 100%;
    padding: 0 60px;
  }
}
</style>
