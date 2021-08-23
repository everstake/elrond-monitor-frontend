<template>
  <TableInfo
    :fields="fields"
    :items="statsValidators"
    :class-card="['info-line', darkModeClassBgLightBlue]"
    :class-table-info="['p-0']"
    :loading="loading"
  >
    <template #header> Validators </template>

    <template #validators="{ item }">
      <p class="info-line__value" :class="[darkModeClassTitle]">
        {{ item }}
      </p>
    </template>

    <template #observer_nodes="{ item }">
      <p class="info-line__value" :class="[darkModeClassTitle]">
        {{ item }}
      </p>
    </template>

    <template #staking_apr="{ item }">
      <p class="info-line__value" :class="[darkModeClassTitle]">
        {{ item }}
      </p>
    </template>

    <template #active_stake="{ item }">
      <p class="info-line__value" :class="[darkModeClassTitle]">
        {{ item | formatAmount }}
      </p>
    </template>

    <template #queue="{ item }">
      <p class="info-line__value" :class="[darkModeClassTitle]">
        {{ item }}
      </p>
    </template>

    <template #block-nav>
      <div class="tabs">
        <p
          v-for="tab in tabsList"
          :key="tab.key"
          :class="[
            'tabs__tab',
            darkModeClassFonts,
            { 'tabs__tab--active': currentTab === tab },
          ]"
          @click="chooseTab(tab)"
        >
          {{ tab.label }}
        </p>
      </div>
    </template>
  </TableInfo>
</template>

<script>
import { mapGetters } from 'vuex';
import TableInfo from '../TableInfo.vue';

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
  components: {
    TableInfo,
  },
  data() {
    return {
      currentTab: tabsList[0],
      tabsList,
      fields: [
        {
          key: 'validators',
          label: 'Validators',
          class: {
            item: ['info-line__group'],
          },
        },
        {
          key: 'observer_nodes',
          label: 'Observer nodes',
          class: {
            item: ['info-line__group'],
          },
        },
        {
          key: 'staking_apr',
          label: 'Staking APR',
          class: {
            item: ['info-line__group'],
          },
        },
        {
          key: 'active_stake',
          label: 'Active stake',
          class: {
            item: ['info-line__group'],
          },
        },
        {
          key: 'queue',
          label: 'Queue',
          class: {
            item: ['info-line__group'],
          },
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'darkModeOn',
      'statsValidators',
      'darkModeClassFonts',
      'darkModeClassTitle',
      'darkModeClassBgLightBlue',
    ]),
    loading() {
      return this.statsValidators.length;
    },
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
.info-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;

  @include md-down {
    flex-direction: column;
  }

  &__group {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  &__value {
    @include font($roboto-font, 30px, $main-black, 500);
    line-height: 60px;
  }
}

.tabs {
  width: 100%;
  padding: 40px 50px 0;
  display: flex;
  gap: 45px;

  &__tab {
    padding: 0 9px 8px;
    cursor: pointer;
    font-weight: 500;

    &--active {
      color: $main-blue;
      border-bottom: 2px solid $main-blue;
    }
  }
}
</style>
