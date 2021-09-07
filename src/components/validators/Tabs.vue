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

const tabs = [
  {
    key: 'Validator',
    label: 'Validators',
  },
  {
    key: 'Staking-providers',
    label: 'Staking Providers',
  },
  {
    key: 'Nodes',
    label: 'Nodes',
  },
  {
    key: 'Ranking',
    label: 'Ranking',
  },
];

export default {
  name: 'Tabs',
  data() {
    return {
      tabs,
      currentTab: tabs[0],
    };
  },
  computed: {
    ...mapGetters(['darkModeClassFonts']),
  },
  mounted() {
    this.$router.replace({ name: this.currentTab.key });
  },
  methods: {
    chooseTab(tab) {
      this.currentTab = tab;
      this.$router.replace({ name: tab.key });
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  overflow-x: auto;
}
</style>
