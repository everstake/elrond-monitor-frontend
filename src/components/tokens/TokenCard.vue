<template>
  <div :class="darkModeClassBackground">
    <table-info :fields="fields" :items="token" :loading="loadingTokens">
      <template #header>Token details</template>

      <template #name="{ item }">{{ item }}</template>

      <template #identity="{ item }">{{ item }}</template>

      <template #supply="{ item }">{{ item | formatAmount }}</template>

      <template #owner="{ item }">
        <span class="row-info__text--blue">
          <router-link :to="{ name: 'AccountDetails', params: { id: item } }">
            {{ item | trimHashFromTo(10, -10) }}
          </router-link>
        </span>
      </template>

      <template #properties="{ item }">
        <span
          v-for="(value, elem) in $_filterProps(item, [
            'canUpgrade',
            'canMint',
            'canBurn',
            'canChangeOwner',
            'canPause',
            'canFreeze',
            'canWipe',
            'isPaused',
          ])"
          :key="elem"
          :class="[
            value[1] ? 'prop__status--true' : 'prop__status--false',
            'prop',
            'prop__status',
          ]"
          >{{ value[0] | splitWord }}</span
        >
      </template>

      <template #decimals="{ item }">{{ item }}</template>
    </table-info>

    <div class="tabs">
      <p
        v-for="tab in tokensTabs"
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableInfo from '../TableInfo.vue';
import filterProps from '../../mixins/filterProps';

const tokensTabs = [
  {
    key: 'transactions',
    label: 'Transactions',
  },
  {
    key: 'accounts',
    label: 'Accounts',
  },
];

export default {
  name: 'TokenCard',
  components: { TableInfo },
  mixins: [filterProps],
  data() {
    return {
      tokensTabs,
      currentTab: tokensTabs[0],
      fields: [
        {
          key: 'name',
          label: 'Name',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'identity',
          label: 'Token',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'supply',
          label: 'Supply',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'properties',
          label: 'Properties',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'owner',
          label: 'Owner',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
        {
          key: 'decimals',
          label: 'Decimals',
          class: {
            label: ['row-info__label'],
            item: ['row-info'],
            wrapper: ['wrapper-table-info__row'],
          },
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'token',
      'loadingTokens',
      'darkModeClassFonts',
      'darkModeClassBackground',
    ]),
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchToken(this.$route.params.id);
        this.chooseTab(tokensTabs[0]);
      },
    },
  },
  methods: {
    ...mapActions(['fetchToken']),
    chooseTab(tab) {
      this.currentTab = tab;
      this.$emit('selectedTab', tab);
    },
  },
};
</script>

<style lang="scss">
.prop {
  margin-right: 10px;
  font-size: 11px;
  color: $main-black;

  &__status {
    padding: 1px 5px;

    border: 1px solid;
    border-radius: 50px;

    &--true {
      border-color: $light-green;
      background: $light-green;
    }
    &--false {
      border-color: $orange;
      background: $orange;
    }
  }
}
</style>
