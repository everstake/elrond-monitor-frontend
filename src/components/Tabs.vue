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
import { mapGetters, mapMutations } from 'vuex';

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
  mounted() {
    this.setActiveTab(this.tabs[0]);
  },
  methods: {
    ...mapMutations(['setActiveTab']),
    chooseTab(tab) {
      this.currentTab = tab;
      this.setActiveTab(tab);
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
