<template>
  <div class="tabs">
    <p
      v-for="tab in tabs"
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

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      default: () => [
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
      ],
    },
  },
  data() {
    return {
      currentTab: this.tabs[0],
    };
  },
  computed: {
    ...mapGetters(['darkModeClassFonts']),
  },
  methods: {
    chooseTab(tab) {
      this.currentTab = tab;
      this.$emit('selectedTab', tab);
    },
  },
};
</script>

<style lang="scss">
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
