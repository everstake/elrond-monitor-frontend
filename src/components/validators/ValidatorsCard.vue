<template>
  <div
    class="validators-card"
    :class="{
      'white-background': !darkModeOn,
      'black-background': darkModeOn,
    }"
  >
    <h1
      class="table-card__title validators-card__title"
      :class="{
        'white-font-main': darkModeOn,
        'black-font-main': !darkModeOn,
      }"
    >
      Validators
    </h1>
    <div
      class="validators-card__info-line info-line"
      :class="{
        'light-blue-background': !darkModeOn,
        'dark-blue-bakcground': darkModeOn,
      }"
    >
      <!--      <div class="info-line__group">-->
      <!--        <p class="info-line__text">Current leader</p>-->
      <!--        <img src="~@/assets/img/avatar.svg" alt="" class="info-line__img" />-->
      <!--      </div>-->

      <div class="info-line__group">
        <p class="info-line__text">Validators</p>
        <p class="info-line__value">{{ statsValidators.validators }}</p>
      </div>

      <div class="info-line__group">
        <p class="info-line__text">Observer nodes</p>
        <p class="info-line__value">{{ statsValidators.observer_nodes }}</p>
      </div>

      <div class="info-line__group">
        <p class="info-line__text">Staking APR</p>
        <p class="info-line__value">{{ statsValidators.staking_apr }}</p>
      </div>

      <div class="info-line__group">
        <p class="info-line__text">Active stake</p>
        <p class="info-line__value">
          {{ statsValidators.active_stake | formatAmount }}
        </p>
      </div>

      <div class="info-line__group">
        <p class="info-line__text">Queue</p>
        <p class="info-line__value">{{ statsValidators.queue }}</p>
      </div>
    </div>

    <div class="tabs">
      <p
        v-for="tab in tabsList"
        :key="tab.key"
        class="tabs__tab"
        :class="{ 'tabs__tab--active': currentTab === tab }"
        @click="chooseTab(tab)"
      >
        {{ tab.label }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const tabsList = [
  {
    key: 'validators',
    label: 'Validators',
  },
  {
    key: 'stakingProviders',
    label: 'Staking Providers',
  },
  {
    key: 'nodes',
    label: 'Nodes',
  },
  {
    key: 'ranking',
    label: 'Ranking',
  },
];

export default {
  name: 'ValidatorsCard',
  data() {
    return {
      currentTab: tabsList[0],
      tabsList,
    };
  },
  computed: {
    ...mapGetters(['darkModeOn', 'statsValidators', 'darkModeClassFonts']),
  },
  watch: {
    currentTab: {
      immediate: true,
      handler(val) {
        this.$emit('selectedTab', val);
      },
    },
  },
  methods: {
    chooseTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<style lang="scss">
.validators-card {
  border-radius: 8px;
  &__title {
    text-align: center;
    padding: 25px 0;
  }
  .info-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;

    &__group {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    &__text {
      @include font($roboto-font, 16px, $font-black, 400);
    }
    &__value {
      @include font($roboto-font, 30px, $main-black, 500);
      line-height: 60px;
    }
  }
}

.tabs {
  width: 100%;
  padding: 40px 50px 2px 50px;
  display: flex;
  gap: 45px;

  &__tab {
    padding: 0px 9px 5px;
    @include font($inter-font, 16px, $font-black, 500);
    cursor: pointer;

    &--active {
      color: $main-blue;
      border-bottom: 2px solid $main-blue;
    }
  }
}
</style>
