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
        {{ item | formatPercent }}
      </p>
    </template>

    <template #active_stake="{ item }">
      <p class="info-line__value" :class="[darkModeClassTitle]">
        {{ item | formatToken }}
      </p>
    </template>

    <template #queue="{ item }">
      <p class="info-line__value" :class="[darkModeClassTitle]">
        {{ item }}
      </p>
    </template>

    <template #block-nav>
      <Tabs />
    </template>
  </TableInfo>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableInfo from '../TableInfo.vue';
import Tabs from './Tabs.vue';

export default {
  name: 'ValidatorsCard',
  components: {
    TableInfo,
    Tabs,
  },
  data() {
    return {
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
      'darkModeClassTitle',
      'darkModeClassBgLightBlue',
    ]),
    loading() {
      return this.statsValidators.length;
    },
  },
  async mounted() {
    await this.fetchStatsValidators();
  },
  methods: {
    ...mapActions(['fetchStatsValidators']),
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
    @include font(30px, $main-black, 500);
    line-height: 60px;
  }
}
</style>
